"""Génère l'audio de phrases tunisiennes avec le modèle SILMA TTS Derja (Ghazouaniwala/silma-tts-derja).

Usage : python tools/tts/generate.py phrases.json dossier_sortie
phrases.json = [{"key": "...", "text": "phrase en écriture arabe"}, ...]

Le modèle est sous licence Apache-2.0 d'après sa fiche (cc-by-nc-4.0 d'après son config.yaml) :
usage gratuit et non commercial, avec attribution. Entraîné sur le corpus LinTO tunisien (CC BY 4.0, Linagora).
"""
import json, os, sys, time, types

# Les normaliseurs de nombres (nemo) et de voyelles (catt) servent à l'arabe standard :
# on les remplace par des modules vides pour ne pas déformer le tunisien.
nemo = types.ModuleType("nemo_text_processing.text_normalization.normalize")
class Normalizer:  # noqa: D401
    def __init__(self, *a, **k): pass
    def normalize(self, t, *a, **k): return t
nemo.Normalizer = Normalizer
for name in ["nemo_text_processing", "nemo_text_processing.text_normalization"]:
    sys.modules[name] = types.ModuleType(name)
sys.modules["nemo_text_processing.text_normalization.normalize"] = nemo
catt = types.ModuleType("catt_tashkeel")
class CATTEncoderOnly:
    def __init__(self, *a, **k): pass
    def do_tashkeel_batch(self, texts, *a, **k): return texts
catt.CATTEncoderOnly = CATTEncoderOnly
sys.modules["catt_tashkeel"] = catt

import silma_tts.api as api  # noqa: E402

_orig = api.cached_path
api.cached_path = lambda p, cache_dir=None: _orig(p.replace("hf://silma-ai/silma-tts/", "hf://Ghazouaniwala/silma-tts-derja/"), cache_dir=cache_dir)

from importlib.resources import files  # noqa: E402

REF = str(files("silma_tts").joinpath("infer/ref_audio_samples/ar.ref.24k.wav"))
REF_TEXT = "ويدقق النظر في القرآن الكريم وسائر الكتب السماوية ويتبع مسالك الرسل العظام عليهم الصلاة والسلام."

def main():
    items = json.load(open(sys.argv[1], encoding="utf-8"))
    out = sys.argv[2]
    os.makedirs(out, exist_ok=True)
    tts = api.SilmaTTS(enable_normalizer=False, force_tashkeel=False, device="cpu")
    ref = os.environ.get("REF_AUDIO") or REF
    ref_text = os.environ.get("REF_TEXT") or REF_TEXT
    # Temps maximum (minutes) : on s'arrête proprement avant la limite de GitHub, ce qui est fait est gardé
    budget = float(os.environ.get("MAX_MINUTES", "0")) * 60
    start = time.time()
    for it in items:
        if budget and time.time() - start > budget:
            print("Temps écoulé : on garde ce qui est fait, le reste sera généré au prochain lancement", flush=True)
            break
        t0 = time.time()
        wav_path = os.path.join(out, it["key"] + ".wav")
        if os.path.exists(wav_path):
            continue
        tts.infer(ref_file=ref, ref_text=ref_text, gen_text=it["text"], file_wave=wav_path,
                  seed=1234, speed=float(it.get("speed", 0.9)), normalize_numbers=False, force_tashkeel=False, remove_silence=True)
        print(f"{it['key']}  {time.time() - t0:.1f}s  {it['text']}", flush=True)

if __name__ == "__main__":
    main()
