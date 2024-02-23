# Konfiguriere Windi CSS

<Environment type="node" />

<<<<<<< HEAD
Markdown unterstützt eingebettete HTML-Markups. So können Inhalte nach Belieben gestylt werden. Der Einfachheit halber haben wir [Windi CSS](https://github.com/windicss/windicss) integriert, sodass dieses Markup direkt mit utility-Klassen gestylt werden kann.
=======
::: warning
Since Slidev v0.47.0, we no longer support Windi CSS. Please migrate to [UnoCSS](/custom/config-unocss).
:::

Markdown naturally supports embedded HTML markups. You can therefore style your content the way you want.
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

Zum Beispiel:

```html
<div class="grid pt-4 gap-4 grid-cols-[100px,1fr]">

### Name

- Item 1
- Item 2

</div>
```

Der [Attributify-Modus](https://windicss.org/posts/v30.html#attributify-mode) in [Windi CSS v3.0](https://windicss.org/posts/v30.html) ist standardmäßig aktiviert.

## Konfigurationen

Erstelle eine `./setup/windicss.ts` Datei mit dem folgendem Inhalt, um Windi CSS zu konfigurieren:

```ts
// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// Erweiterung der eingebauten Windicss-Konfigurationen
export default defineWindiSetup(() => ({
  shortcuts: {
    // eigener Standardhintergrund
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      // Schriftarten können hier ersetzt werden, Web-Font-Links müssen der `index.html` Datei hinzugefügt werden.
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}))
```

Erfahre mehr über [Windi CSS Konfigurationen](https://windicss.org/guide/configuration.html)
