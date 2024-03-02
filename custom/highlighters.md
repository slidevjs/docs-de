# Highlighters

<<<<<<< HEAD
Slidev kommt mit zwei Syntax-Highlighter, aus denen man wählen kann:
=======
Slidev comes with two syntax highlighters for you to choose from:
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism** ist einer der beliebtesten Syntax-Highlighter. Die Hervorhebung erfolgt durch Hinzufügen von Token-Klassen zum Code und wird mit CSS gefärbt. Man kann die [offiziellen Themen](https://github.com/PrismJS/prism-themes) durchstöbern oder mit [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) ganz einfach selbst ein Thema erstellen/anpassen.

<<<<<<< HEAD
**Shiki** hingegen ist ein TextMate-Grammatik-gestützter Syntax-Highlighter. Er generiert farbige Token, so dass kein zusätzliches CSS erforderlich ist. Da Shiki eine großartige Grammatikunterstützung hat, sind die generierten Farben sehr akkurat, fast genau wie das, was in VS Code zu sehen ist. Shiki kommt auch mit [einer Reihe von eingebauten Themen](https://github.com/shikijs/shiki/blob/master/docs/themes.md). Der Nachteil von Shiki ist, dass es TextMate-Themen (kompatibel mit VS Code-Themen) benötigt, um die Hervorhebung zu machen, was etwas schwieriger anzupassen sein kann.
=======
**Shiki** is a TextMate grammar-powered syntax highlighter. It generates colored tokens, so there is no additional CSS needed. Since it has great grammar support, the generated colors are very accurate, just like what you will see in VS Code. Shiki also comes with [a bunch of built-in themes](https://shiki.style/themes). In Slidev, we also provided the [TwoSlash](#twoslash-integration) support is also built-in.
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

Slidev-Themen unterstützen normalerweise sowohl Prism als auch Shiki, aber je nach verwendetem Thema kann es sein, dass nur eines davon unterstützt wird.

Falls man die Wahl hat, ist der einzige Unterschied:

<<<<<<< HEAD
- **Prism** für einfachere Anpassung
- **Shiki** für eine genauere Hervorhebung

Standardmäßig verwendet Slidev Prism. Man kan dies aber ändern, indem man den Frontmatter modifiziert:
=======
- **Prism** for easier customization
- **Shiki** for accurate highlighting

Slidev uses Shiki by default since v0.47. You can switch to it by adding the following to your `slides.md`:
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

```yaml
---
highlighter: Prism
---
```

<<<<<<< HEAD
## Konfiguriere Prism

Um Prism zu konfigurieren, kann man einfach das Thema-Css importieren oder [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) verwenden, um Themen für den hellen und dunklen Modus zu konfigurieren. Weitere Details findet man in den entsprechenden Dokumenten.

## Konfiguriere Shiki
=======
## Configure Shiki
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

<Environment type="node" />

Erstelle eine `./setup/shiki.ts` Datei mit folgendem Inhalt:


```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'min-dark',
      light: 'min-light',
    },
    transformers: [
      // ...
    ]
  }
})
```

<<<<<<< HEAD
Die verfügbaren Themennamen findet man in [Shikis Dokumentation](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes).

Oder wenn man sein eigenes Thema verwenden möchten:
=======
Refer to [Shiki's docs](https://shiki.style) for available theme names.

## Configure Prism
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

To configure your Prism, you can just import the theme CSS or use [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) to configure themes for both light and dark mode. Refer to its docs for more details.
