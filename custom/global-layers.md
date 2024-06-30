# Globale Ebnen

<<<<<<< HEAD
> Verfügbar seit v0.17

Globale Ebenen erlauben es, Komponenten zu nutzten, die über Folien **bestehend** bleiben. Solche können zu Beispiel für Kopf- oder Fußzeilen, Folienübergreifende Animationen oder Globale Effekte nützlich sein. 
=======
Global layers allow you to have custom components that **persist** across slides. This could be useful for having footers, cross-slide animations, global effects, etc.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3


<<<<<<< HEAD
Slidev bietet dafür 3 Ebenen. Erstelle eine `global-top.vue`, `global-bottom.vue` oder `custom-nav-controls.vue` Datei unter dem Projektstamm und die Ebenen werden automatisch aufgenommen.


Ebenenbeziehung:
=======
There are also layers for **each** slide: `layouts/slide-top.vue` and `layouts/slide-bottom.vue`. The usage is similar to the global layers, but they are applied to every slide, so there may be more than one instance of them.

::: tip
When exporting, the `--per-slide` option should be used to ensure the global layers are applied to each slide correctly.
:::

## Layers relationship

At z-axis, from top to bottom:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

- NavControls
<<<<<<< HEAD
  - Individualisierte Navigationsoberfläche (`custom-nav-controls.vue`)
=======
  - Customized Navigation Controls (`custom-nav-controls.vue`)
- Global Top (`global-top.vue`) - single instance
- Slide Top (`slide-top.vue`) - instance per slide
- Slide Content
- Slide Bottom (`slide-bottom.vue`) - instance per slide
- Global Bottom (`global-bottom.vue`) - single instance
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Beispiel

```html
<!-- global-bottom.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Dein Name</footer>
</template>
```

Der Text `Dein Name` wird auf allen Folien erscheinen.

```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

Der Button `Next` erscheint in der Navigationsoberfläche.

Der [Vue Global Context](/custom/vue-context) kann angewendet werden, um diese bedingt zu aktivieren.

```html
<!-- Fußzeile von Seite 4 ausblenden -->
<template>
  <footer
    v-if="$nav.currentPage !== 4"
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
    v-if="$nav.currentLayout !== 'cover'"
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
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $nav.currentPage }} / {{ $nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- verstecke den Button im Präsentationsmodus -->
<template>
  <button v-if="!$nav.isPresenter" class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
