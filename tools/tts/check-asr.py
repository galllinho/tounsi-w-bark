"""Vérifie qu'une voix générée contient bien de la PAROLE (et pas un bourdonnement) : on la fait transcrire par
une reconnaissance vocale (Whisper « small », via faster-whisper, en arabe) et on compare les consonnes du texte
reconnu à celles de la phrase demandée. Ajouté le 7 novembre 2026 après le bug des voix algériennes (grésillement
que le seul contrôle des durées n'avait pas vu).

Usage : python tools/tts/check-asr.py phrases.json dossier_audio [rapport.md] [--supprimer]
Score = part des consonnes de la phrase retrouvées dans l'ordre (0 à 1). Whisper connaît mal les darijas : un score
de 0,3 est déjà une phrase reconnaissable ; un bourdonnement donne 0 ou presque.
Whisper ne reconnaît presque jamais un mot isolé : les phrases de moins de 12 lettres ne comptent pas dans la moyenne
et ne sont jamais supprimées. Code de sortie 1 si la moyenne est sous 0,25 (voix inutilisable).
Avec --supprimer, les fichiers des phrases plus longues dont le score est sous 0,1 sont supprimés.
"""
import json, os, re, sys
from difflib import SequenceMatcher

from faster_whisper import WhisperModel

CONS = {c: c for c in "بتثجحخدذرزسشصضطظعغفقكلمنهڨڭگ"}
CONS.update({"ث": "ت", "ذ": "د", "ظ": "ض", "ه": "ح", "ڨ": "ق", "ڭ": "ق", "گ": "ق", "ك": "ق", "ص": "س", "ط": "ت", "ض": "د"})


def skel(t):
    return "".join(CONS.get(c, "") for c in t)


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    items = {it["key"]: it["text"] for it in json.load(open(args[0], encoding="utf-8"))}
    d = args[1]
    rapport = args[2] if len(args) > 2 else None
    supprimer = "--supprimer" in sys.argv
    model = WhisperModel(os.environ.get("ASR", "small"), device="cpu", compute_type="int8")
    rows, scores = [], []
    for f in sorted(os.listdir(d)):
        k = os.path.splitext(f)[0]
        if k not in items:
            continue
        segs, _ = model.transcribe(os.path.join(d, f), language="ar", beam_size=1, vad_filter=False)
        heard = " ".join(s.text for s in segs).strip()
        a, b = skel(items[k]), skel(heard)
        score = SequenceMatcher(None, a, b).ratio() if a else 0.0
        court = len(re.findall(r"[؀-ۿ]", items[k])) < 12
        if not court:
            scores.append(score)
        rows.append(f"| {score:.2f}{' (mot court)' if court else ''} | {items[k]} | {heard} |")
        print(f"{score:.2f}{' (court)' if court else ''}  {items[k]}  →  {heard}", flush=True)
        if supprimer and score < 0.1 and not court:
            os.remove(os.path.join(d, f))
    moy = sum(scores) / len(scores) if scores else 0
    txt = "| Score | Phrase demandée | Ce que Whisper entend |\n|---|---|---|\n" + "\n".join(rows) + f"\n\nScore moyen : {moy:.2f} sur {len(scores)} phrases de 12 lettres ou plus.\n"
    if rapport:
        open(rapport, "a", encoding="utf-8").write("\n## Reconnaissance vocale\n\n" + txt)
    print(f"Score moyen : {moy:.2f}")
    sys.exit(1 if scores and moy < 0.25 else 0)


if __name__ == "__main__":
    main()
