# Konfiguriere KaTeX 

<Environment type="node" />

Erstelle eine `./setup/katex.ts` Datei mit dem folgendem Inhalt:

```ts
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    /* ... */
  }
})
```

Mit dem Setup kann man benutzerdefinierte Einstellungen für [KaTex](https://katex.org/docs/options.html) bereitstellen. Weitere Informationen sind in den Typdefinitionen und Dokumentationen von [KaTex](https://katex.org/docs/options.html) zu finden.
