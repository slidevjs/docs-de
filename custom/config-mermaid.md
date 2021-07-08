# Konfiguriere Mermaid

<Environment type="client" />

Erstelle eine `./setup/mermaid.ts` Datei mit dem folgendem Inhalt:

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

Mit dem Setup kann man benutzerdefinierte Einstellungen für [Mermaid](https://mermaid-js.github.io/) bereitstellen. Weitere Informationen sind in den Typdefinitionen und Dokumentationen von [Mermaid](https://mermaid-js.github.io/) zu finden.
