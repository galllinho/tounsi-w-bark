"""Vérifie que chaque voix générée a une durée cohérente avec sa phrase (ni muette, ni bavarde, ni coupée).

Usage : python tools/tts/check-durations.py phrases.json dossier_wav [rapport.md]
Règle : entre 0,04 et 0,22 seconde par lettre arabe (hors espaces), au moins 0,4 s, au plus 15 s.
Les fichiers hors règle sont SUPPRIMÉS (ils seront regénérés ou remplacés par la voix du téléphone).
Code de sortie 1 si plus d'un quart des fichiers est hors règle (modèle inutilisable).
"""
import json, os, sys, wave

items = {it["key"]: it["text"] for it in json.load(open(sys.argv[1], encoding="utf-8"))}
d = sys.argv[2]
rows, bad, n = [], 0, 0
for f in sorted(os.listdir(d)):
    if not f.endswith(".wav"):
        continue
    k = f[:-4]
    if k not in items:
        continue
    n += 1
    with wave.open(os.path.join(d, f)) as w:
        dur = w.getnframes() / float(w.getframerate())
    letters = len([c for c in items[k] if "؀" <= c <= "ۿ"]) or 1
    r = dur / letters
    ok = 0.4 <= dur <= 15 and 0.04 <= r <= 0.22
    rows.append(f"| {'ok' if ok else 'HORS RÈGLE'} | {dur:.2f} s | {letters} | {r:.3f} | {items[k]} |")
    if not ok:
        bad += 1
        os.remove(os.path.join(d, f))
report = "| Résultat | Durée | Lettres | s/lettre | Phrase |\n|---|---|---|---|---|\n" + "\n".join(rows) + f"\n\n{n} fichiers, {bad} hors règle (supprimés).\n"
print(report)
if len(sys.argv) > 3:
    open(sys.argv[3], "w", encoding="utf-8").write(report)
sys.exit(1 if n == 0 or bad * 4 > n else 0)
