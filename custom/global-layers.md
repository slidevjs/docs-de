# Globale Ebnen

> Verfügbar seit v0.17

Globale Ebenen erlauben es, Komponenten zu nutzten, die über Folien **bestehend** bleiben. Solche können zu Beispiel für Kopf- oder Fußzeilen, Folienübergreifende Animationen oder Globale Effekte nützlich sein. 

Slidev bietet dafür 2 Ebenen. Erstelle eine `global-top.vue` oder `global-bottom.vue` Datei unter dem Projektstamm und die Ebenen werden automatisch aufgenommen.

Ebenenbeziehung:

- Global Top (`global-top.vue`)
- Slides
- Global Bottom (`global-bottom.vue`)

## Beispiel

```html
<!-- global-top.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Dein Name</footer>
</template>
```

Der Text `Dein Name` wird auf allen Folien erscheinen.

Um es bedingt zu aktivieren, kann der [Vue Global Context](/custom/vue-context) angewendet werden.

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
