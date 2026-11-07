"""Génère l'audio de phrases marocaines avec Habibi-TTS, modèle spécialisé « MAR » (darija marocaine).

Usage : python tools/tts/generate-ma.py phrases.json dossier_sortie
phrases.json = [{"key": "...", "text": "phrase en écriture arabe"}, ...]

Modèle : SWivid/Habibi-TTS, Specialized/MAR/model_100000.safetensors (F5-TTS v1 Base affiné sur de la darija
marocaine : jeux de données adiren7/darija_speech_to_text et KandirResearch/DarijaTTS-clean d'après la fiche).
Licence des modèles spécialisés ALG, EGY, IRQ, MAR, MSA : Apache 2.0 (le modèle « Unified » est CC BY-NC-SA, pas utilisé ici).
F5-TTS imite la voix d'un court extrait de référence : on prend l'extrait marocain fourni par Habibi-TTS
(assets/MAR.mp3) avec sa transcription officielle.
Variables : REF_AUDIO / REF_TEXT (autre extrait), MAX_MINUTES (s'arrêter proprement avant la limite GitHub), NFE (32).
"""
import json, os, re, subprocess, sys, time

import soundfile as sf
from cached_path import cached_path

REF_TEXT_DEFAULT = "إذا بغيتي شي صوت باللهجة المغربية للإعلانات ديالك هذا أحسن واحد غادي تلقاه."


GAF = "ڭ"  # remplacé au chargement par la lettre « g » que le vocabulaire du modèle connaît (ڭ, گ, ڨ ou ق)


def clean(t):
    t = re.sub(r"[ً-ْٰـ]", "", t)
    t = t.replace("ڭ", GAF).replace("…", "،").replace("؟", "؟ ").replace("!", "! ")
    return re.sub(r"\s+", " ", t).strip()


def ref_audio_path():
    ref = os.environ.get("REF_AUDIO")
    if ref:
        return ref
    try:
        from importlib.resources import files
        p = files("habibi_tts").joinpath("assets/MAR.mp3")
        if p.is_file():
            return str(p)
    except Exception:
        pass
    if not os.path.exists("habibi-src"):
        subprocess.run(["git", "clone", "-q", "--depth", "1", "https://github.com/SWivid/Habibi-TTS", "habibi-src"], check=True)
    return "habibi-src/src/habibi_tts/assets/MAR.mp3"


def main():
    items = json.load(open(sys.argv[1], encoding="utf-8"))
    out = sys.argv[2]
    os.makedirs(out, exist_ok=True)
    from importlib.resources import files
    from hydra.utils import get_class
    from omegaconf import OmegaConf
    from f5_tts.infer.utils_infer import load_model, load_vocoder, preprocess_ref_audio_text
    import habibi_tts.infer.utils_infer as H

    cfg = OmegaConf.load(str(files("f5_tts").joinpath("configs/F5TTS_v1_Base.yaml")))
    model_cls = get_class(f"f5_tts.model.{cfg.model.backbone}")
    mel = cfg.model.mel_spec.mel_spec_type
    ckpt = str(cached_path("hf://SWivid/Habibi-TTS/Specialized/MAR/model_100000.safetensors"))
    vocab = str(cached_path("hf://SWivid/Habibi-TTS/Specialized/MAR/vocab.txt"))
    global GAF
    voc = set(l.rstrip("\n") for l in open(vocab, encoding="utf-8"))
    GAF = next((c for c in ["ڭ", "گ", "ڨ", "ق"] if c in voc), "ق")
    print("Lettre utilisée pour le son g :", GAF, "| ڭ dans le vocabulaire :", "ڭ" in voc, "| گ :", "گ" in voc, flush=True)
    model = load_model(model_cls, cfg.model.arch, ckpt, mel_spec_type=mel, vocab_file=vocab, device="cpu")
    vocoder = load_vocoder(vocoder_name=mel, device="cpu")
    ref, ref_text = preprocess_ref_audio_text(ref_audio_path(), os.environ.get("REF_TEXT") or REF_TEXT_DEFAULT)
    print("Modèle chargé : Habibi-TTS Specialized/MAR", flush=True)
    nfe = int(os.environ.get("NFE", getattr(H, "nfe_step", 32)))

    budget = float(os.environ.get("MAX_MINUTES", "0")) * 60
    start = time.time()
    for it in items:
        if budget and time.time() - start > budget:
            print("Temps écoulé : on garde ce qui est fait, le reste sera généré au prochain lancement", flush=True)
            break
        wav_path = os.path.join(out, it["key"] + ".wav")
        if os.path.exists(wav_path):
            continue
        t0 = time.time()
        try:
            wav, sr, _ = H.infer_process(ref, ref_text, clean(it["text"]), model, vocoder, mel_spec_type=mel,
                                         target_rms=H.target_rms, cross_fade_duration=H.cross_fade_duration, nfe_step=nfe,
                                         cfg_strength=H.cfg_strength, sway_sampling_coef=H.sway_sampling_coef,
                                         speed=float(it.get("speed", 0.9)), fix_duration=None, device="cpu", dialect_id=None)
            sf.write(wav_path, wav, sr, subtype="PCM_16")
        except Exception as e:  # une phrase ratée ne bloque pas les autres
            print(f"ÉCHEC {it['key']} : {e}", flush=True)
            continue
        print(f"{it['key']}  {time.time() - t0:.1f}s  {it['text']}", flush=True)


if __name__ == "__main__":
    main()
