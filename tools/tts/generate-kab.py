"""Génère l'audio de phrases KABYLES avec Meta MMS-TTS (facebook/mms-tts-kab, modèle VITS entraîné sur du kabyle).

Usage : python tools/tts/generate-kab.py phrases.json dossier_sortie
phrases.json = [{"key": "...", "text": "phrase en kabyle latin (ɣ, ɛ, ḥ…)"}, ...]
Licence du modèle : CC BY-NC 4.0 (usage gratuit et non commercial, avec attribution : « Meta MMS »).
Le modèle lit le kabyle en lettres latines minuscules ; les caractères qu'il ne connaît pas sont retirés (liste affichée).
"""
import json, os, sys, time, unicodedata

import numpy as np
import soundfile as sf
import torch
from transformers import AutoTokenizer, VitsModel


def main():
    items = json.load(open(sys.argv[1], encoding="utf-8"))
    out = sys.argv[2]
    os.makedirs(out, exist_ok=True)
    tok = AutoTokenizer.from_pretrained("facebook/mms-tts-kab")
    model = VitsModel.from_pretrained("facebook/mms-tts-kab").eval()
    vocab = set(tok.get_vocab().keys())
    print("Modèle chargé : facebook/mms-tts-kab ; caractères connus :", "".join(sorted(c for c in vocab if len(c) == 1)), flush=True)
    inconnus = set()
    torch.manual_seed(1234)
    for it in items:
        wav_path = os.path.join(out, it["key"] + ".wav")
        if os.path.exists(wav_path):
            continue
        t = unicodedata.normalize("NFC", it["text"].lower()).replace("’", "'").replace("…", ",")
        # Lettres absentes du kabyle (et du modèle) : o → u (Mokrane → Mukrane), p → b, v → f
        t = t.replace("o", "u").replace("p", "b").replace("v", "f")
        garde = []
        for c in t:
            if c in vocab or c == " ":
                garde.append(c)
            else:
                d = unicodedata.normalize("NFD", c)[0]   # ex. ḥ → h si ḥ est inconnu
                if d in vocab:
                    garde.append(d)
                inconnus.add(c)
        texte = " ".join("".join(garde).split())
        if not texte:
            continue
        t0 = time.time()
        with torch.no_grad():
            wav = model(**tok(texte, return_tensors="pt")).waveform[0].numpy()
        sf.write(wav_path, wav.astype(np.float32), model.config.sampling_rate, subtype="PCM_16")
        print(f"{it['key']}  {time.time() - t0:.1f}s  {texte}", flush=True)
    print("Caractères retirés ou simplifiés :", "".join(sorted(inconnus)) or "aucun", flush=True)


if __name__ == "__main__":
    main()
