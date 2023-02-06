# FAQ

## Grids

Da Slidev Webbasiert ist, können Grid-Layouts genutzt werden. [CSS Grids](https://css-tricks.com/snippets/css/complete-guide-grid/), [Flexboxen](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), oder sogar [CSS Masonry Layouts](https://css-tricks.com/native-css-masonry-layout-in-css-grid/), die volle Kontrolle liegt bei dir!

Da wir [Windi CSS](https://windicss.org/) integriert haben, geht es ganz einfach, wie hier:

```html
<div class="grid grid-cols-2 gap-4">
<div>

Die erste Spalte

</div>
<div>

Die zweite Spalte

</div>
</div>
```

Weiter, kann die Größe jeder einzelnen Spalte angepasst werden:

```html
<div class="grid grid-cols-[200px,1fr,10%] gap-4">
<div>

Die erste Spalte (200px)

</div>
<div>

Die zweite Spalte (auto fit)

</div>
<div>

Die dritte Spalte (10% Breite des übergeordneten Containers)

</div>
</div>
```

<<<<<<< HEAD
Erfahre mehr über [Windi CSS Grids](https://windicss.org/utilities/grid.html).
=======
Learn more about [Windi CSS Grids](https://windicss.org/utilities/layout/grid.html).
>>>>>>> dbdc820c8574243d4ae38131ae2a53f6a35a9104

## Positionierung

Folien werden mit festen Größen definiert (Standart: `980x552px`) und so skaliert, dass sie mit der Breite des Benutzerbildschirms übereinstimmen. Somit können Elemente problemlos absolut positioniert werden, ohne sich Gedanken über das Skalieren zumachen. Da die gesamten Folien skaliert werden, werden auch die einzelnen Elemente mit skaliert.

Zum Beispiel:

```html
<div class="absolute left-30px bottom-30px">
Das ist eine nach unten links ausgerichtete Fußzeile
</div>
```

Um die Tatsächliche Größe der Folie zu ändern, kann eine `canvasWidth` Option im ersten Formationsblock hinzugefügt werden:

```yaml
---
canvasWidth: 800
---
```

## Schriftgröße

Falls dir die Schriftgrößen auf den Folien zu klein sind, können diese in folgenden Wegen geändert werden:

### Lokale Styles überschreiben

Man kann die lokale Styles für jede Folie mit einem `<style>` Tag überschreiben.

```md
# Folie 1

<style>
h1 {
  font-size: 10em;
}
</style>

---

# Folie 2

Diese Folie wird nicht beeinflusst.
```

Erfahre mehr über [Embedded Styles](/guide/syntax.html#embedded-styles)

### Globale Styles überschreiben

Man kann eigene globale Styles in der `./style.css` Datei bereitstellen, zum Beispiel:

```css
/* style.css */ 

h1 {
  font-size: 10em !important;
}
```

Erfahre mehr über [Globale Styles](/custom/directory-structure.html#style)

### Den Canvas skalieren

Das Ändern der tatsächlichen Größe des Canvases skaliert alle Inhalte der Folien (Text, Bilder, Komponenten, ...) und Folien.

```yaml
---
# standart: 980
# da der Canvas kleiner wird, wird die visuelle Größe größer 
canvasWidth: 800
---
```

### Transform verwenden

Wir bieten eine integrierte Komponente `<Transform />`, welcher ein Wrapper der CSS `transform` Eigenschaft ist.

```md
<Transform :scale="1.4">

- Item 1
- Item 2

</Transform>
```
