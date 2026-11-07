"""Vérifie que les voix KABYLES contiennent bien de la parole : transcription par Meta MMS (facebook/mms-1b-all,
adaptateur « kab »), puis comparaison lettre à lettre avec la phrase demandée (score 0 à 1).
Usage : python tools/tts/check-asr-kab.py phrases.json dossier_audio [rapport.md]
"""
import json, os, re, subprocess, sys, unicodedata
from difflib import SequenceMatcher

import numpy as np
import torch
from transformers import AutoProcessor, Wav2Vec2ForCTC


def norm(t):
    t = unicodedata.normalize("NFD", t.lower())
    t = "".join(c for c in t if not unicodedata.combining(c))
    return re.sub(r"[^a-zɣɛčǧ]", "", t)


def load16k(p):
    raw = subprocess.run(["ffmpeg", "-loglevel", "error", "-i", p, "-f", "s16le", "-ac", "1", "-ar", "16000", "-"], capture_output=True).stdout
    return np.frombuffer(raw, dtype=np.int16).astype(np.float32) / 32768


def main():
    items = {it["key"]: it["text"] for it in json.load(open(sys.argv[1], encoding="utf-8"))}
    d = sys.argv[2]
    rapport = sys.argv[3] if len(sys.argv) > 3 else None
    proc = AutoProcessor.from_pretrained("facebook/mms-1b-all", target_lang="kab")
    model = Wav2Vec2ForCTC.from_pretrained("facebook/mms-1b-all", target_lang="kab", ignore_mismatched_sizes=True).eval()
    rows, scores = [], []
    for f in sorted(os.listdir(d)):
        k = os.path.splitext(f)[0]
        if k not in items:
            continue
        x = load16k(os.path.join(d, f))
        with torch.no_grad():
            ids = model(**proc(x, sampling_rate=16000, return_tensors="pt")).logits.argmax(-1)[0]
        heard = proc.decode(ids)
        a, b = norm(items[k]), norm(heard)
        s = SequenceMatcher(None, a, b).ratio() if a else 0
        scores.append(s)
        rows.append(f"| {s:.2f} | {items[k]} | {heard} |")
        print(f"{s:.2f}  {items[k]}  →  {heard}", flush=True)
    moy = sum(scores) / len(scores) if scores else 0
    txt = "| Score | Phrase demandée | Ce que MMS entend |\n|---|---|---|\n" + "\n".join(rows) + f"\n\nScore moyen : {moy:.2f} sur {len(scores)} fichiers.\n"
    if rapport:
        open(rapport, "a", encoding="utf-8").write("\n## Reconnaissance vocale (MMS, kabyle)\n\n" + txt)
    print(f"Score moyen : {moy:.2f}")


if __name__ == "__main__":
    main()
