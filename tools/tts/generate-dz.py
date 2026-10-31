"""Génère l'audio de phrases algériennes avec KasbahTTS (MenaVoice/KasbahTTS-V0).

Usage : python tools/tts/generate-dz.py phrases.json dossier_sortie
phrases.json = [{"key": "...", "text": "phrase en écriture arabe"}, ...]

Modèle : KasbahTTS-V0, affiné depuis Habibi-TTS (F5-TTS) sur de la darja ALGÉRIENNE parlée (« Algerian Dardja »),
licence MIT d'après sa fiche Hugging Face : usage gratuit, y compris non commercial, avec attribution.
Entrée : écriture arabe sans voyelles, sans chiffres. F5-TTS imite la voix d'un court extrait de référence :
on utilise l'extrait arabe fourni avec SILMA TTS (transcription connue), comme pour la voix tunisienne.
Variables : REF_AUDIO / REF_TEXT (autre extrait), MAX_MINUTES (s'arrêter proprement avant la limite GitHub),
MODEL_REPO / MODEL_CKPT / MODEL_VOCAB (pour essayer Habibi-TTS « Specialized/ALG »).
"""
import json, os, re, sys, time

from huggingface_hub import hf_hub_download

REPO = os.environ.get("MODEL_REPO", "MenaVoice/KasbahTTS-V0")
CKPT = os.environ.get("MODEL_CKPT", "ALGERIA.safetensors")
VOCAB = os.environ.get("MODEL_VOCAB", "vocab.txt")
REF_TEXT_DEFAULT = "ويدقق النظر في القرآن الكريم وسائر الكتب السماوية ويتبع مسالك الرسل العظام عليهم الصلاة والسلام."


def clean(t):
    # Le modèle attend de l'arabe sans voyelles (tachkil) ni ponctuation exotique
    t = re.sub(r"[ً-ْٰـ]", "", t)
    t = t.replace("…", "،").replace("؟", "؟ ").replace("!", "! ")
    return re.sub(r"\s+", " ", t).strip()


def main():
    items = json.load(open(sys.argv[1], encoding="utf-8"))
    out = sys.argv[2]
    os.makedirs(out, exist_ok=True)
    ckpt = hf_hub_download(REPO, CKPT)
    vocab = hf_hub_download(REPO, VOCAB)
    ref = os.environ.get("REF_AUDIO")
    if not ref:
        from importlib.resources import files
        ref = str(files("silma_tts").joinpath("infer/ref_audio_samples/ar.ref.24k.wav"))
    ref_text = os.environ.get("REF_TEXT") or REF_TEXT_DEFAULT

    from f5_tts.api import F5TTS
    try:
        tts = F5TTS(model="F5TTS_Base", ckpt_file=ckpt, vocab_file=vocab, device="cpu")
    except TypeError:
        tts = F5TTS(model_type="F5-TTS", ckpt_file=ckpt, vocab_file=vocab, device="cpu")
    print("Modèle chargé :", REPO, flush=True)

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
            tts.infer(ref_file=ref, ref_text=ref_text, gen_text=clean(it["text"]), file_wave=wav_path,
                      seed=1234, speed=float(it.get("speed", 0.9)), nfe_step=32, remove_silence=True)
        except Exception as e:  # une phrase ratée ne bloque pas les autres
            print(f"ÉCHEC {it['key']} : {e}", flush=True)
            continue
        print(f"{it['key']}  {time.time() - t0:.1f}s  {it['text']}", flush=True)


if __name__ == "__main__":
    main()
