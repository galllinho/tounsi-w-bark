"""Génère l'audio de phrases algériennes avec un modèle F5-TTS affiné sur la darja algérienne.

Usage : python tools/tts/generate-dz.py phrases.json dossier_sortie
phrases.json = [{"key": "...", "text": "phrase en écriture arabe"}, ...]

CORRECTIF DU 7 NOVEMBRE 2026 : l'ancienne version chargeait le modèle avec la configuration « F5TTS_Base »
(l'ancienne architecture de F5-TTS) au lieu de « F5TTS_v1_Base », celle de Habibi-TTS dont KasbahTTS est dérivé.
Les tailles des couches étant identiques, le chargement ne plantait pas, mais le modèle produisait un bourdonnement
(grésillement continu) à la place de la parole. On utilise maintenant exactement la chaîne de Habibi-TTS
(configuration v1, fonction infer_process de habibi_tts), comme pour la voix marocaine.

Modèles (variable MODELE) :
- alg (par défaut) : SWivid/Habibi-TTS, Specialized/ALG/model_100000.safetensors, darja ALGÉRIENNE, licence Apache 2.0,
  avec l'extrait de référence algérien fourni par Habibi-TTS (assets/ALG.wav) et sa transcription officielle.
- kasbah : MenaVoice/KasbahTTS-V0 (ALGERIA.safetensors, licence MIT), même extrait de référence.
Variables : REF_AUDIO / REF_TEXT (autre extrait), MAX_MINUTES (s'arrêter proprement avant la limite GitHub), NFE (32).
"""
import json, os, re, subprocess, sys, time

import soundfile as sf
from cached_path import cached_path

MODELES = {
    "alg": ("hf://SWivid/Habibi-TTS/Specialized/ALG/model_100000.safetensors", "hf://SWivid/Habibi-TTS/Specialized/ALG/vocab.txt"),
    "kasbah": ("hf://MenaVoice/KasbahTTS-V0/ALGERIA.safetensors", "hf://MenaVoice/KasbahTTS-V0/vocab.txt"),
}
REF_TEXT_DEFAULT = "أنيا هكا باغية ناكل هكا أني ن نشوف فيها الحاجة هذيكا."
GAF = "ڨ"  # remplacé au chargement par la lettre « g » que le vocabulaire du modèle connaît


def clean(t):
    t = re.sub(r"[ً-ْٰـ]", "", t)
    t = t.replace("ڨ", GAF).replace("…", "،").replace("؟", "؟ ").replace("!", "! ")
    return re.sub(r"\s+", " ", t).strip()


def ref_audio_path():
    ref = os.environ.get("REF_AUDIO")
    if ref:
        return ref
    try:
        from importlib.resources import files
        p = files("habibi_tts").joinpath("assets/ALG.wav")
        if p.is_file():
            return str(p)
    except Exception:
        pass
    if not os.path.exists("habibi-src"):
        subprocess.run(["git", "clone", "-q", "--depth", "1", "https://github.com/SWivid/Habibi-TTS", "habibi-src"], check=True)
    return "habibi-src/src/habibi_tts/assets/ALG.wav"


def main():
    global GAF
    items = json.load(open(sys.argv[1], encoding="utf-8"))
    out = sys.argv[2]
    os.makedirs(out, exist_ok=True)
    from importlib.resources import files
    from hydra.utils import get_class
    from omegaconf import OmegaConf
    from f5_tts.infer.utils_infer import load_model, load_vocoder, preprocess_ref_audio_text
    import habibi_tts.infer.utils_infer as H

    modele = os.environ.get("MODELE", "alg")
    ck, vo = MODELES[modele]
    cfg = OmegaConf.load(str(files("f5_tts").joinpath("configs/F5TTS_v1_Base.yaml")))
    model_cls = get_class(f"f5_tts.model.{cfg.model.backbone}")
    mel = cfg.model.mel_spec.mel_spec_type
    ckpt, vocab = str(cached_path(ck)), str(cached_path(vo))
    voc = set(l.rstrip("\n") for l in open(vocab, encoding="utf-8"))
    GAF = next((c for c in ["ڨ", "ڭ", "گ", "ق"] if c in voc), "ق")
    print("Modèle :", modele, ck, "| lettre pour le son g :", GAF, flush=True)
    model = load_model(model_cls, cfg.model.arch, ckpt, mel_spec_type=mel, vocab_file=vocab, device="cpu")
    vocoder = load_vocoder(vocoder_name=mel, device="cpu")
    ref, ref_text = preprocess_ref_audio_text(ref_audio_path(), os.environ.get("REF_TEXT") or REF_TEXT_DEFAULT)
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
