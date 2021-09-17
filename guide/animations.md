# Animationen

## Klick Animationen

### `v-click`

Um "Klick-Animationen" zu Elementen hinzuzufügen, können die `v-click`-Direktive oder  `<v-click>` Komponente verwendet werden.

```md
# Hallo

<!-- Nutzung der Komponente: Der Text ist unsichtbar, bis "Weiter" gedrückt wird -->
<v-click>

Hallo Welt

</v-click>

<!-- Nutzung der Direktive: Der Text ist unsichtbar, bis "Weiter" ein weiteres mal gedrückt wird -->
<div v-click class="text-xl p-2">

Hey!

</div>
```

### `v-after`

Die Verwendung von `v-after` ist ähnlich wie `v-click`, aber diesmal wird das Element sichtbar, wenn der Vorherige `v-click`ausgelöst wird.

```md
<div v-click>Hallo</div>
<div v-after>Welt</div>
```

Wenn "Weiter" gedrückt wird, werden `Hallo`und `Welt` zusammen sichtbar.

### `v-click-hide`

Funktioniert genau wie `v-click`, nur dass es das Element verschwinden lässt.

```md
<div v-click-hide>Hallo</div>
```

### `v-clicks`

`v-clicks` wird nur als Komponente bereit gestellt. Es ist eine Abkürzung, um die `v-click`-Direktive auf alle untergeordneten Elemente anzuwenden. Es ist besonders nützlich, wenn man mit Listen arbeitet.

```md
<v-clicks>

- Item 1
- Item 2
- Item 3
- Item 4

</v-clicks>
```

Jedes Mal, wenn man auf "Weiter" klickt, wird ein Element sichtbar.

### Benutzerdefinierte Anzahl der Klicks

Standardmäßig zählt Slidev, wie viele Schritte erforderlich sind, bevor zur nächsten Folie gewechselt wird. Man kann diese Einstellung überschreiben, indem man die Frontmatter-Option `clicks` übergibt:

```yaml
---
# 10 klicks in der Folie, bevor es zur nächsten geht
clicks: 10
---
```

### Reihenfolge

Wenn man einen Index der `v-click` Direktive überreicht, kann die Reihenfolge der Enthüllung angepasst werden.

```md
<div v-click>1</div>
<div v-click>2</div>
<div v-click>3</div>
```

```md
<!-- Die Reihenfolge ist umgekehrt. -->
<div v-click="3">1</div>
<div v-click="2">2</div>
<div v-click="1">3</div>
```

```md
---
clicks: 3
---

<!-- Sichtbar nach 3 Klicks -->
<v-clicks at="3">
  <div>Hi</div>
</v-clicks>
```

### Element Übergänge

Wenn die `v-click`Direktive bei Elementen angewendet wird, erhalten diese auch die `slidev-vclick-target` CSS Klasse. Wenn das Element auch noch versteckt ist, des weiteren auch die Klasse `slidev-vclick-hidden`. Zum Beispiel:

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Text</div>
```

Nach einem Klick ist es:

```html
<div class="slidev-vclick-target">Text</div>
```

Standardmäßig wird auf diese Klassen ein subtiler Deckkraftübergang angewendet:

```css
// Standardmäßig:

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

Man kann diese Übergänge in den eigenen Stylesheets überschreiben und verändern.

Zum Beispiel wäre ein Hochskalierender Übergang:

```css
// styles.css

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

Animationen können auch nur für bestimmte Folien und Layouts festgelegt werden.

```scss
.slidev-page-7,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: all 500ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
  }
}
```

Weitere Informationen zum [Anpassen von Styles](/custom/directory-structure#style).

## Bewegungen

Slidev hat [@vueuse/motion](https://motion.vueuse.org/) integriert. Man kann die `v-motion` Direktive nutzten, um an Elementen Bewegungen anzuwenden. Beispiel:

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```

Der Text `Slidev` bewegt sich von `-80px` zu seiner ursprüngliche Position.

> Hinweis: Slidev lädt die nächste Folien für eine bessere Leistung vorab. Dadurch können eventuell einige Animationen schon beginnen. Damit dies verhindert wird, kann das vorab laden abgeschaltet werden:
>
> ```md
> ---
> preload: false
> ---
> ```
>
> Oder man steuert den Elementlebenszyklus mit `v-if` für eine bessere Kontrolle
>
> ```html
> <div
>   v-if="$slidev.nav.currentPage === 7"
>   v-motion
>   :initial="{ x: -80 }"
>   :enter="{ x: 0 }">
>   Slidev
> </div>
> ```

Mehr erfahren: [Demo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/directive-usage.html) | [Presets](https://motion.vueuse.org/presets.html)

## Folienübergänge

> Bisher gibt es KEINE integrierte Unterstützung für Folienübergange. Wir planen Folienübergange in der nächsten Hauptversion hinzuzufügen. Zuvor können dafür nur benutzerdefinierte Styles und Libraries genutzt werden.
