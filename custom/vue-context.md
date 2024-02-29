# Vue Globaler Kontext

Slidev injiziert einen [globalen Vue-Kontext](https://v3.vuejs.org/api/application-config.html#globalproperties) `$slidev` für erweiterte Bedingungen oder Navigationssteuerungen.
## Verwendung

Man kann überall im Markdown- und Vue-Template mit dem ["Mustache"-Syntax](https://v3.vuejs.org/guide/template-syntax.html#interpolations) darauf zugreifen.


```md
<!-- slides.md -->

# Folie 1

Die aktuelle Folie ist: {{ $slidev.nav.currentPage }}
```

```html
<!-- Foo.vue -->

<template>
  <div>Titel: {{ $slidev.configs.title }}</div>
  <button @click="$slidev.nav.next">Nächste Folie</button>
</template>
```

## Eigenschaften

### `$clicks`

`$clicks` hold a number of clicks on the current slide. Can be used conditionally to show different content on clicks.

```html
<div v-if="$clicks > 3">Content</div>
```

### `$page`

`$page` holds the number of the current page, 1-indexed.

```md
Page: {{ $page }}

Is current page active: {{ $page === $slidev.nav.currentPage }}
```

### `$renderContext`

`$renderContext` holds the current render context, can be `slide`, `overview`, `presenter` or `previewNext`

```md
<div v-if="$renderContext === 'slide'">
  This content will only be rendered in slides view
</div>
```

### `$slidev.nav`

Ein reaktives Objekt, das die Eigenschaften und Steuerelemente der Foliennavigation enthält. Zum Beispiel:


```js
$slidev.nav.next() // nächster Schritt

$slidev.nav.nextSlide() // nächste Folie (überspringe v-clicks)

$slidev.nav.go(10) // gehe zu Folie #10
```

```js
$slidev.nav.currentPage // aktuelle Foliennummer

<<<<<<< HEAD
$slidev.nav.currentLayout // aktuelle Layout-ID

$slidev.nav.clicks // aktuelle Anzahl der Klicks
=======
$slidev.nav.currentLayout // current layout id
>>>>>>> 15820b064d1f419ed06cd798ae4b6dfe0c230e94
```

Weitere verfügbare Eigenschaften sind in den [nav.ts](https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts) Exporten zu finden.


> Note: `$slidev.nav.clicks` is a global state while `$clicks` is local to each slide. It's recommended to **use `$clicks` over `$slidev.nav.clicks`** to avoid clicks changed been triggered on page transitions.

### `$slidev.configs`

Ein reaktives Objekt, das die geparsten [Konfigurationen im ersten Frontmatter](/custom/#frontmatter-configures) der `slides.md` Datei enthält. Zum Beispiel:


```yaml
---
title: Meine erste Slidev!
---
```

```
{{ $slidev.configs.title }} // 'Meine erste Slidev!'
```

### `$slidev.themeConfigs`

Ein reaktives Objekt, das die geparsten Themenkonfigurationen enthält.

```yaml
---
title: Meine erste Slidev!
themeConfig:
  primary: # 213435
---
```

```
{{ $slidev.themeConfigs.primary }} // '#213435'
```

### `$nav`

> Available since v0.43.0

A shorthand of `$slidev.nav`.
