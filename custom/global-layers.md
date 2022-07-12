# Globale Ebnen

> Verfügbar seit v0.17

Globale Ebenen erlauben es, Komponenten zu nutzten, die über Folien **bestehend** bleiben. Solche können zu Beispiel für Kopf- oder Fußzeilen, Folienübergreifende Animationen oder Globale Effekte nützlich sein. 


Slidev bietet dafür 3 Ebenen. Erstelle eine `global-top.vue`, `global-bottom.vue` oder `custom-nav-controls.vue` Datei unter dem Projektstamm und die Ebenen werden automatisch aufgenommen.


Ebenenbeziehung:

- Global Top (`global-top.vue`)
- Slides
- Global Bottom (`global-bottom.vue`)
- NavControls
  - Individualisierte Navigationsoberfläche (`custom-nav-controls.vue`)

## Beispiel

```html
<!-- global-top.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Dein Name</footer>
</template>
```

Der Text `Dein Name` wird auf allen Folien erscheinen.

```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

Der Button `Next` erscheint in der Navigationsoberfläche.

<<<<<<< HEAD
Der [Vue Global Context](/custom/vue-context) kann angewendet werden, um diese bedingt zu aktivieren.
=======
To enable it conditionally, you can apply it with the [Vue Global Context](/custom/vue-context).
>>>>>>> 8b430eefeed2277fc07f273ce000804365333b56

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
<!-- verstecke den Button im Präsentationsmodus -->
<template>
  <button v-if="!$slidev.nav.isPresenter" class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
