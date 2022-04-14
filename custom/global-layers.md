# Globale Ebnen

> Verfügbar seit v0.17

Globale Ebenen erlauben es, Komponenten zu nutzten, die über Folien **bestehend** bleiben. Solche können zu Beispiel für Kopf- oder Fußzeilen, Folienübergreifende Animationen oder Globale Effekte nützlich sein. 

<<<<<<< HEAD
Slidev bietet dafür 2 Ebenen. Erstelle eine `global-top.vue` oder `global-bottom.vue` Datei unter dem Projektstamm und die Ebenen werden automatisch aufgenommen.
=======
Slidev provides three layers for this usage, create `global-top.vue`, `global-bottom.vue` or `custom-nav-controls.vue` under your project root and it will pick up automatically.
>>>>>>> 0daa359721a2cdbb0abac8fc5f5e1c00dd7b4452

Ebenenbeziehung:

- Global Top (`global-top.vue`)
- Slides
- Global Bottom (`global-bottom.vue`)
- NavControls
  - Customized Navigation Controls (`custom-nav-controls.vue`)

## Beispiel

```html
<!-- global-top.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Dein Name</footer>
</template>
```

Der Text `Dein Name` wird auf allen Folien erscheinen.

<<<<<<< HEAD
Um es bedingt zu aktivieren, kann der [Vue Global Context](/custom/vue-context) angewendet werden.
=======
```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

The button `Next` will appear in NavControls.

To enabled it conditionally, you can apply it with the [Vue Global Context](/custom/vue-context).
>>>>>>> 0daa359721a2cdbb0abac8fc5f5e1c00dd7b4452

```html
<!-- Fußzeile von Seite 4 ausblenden -->
<template>
  <footer
    v-if="$slidev.nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Dein Name
  </footer>
</template>
```

```html
<!-- Fußzeile vom "cover"-Layout ausblenden -->
<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Dein Name
  </footer>
</template>
```

```html
<!-- eine Beispiel-Fußzeile für Folien -->
<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- hide the button in Presenter model -->
<template>
  <button v-if="!$slidev.nav.isPresenter" class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
