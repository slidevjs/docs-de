# Highlighters

Slidev kommt mit zwei Syntax-Highlighter, aus denen man wählen kann:

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)
- [Shikiji](https://github.com/antfu/shikiji)

**Prism** ist einer der beliebtesten Syntax-Highlighter. Die Hervorhebung erfolgt durch Hinzufügen von Token-Klassen zum Code und wird mit CSS gefärbt. Man kann die [offiziellen Themen](https://github.com/PrismJS/prism-themes) durchstöbern oder mit [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) ganz einfach selbst ein Thema erstellen/anpassen.

**Shiki** hingegen ist ein TextMate-Grammatik-gestützter Syntax-Highlighter. Er generiert farbige Token, so dass kein zusätzliches CSS erforderlich ist. Da Shiki eine großartige Grammatikunterstützung hat, sind die generierten Farben sehr akkurat, fast genau wie das, was in VS Code zu sehen ist. Shiki kommt auch mit [einer Reihe von eingebauten Themen](https://github.com/shikijs/shiki/blob/master/docs/themes.md). Der Nachteil von Shiki ist, dass es TextMate-Themen (kompatibel mit VS Code-Themen) benötigt, um die Hervorhebung zu machen, was etwas schwieriger anzupassen sein kann.

<<<<<<< HEAD
Slidev-Themen unterstützen normalerweise sowohl Prism als auch Shiki, aber je nach verwendetem Thema kann es sein, dass nur eines davon unterstützt wird.
=======
**Shikiji** is a ESM rewrite of Shiki bringing many improvements and new features. You could have [AST-based transformers](https://github.com/antfu/shikiji#hast-transformers) to customize how the code is rendered. And the [TwoSlash](#twoslash) support is also built-in.

Slidev themes usually support both Prism and Shiki, but depending on the theme you are using, it might only support one of them.
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

Falls man die Wahl hat, ist der einzige Unterschied:

<<<<<<< HEAD
- **Prism** für einfachere Anpassung
- **Shiki** für eine genauere Hervorhebung

Standardmäßig verwendet Slidev Prism. Man kan dies aber ändern, indem man den Frontmatter modifiziert:
=======
- **Prism** for easier customization
- **Shiki** for more accurate highlighting
- **Shikiji** on top of Shiki, it also enables [TwoSlash](#twoslash) support and custom transformers addons. 

Slidev uses Prism by default for compatibility. We recommend using Shikiji for more accurate and feature-rich highlighting, you can switch to it by adding the following to your `slides.md`:
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

```yaml
---
highlighter: shikiji
---
```

<<<<<<< HEAD
## Konfiguriere Prism
=======
## TwoSlash Integration

This feature is only available when you set `highlighter` to `shikiji`.

[TwoSlash](https://www.typescriptlang.org/dev/twoslash/) is a powerful tool for rendering TypeScript code blocks with type informations on hover or inlined. It's quite useful for preapring slides for JavaScript/TypeScript related topics.

To use it, you can add `twoslash` to the code block's language identifier:

~~~md
```ts twoslash
console.log('hello')
```
~~~

And example of TwoSlash enabled code snippet [can be found here](https://antfu.me/posts/shikiji-twoslash).

## Configure Prism
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

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
      dark: await loadTheme('path/to/theme.json'),
      light: await loadTheme('path/to/theme.json'),
    },
  }
})
```

## Configure Shikiji

<Environment type="node" />

Create `./setup/shikiji.ts` file with the following content:

```ts
/* ./setup/shikiji.ts */
import { defineShikijiSetup } from '@slidev/types'

export default defineShikijiSetup(() => {
  return {
    themes: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
    transformers: [
      ...
    ]
  }
})
```

Refer to [Shikiji's docs](https://github.com/antfu/shikji) for all available options.

> It make it easier for the community to adapt, when no `shikiji.ts` it presented, we will look for `shiki.ts` and try to convert it to Shikiji options.
