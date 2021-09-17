# Highlighters

Slidev kommt mit zwei Syntax-Highlighter, aus denen man wählen kann:

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism** ist einer der beliebtesten Syntax-Highlighter. Die Hervorhebung erfolgt durch Hinzufügen von Token-Klassen zum Code und wird mit CSS gefärbt. Man kann die [offiziellen Themen](https://github.com/PrismJS/prism-themes) durchstöbern oder mit [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) ganz einfach selbst ein Thema erstellen/anpassen.

**Shiki** hingegen ist ein TextMate-Grammatik-gestützter Syntax-Highlighter. Er generiert farbige Token, so dass kein zusätzliches CSS erforderlich ist. Da Shiki eine großartige Grammatikunterstützung hat, sind die generierten Farben sehr akkurat, fast genau wie das, was in VS Code zu sehen ist. Shiki kommt auch mit [einer Reihe von eingebauten Themen](https://github.com/shikijs/shiki/blob/master/docs/themes.md). Der Nachteil von Shiki ist, dass es TextMate-Themen (kompatibel mit VS Code-Themen) benötigt, um die Hervorhebung zu machen, was etwas schwieriger anzupassen sein kann.

Slidev-Themen unterstützen normalerweise sowohl Prism als auch Shiki, aber je nach verwendetem Thema kann es sein, dass nur eines davon unterstützt wird.

Falls man die Wahl hat, ist der einzige Unterschied:

- **Prism** für einfachere Anpassung
- **Shiki** für eine genauere Hervorhebung

Standardmäßig verwendet Slidev Prism. Man kan dies aber ändern, indem man den Frontmatter modifiziert:

```yaml
---
highlighter: shiki
---
```

## Konfiguriere Prism

Um Prism zu konfigurieren, kann man einfach das Thema-Css importieren oder [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) verwenden, um Themen für den hellen und dunklen Modus zu konfigurieren. Weitere Details findet man in den entsprechenden Dokumenten.

## Konfiguriere Shiki

<Environment type="node" />

Erstelle eine `./setup/shiki.ts` Datei mit folgendem Inhalt:


```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    theme: {
      dark: 'min-dark',
      light: 'min-light',
    },
  }
})
```

Die verfügbaren Themennamen findet man in [Shikis Dokumentation](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes).

Oder wenn man sein eigenes Thema verwenden möchten:

```ts
/* ./setup/shiki.ts */

import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme('path/to/theme.json')),
      light: await loadTheme('path/to/theme.json')),
    },
  }
})
```
