# Atmosphäre-Parameter – Open Book SVG

## Ziel

Das geöffnete Buch-SVG soll als poetische, subtile Hintergrundstimmung wahrnehmbar sein – wie eine Erinnerung, kein zweites Bild. Der Blick fällt immer zuerst auf das Cover. Das Motiv soll erkennbar sein, aber niemals mit dem Cover konkurrieren.

## Finale Parameter

| Parameter | Wert | Begründung |
|---|---|---|
| `left` | `-30%` | Element beginnt 30 % der Buchbreite links vom Buch. Das SVG (600 px breit) beginnt dort und erstreckt sich bis 480 px – abgedeckt wird die linke Buchhälfte plus der Bereich links daneben. |
| `width` | `150%` | Das Element endet 20 % rechts vom Buch – genug Platz für den rechten Buchflügel des SVG. |
| `height` | `180%` | Überragt das Buch oben und unten um je 40 % – kein harter Abschluss. |
| `top` / `translateY` | `50%` / `-50%` | Vertikal zentriert zum Buch. |
| `background` | SVG `left center / contain` + Radial-Gradient | **SVG linksbündig**: Das offene Buch beginnt am linken Rand des Elements (–120 px). Der **warme Radial-Gradient** (rgb(255,225,190) → transparent) liegt als zweite Ebene darunter und erzeugt eine dezente Temperatur. Das Zentrum des Gradienten liegt bei 60 px (Buchkoordinate) – deckungsgleich mit der Maske. |
| `opacity` | `0.04` | Sehr niedrig, aber ausreichend, um die Buchform bei bewusstem Hinsehen zu erkennen. |
| `filter` | `blur(4px)` | moderate Unschärfe – die Buchkonturen bleiben als weiche Silhouette erkennbar, ohne harte Kanten. |
| `mask-image` | `radial-gradient(ellipse at 30% 50%, black 14%, transparent 45%)` | **Sichtbarer Bereich**: Voll sichtbar ab 14 % Radius (96 px) um das Zentrum bei 60 px → von –36 px bis 156 px in Buchkoordinaten. Das zeigt die Bindung und beide Buchflügelansätze. Die Ausblendzone (14–45 %) erstreckt sich von –248 px bis 368 px – sanfter Übergang, kein harter Cut. |

## Geometrie (bei 400 px × 600 px Buch)

```
Element:             left=-120 px  width=600 px  →  -120 … 480
                      top=-240 px  height=1080 px →  -240 … 840
SVG (contain):       600 × 932 px, positioniert left center
                      horizontal:  -120 … 480
                      vertikal:    -204 … 728  (74 px padding oben/unten)
Mask center:         30 % von 600 px = 180 px vom Elementrand → 60 px vom Buch
SVG-Inhalt (ca.):    linke Seite -120 … –50, Bindung –50 … 0, rechte Seite 0 … 300
Farthest corner:     (480, 840) → Radius = 684 px
Inner circle (14 %): 96 px um (60, 300) → voll sichtbar von  –36 px … 156 px
  → zeigt: Bindung + 36 px linke Seite + 156 px rechte Seite
Outer circle (45 %): 308 px um (60, 300) → Ausblendung von –248 px … 368 px
  → linke Seite blendet von 0 px bis –248 px ein
  → rechte Seite blendet von 156 px bis 368 px aus
  → gesamte Buchfläche ist abgedeckt, aber Ränder sind weich
```

## Warum der Lichtbalken verschwindet und die Buchform erkennbar bleibt

1. **Kein Zentrieren**: Das SVG liegt links vom Buch (beginnt bei –120 px). Die hellen Buchseiten überlappen das Cover maximal im Bereich 0–156 px (rechter Buchflügel, 39 % der Coverbreite) – und das bei nur 4 % Deckkraft.
2. **Die Maske folgt der Buchform**: Das sichtbare Zentrum (14 % Radius) liegt genau auf der Bindung des offenen Buchs. Beide Buchflügel werden symmetrisch eingeblendet – die weißen Seitenflächen erscheinen als weiche, flächige Helligkeit, nicht als harter Streifen.
3. **Blur (4 px) erhält die Form**: Im Gegensatz zu 8 px sind bei 4 px die Buchkonturen (aus den schwarzen SVG-Strokelines) als weiche Silhouette erkennbar – der Betrachter identifiziert das Motiv, ohne dass Details stören.
4. **Die warme Tönung verstärkt die Atmosphäre**: Der Radial-Gradient im Hintergrund (deckungsgleich mit der Maske) färbt die sichtbare Fläche in einen hauchzarten Warmton – unterbewusst poetisch, nicht technisch.
5. **Stufenlose Transparenz**: Die 31-prozentige Ausblendzone (14→45 %) erstreckt sich über 212 px – kein scharfer Cut, kein sichtbarer Maskenrand.

## Ergebnis

Das geöffnete Buch erscheint als weiche, warme Lichtsilhouette **links neben dem Buch** mit sanftem Übergang auf die vordere Coverhälfte. Der Betrachter sieht zuerst das Hardcover. Erst beim genaueren Hinsehen wird die poetische Buch-Silhouette im Hintergrund bewusst wahrgenommen – als unterbewusste Erinnerung, nicht als zweites Bild.
