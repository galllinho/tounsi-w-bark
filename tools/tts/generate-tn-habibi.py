"""ESSAI : voix tunisienne avec le modèle « Unified » de Habibi-TTS et l'identifiant de dialecte TUN.

Usage : python tools/tts/generate-tn-habibi.py phrases.json dossier_sortie
Habibi-TTS n'a pas de modèle spécialisé tunisien ; le modèle Unified connaît le tunisien (identifiant ⑨).
Licence : CC BY-NC-SA 4.0 (non commercial ; partage dans les mêmes conditions).
Extrait de référence : une phrase tunisienne déjà lue par la voix SILMA (src/audio/tn-ia), avec son texte,
pour garder une voix tunisienne ; variables REF_AUDIO / REF_TEXT pour en choisir une autre.
"""
import json, os, re, sys, time

import soundfile as sf
from cached_path import cached_path


def clean(t):
    t = re.sub(r"[ً-ْٰـ]", "", t)
    return re.sub(r"\s+", " ", t.replace("…", "،").replace("؟", "؟ ").replace("!", "! ")).strip()


def main():
    items = json.load(open(sys.argv[1], encoding="utf-8"))
    out = sys.argv[2]
    os.makedirs(out, exist_ok=True)
    from importlib.resources import files
    from hydra.utils import get_class
    from omegaconf import OmegaConf
    from f5_tts.infer.utils_infer import load_model, load_vocoder, preprocess_ref_audio_text
    import habibi_tts.infer.utils_infer as H
    from habibi_tts.model.utils import dialect_id_map

    ref, ref_text = os.environ.get("REF_AUDIO"), os.environ.get("REF_TEXT")
    if not ref:   # une phrase de 25 à 50 lettres qui a déjà une voix SILMA
        for it in items:
            p = os.path.join("src/audio/tn-ia", it["key"] + ".mp3")
            if os.path.exists(p) and 25 <= len(re.findall(r"[؀-ۿ]", it["text"])) <= 50:
                ref, ref_text = p, clean(it["text"]); break
    print("Extrait de référence :", ref, ref_text, flush=True)
    cfg = OmegaConf.load(str(files("f5_tts").joinpath("configs/F5TTS_v1_Base.yaml")))
    model_cls = get_class(f"f5_tts.model.{cfg.model.backbone}")
    mel = cfg.model.mel_spec.mel_spec_type
    model = load_model(model_cls, cfg.model.arch, str(cached_path("hf://SWivid/Habibi-TTS/Unified/model_200000.safetensors")),
                       mel_spec_type=mel, vocab_file=str(cached_path("hf://SWivid/Habibi-TTS/Unified/vocab.txt")), device="cpu")
    vocoder = load_vocoder(vocoder_name=mel, device="cpu")
    ref, ref_text = preprocess_ref_audio_text(ref, ref_text)
    for it in items:
        wav_path = os.path.join(out, it["key"] + ".wav")
        if os.path.exists(wav_path):
            continue
        t0 = time.time()
        try:
            wav, sr, _ = H.infer_process(ref, ref_text, clean(it["text"]), model, vocoder, mel_spec_type=mel,
                                         target_rms=H.target_rms, cross_fade_duration=H.cross_fade_duration, nfe_step=32,
                                         cfg_strength=H.cfg_strength, sway_sampling_coef=H.sway_sampling_coef,
                                         speed=0.9, fix_duration=None, device="cpu", dialect_id=dialect_id_map["TUN"])
            sf.write(wav_path, wav, sr, subtype="PCM_16")
        except Exception as e:
            print(f"ÉCHEC {it['key']} : {e}", flush=True); continue
        print(f"{it['key']}  {time.time() - t0:.1f}s  {it['text']}", flush=True)


if __name__ == "__main__":
    main()
