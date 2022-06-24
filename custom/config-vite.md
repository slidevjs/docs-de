# Konfiguriere Vite

<Environment type="node" />

<<<<<<< HEAD
Slidev läuft mit [Vite](http://vitejs.dev/) unter der Haube. Somit kann das großartige Plugin-System von Vite genutzt werden, um Präsentationen noch besser anzupassen.
=======
Slidev is powered by [Vite](https://vitejs.dev/) under the hood. This means you can leverage Vite's great plugin system to customize your slides even further.
>>>>>>> c8121c161efd5a726d336648d2b101540c346dd2

Die `vite.config.ts` Datei wird genutzt, falls eine vorhanden ist.

Slidev hat die folgenden Plugins vorkonfiguriert:

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [vite-plugin-md](https://github.com/antfu/vite-plugin-md)
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)

Erfahre mehr über [Vorkonfigurationen hier](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts).

## Konfiguriere Interne Plugins

> Verfügbar seit v0.21

Um integrierte Plugins zu konfigurieren, muss eine `vite.config.ts` Datei mit folgendem Inhalt erstellt werden. Bitte beachte, dass Slidev einige Vorkonfigurationsoptionen für diese Plugins hat. Diese Verwendung überschreibt einige von den Vorkonfigurationsoptionen, was möglicherweise dazu führen kann, dass die App beschädigt wird. Das ist **eine erweiterte Funktion**, die mit Vorsicht beachtet werden sollte und nur genutzt werden sollte, wenn man weiß, was man tut.

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* vue options */
    },
    markdown: {
      /* markdown-it options */
      markdownItSetup(md) {
        /* custom markdown-it plugins */
        md.use(/* ... */)
      },
    },
    /* options for other plugins */
  },
})
```

Weitere Optionen sind in den [Typdeklarationen](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50) zu finden.
