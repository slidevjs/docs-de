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
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
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

## Composable Usage

> Available since v0.48.0

### Context

If you want to get the context programmatically (also type-safely), you can import composables from `@slidev/client`:

```vue
<script setup>
import { onSlideEnter, onSlideLeave, useDarkMode, useIsSlideActive, useNav, useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
const { currentPage, currentLayout, currentSlideRoute } = useNav()
const { isDark } = useDarkMode()
const isActive = useIsSlideActive()
onSlideEnter(() => { /* ... */ })
onSlideLeave(() => { /* ... */ })
// ...
</script>
```

> [!NOTE]
> Previously, you might see the usage of importing nested modules like `import { isDark } from '@slidev/client/logic/dark.ts'`, this is **NOT RECOMMENDED** as they are internal implementation details and might be broken in the future. Try always to use the public API from `@slidev/client` whenever possible.

### Types

If you want to get a type programmatically, you can import types like `TocItem` from `@slidev/types`:

```vue
<script setup>
import type { TocItem } from '@slidev/types'

function tocFunc(tree: TocItem[]): TocItem[] {
  // ...
}
</script>
```
