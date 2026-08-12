# Atmosphäre – Open Book SVG

## SVG-Analyse

```
viewBox="0 0 112.07 173.99"
<g transform="matrix(1.3122 0 0 1.3122 -639.66 -914.1)">
```

Fünf Pfade nach Transformation in viewBox-Koordinaten:

| Pfad | Funktion | viewBox (ca.) |
|---|---|---|
| 1 | Linker Buchflügel (weggedreht) | X 1–102, Y 24–51 |
| 3 | Rechter Buchflügel (nach vorn) | X 12–108, Y 37–174 |
| 2 + 5 | Bindung / Kantendetails | X 80–110, Y 3–15 |
| 4 | Buchblock (vertikale Kante) | X 21, Y 35–173 |

Das Motiv zeigt ein geöffnetes Buch in Schrägansicht: die linke Seite ist kleiner
und steht höher (weggedreht), die rechte Seite ist größer und reicht tiefer (dem
Betrachter zugewandt). Die schwarzen Strokes definieren die Page-Outlines – sie
sind das erkennbare Strukturmerkmal.

## Finale CSS-Parameter

```css
.coverFrame::before {
  position: absolute;
  left: -25%;          /* Element beginnt 25 % links vom Buch */
  width: 140%;         /* endet 15 % rechts vom Buch */
  height: 180%;        /* überragt Buch oben/unten um je 40 % */
  top: 50%;
  transform: translateY(-50%);
  background:
    url('…svg') no-repeat center / contain,   /* SVG zentriert */
    radial-gradient(ellipse at center, rgb(255,225,190), transparent 50%);
  opacity: 0.045;
  filter: blur(1.5px);
  mask-image: radial-gradient(ellipse at 50% 50%, black 18%, transparent 42%);
}
```

## Geometrie (400 px × 600 px Buch)

```
Element:   left=-100px  width=560px → -100 … 460
           top=-240px   height=1080px → -240 … 840
SVG (contain): 560×870 px → füllt Element horizontal, 105 px padding vertikal
               Bindung bei ~50 % (≈ 280 px vom Element = 180 px vom Buch)
Mask center: 50 % vom Element = 280 px vom Elementrand = 180 px vom Buch
             ≈ Bindung des offenen Buchs
Inner (18 %): 608 px × 0.18 = 109 px → [71 px … 289 px]
  → Linker Flügel: 71–180 px (109 px sichtbar)
  → Rechter Flügel: 180–289 px (109 px sichtbar)
  → Bindung bei 180 px
Outer (42 %): 608 px × 0.42 = 255 px → [-75 px … 435 px]
  → Linke Ausblendung: -75 px bis 71 px (146 px weicher Übergang)
  → Rechte Ausblendung: 289 px bis 435 px
  → Die weiße Füllfläche des linken Flügels (-100 px … -75 px) ist ausgeblendet
```

## Warum der Lichtbalken verschwindet

Der weiße Füllbereich des linken Buchflügels erstreckt sich von -100 px bis
ca. -50 px (linke Buchhälfte). Die Maske blendet diesen Bereich aus:
- -100 px … -75 px: vollständig verborgen (außerhalb outer radius)
- -75 px … 71 px: sanfte Einblendung über 146 px
- 71 px … 289 px: voll sichtbar (Spine + Flügel)

Die ehemalige „Lichtbalken"-Fläche (-100 px … -10 px) liegt fast vollständig
im Ausblendungsbereich. Da der Übergang 146 px breit ist, entsteht kein
scharfer Cut und kein Streifen.

## Warum das Buchmotiv erkennbar bleibt

1. **Blur 1,5 px** (statt 4 px oder 8 px): Die schwarzen Stroke-Outlines der
   Buchflügel bleiben als weiche Linien erkennbar. Der Betrachter identifiziert
   die Buchform, nicht nur diffuse Helligkeit.
2. **Maske zentriert auf die Bindung**: Beide Flügel werden symmetrisch um die
   Bindung sichtbar. Die asymmetrische Flügelstellung (links kleiner/ höher,
   rechts größer/tiefer) bleibt als charakteristische Form erhalten.
3. **Opacity 0,045**: Niedrig genug, um das Cover nicht zu überlagern – hoch
   genug, dass die Page-Outlines bei bewusstem Hinsehen sichtbar sind.
4. **Warme Tönung**: Der Radial-Gradient unterlegt die sichtbare Fläche mit
   einem hauchzarten Warmton – poetisch, nicht technisch.
