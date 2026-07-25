# Hover-Reflex Analyse – Vertikaler Balken links am Buch

## Kandidaten im BookSection

### 1. `.section::before` — Wärmeglow
```css
top: -30%; left: -15%;
width: 70%; height: 160%;
background: radial-gradient(ellipse at center, rgba(255,225,190,0.05), transparent 70%);
```
- **Position**: Absolut zur Section, links oben (Zentrum bei ~20% Breite, 50% Höhe)
- **Form**: Radial, kein Balken – weite, flächige warme Patina
- **Unabhängig**: ✔ bewegt sich nicht mit dem Buch, folgt keiner Perspektive
- **Wirkung**: Sehr subtiler warmer Schimmer auf der linken Section-Hälfte

---

### 2. `.coverFrame::before` — Offenes Buch-SVG
```css
left: -40%; width: 200%; height: 200%; top: 50%; transform: translateY(-50%);
background: url('openclipart-vectors-book-147566.svg') no-repeat left center / contain;
opacity: 0.1; filter: blur(3px) brightness(1.15);
mask-image: radial-gradient(ellipse at 35% 50%, black 25%, transparent 70%);
z-index: -1;
```
- **SVG-Inhalt**: Offenes Buch (weiße Buchseiten, schwarze Kontur, viewBox="0 0 112.07 173.99")
- **Blur + Opacity**: 3 px Weichzeichnung bei 0.1 Deckkraft → sehr weiche, helle Silhouette
- **Mask**: Sichtbar nur in einem elliptischen Ring um 35% / 50% der Elementfläche
- **Unabhängig**: ✔ hinter dem Buch (z-index: -1), keine Perspektive
- **Wirkung**: Blasse, unscharfe Buchform auf der linken Seite – keine vertikale Linie

---

### 3. `.coverFrame::after` — Wärmeglow um das Buch
```css
inset: -20%;
background: radial-gradient(ellipse at center, rgba(255,220,180,0.06), transparent 60%);
```
- **Form**: Radialer Glow, zentriert um coverFrame
- **Wirkung**: Sehr dezente warme Hülle um das Buch herum

---

### 4. `.coverSurface::before` (Ruhezustand) — Hardcover-Rahmen
```css
top: -10px; left: -10px; width: calc(100% + 20px);
background:
  radial-gradient(ellipse 200% 200% at 0% 0%, rgba(255,255,255,0.09) 0%, …)
  linear-gradient(135°, …)
  #1e2533;
mask-composite: exclude → sichtbar ist nur der 10 px‑Ring
```
- **Radialer Gradient** at 0% 0% (obere linke Ecke):
  - 0% = weiß (0.09)
  - 14% = weiß (0.03)
  - 32% = transparent
  - 46% = schwarz (0.02)
  - …
- **Am linken Ring** (x=0..10 px, y=0..600 px):
  - Entfernung vom Gradient-Zentrum: horizontal 0–10 px, vertikal 0–600 px
  - Bei y=0 (oben): nahe Zentrum → hell (0.09)
  - Bei y=300 px (Mitte): ~25 % Radius → zwischen 0.03 und transparent
  - Bei y=600 px (unten): ~50 % Radius → neutral bis minimal dunkler
- **Wirkung**: Vertikaler Helligkeitsverlauf auf dem linken Rahmen – oben hell, mitte neutral, unten minimal dunkler → **dies könnte der „vertikale Balken“ sein**, da der 10 px‑Ring links neben dem Cover sichtbar ist und über die gesamte Buchhöhe verläuft
- **Buchabhängig**: ✔ Ist Teil des Hardcover-Rahmens, folgt der Buch-Perspektive

---

### 5. `.coverPrint` — Inset-Shadows auf dem Cover
```css
box-shadow:
  inset 0 0 1px 1px rgba(0,0,0,0.10),
  inset 1px 1px 0.5px 0 rgba(255,255,255,0.05),
  inset -1px -1px 1px 0 rgba(0,0,0,0.05);
```
- **Inset 1px 1px 0.5px**: Winziger 0.5 px breiter Highlight-Punkt oben links im Cover
- **Wirkung**: Subpixel-Feinschliff, kein sichtbarer Balken

---

## Bewertung

| Kandidat | Vertikal | Höhe | Unabhängig vom Buch | Sichtbar |
|---|---|---|---|---|
| #1 `.section::before` | Radial, kein Balken | 160% Section | ✔ | Sehr weich |
| #2 `.coverFrame::before` | Buch-Silhouette, kein Balken | 200% | ✔ | Hinter dem Buch |
| #3 `.coverFrame::after` | Radial, kein Balken | -20%/+20% | ~ | kaum |
| **#4 `.coverSurface::before`** | **✔ linke Rahmenseite** | **volle Buchhöhe** | **– (ist der Rahmen)** | **oben hell → mitte neutral** |
| #5 `.coverPrint` | 0.5px, kein Balken | — | — | kaum |

**Verdächtigster Kandidat**: #4 – der `radial-gradient(at 0% 0%)` auf `coverSurface::before` erzeugt einen vertikalen Helligkeitsverlauf auf der linken 10 px-Rahmenkante. Dieser IST Teil des Hardcovers, liegt aber optisch „links neben“ dem Cover-Bild.

Falls der Eindruck entsteht, dass dieser Verlauf **außerhalb der Hardcover-Kante** liegt: das liegt daran, dass der Rahmen 10 px über `coverSurface` hinausragt (`top: -10px; left: -10px`). Der linke Rahmenstreifen ist also tatsächlich 10 px breit und verläuft über die gesamte Buchhöhe – mit einer Helligkeitsspitze am oberen Ende.
