# Konfiguriere Monaco

<Environment type="client" />

Erstelle eine `./setup/monaco.ts` Datei mit dem folgendem Inhalt:

```ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // nutzte `monaco` zum konfigurieren
})
```

Erfahre mehr über die [Konfiguration von Monaco](https://github.com/Microsoft/monaco-editor).

## Verwendung

Um Monaco in den Folien zu nutzen, muss nur `{monaco}` zu einem Code Snipped hinzugefügt werden.

~~~js
//```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

zu

~~~js
//```js {monaco}
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

## Exportieren

Standardmäßig ist Monaco nur im Development-Modus aktiviert. Damit Monaco auch in einer SPA funktioniert, muss `monaco: true` in den Frontmatter Konfigurationen gesetzt werden:

```yaml
---
monaco: true # standart: "dev"
---
```

## Automatische Typen Installation

Wenn TypeScript mit Monaco genutzt wird, werden Typen für Abhängigkeiten automatisch auf der Clientseite installiert.

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

<<<<<<< HEAD
Im obigen Beispiel muss man nur sicher gehen, dass `vue` und `@vueuse/core` local installiert sind (dependencies oder devDependencies) und Slidev handelt den Rest, damit der Editor funktioniert!

## Themen Konfigurieren

Das Thema wird von Slidev basierend auf dem Hell-/Dunkelmodus gesteuert. Wenn man es anpassen möchte, kann die Themen-ID in der Setup-Funktion übergeben werden. 
=======
In the example above, make sure `vue` and `@vueuse/core` are installed locally as dependencies / devDependencies, Slidev will handle the rest to get the types working for the editor automatically!

## Configure Themes

The theme is controlled by Slidev based on the light/dark theme. If you want to customize it, you can pass the theme id to the setup function:
>>>>>>> 2afefee64ac67bac36a521f6fcda3a7af165d377

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'
<<<<<<< HEAD
=======

>>>>>>> 2afefee64ac67bac36a521f6fcda3a7af165d377
export default defineMonacoSetup(() => {
  return {
    theme: {
      dark: 'vs-dark',
      light: 'vs',
    },
  }
})
```

<<<<<<< HEAD
Wenn man benutzerdefinierte Themen laden möchte:

```ts
import { defineMonacoSetup } from '@slidev/types'
// ändere dein Thema
import dark from 'theme-vitesse/themes/vitesse-dark.json'
import light from 'theme-vitesse/themes/vitesse-light.json'
export default defineMonacoSetup((monaco) => {
  monaco.editor.defineTheme('vitesse-light', light as any)
  monaco.editor.defineTheme('vitesse-dark', dark as any)
=======
If you want to load custom themes:

```ts
import { defineMonacoSetup } from '@slidev/types'

// change to your themes
import dark from 'theme-vitesse/themes/vitesse-dark.json'
import light from 'theme-vitesse/themes/vitesse-light.json'

export default defineMonacoSetup((monaco) => {
  monaco.editor.defineTheme('vitesse-light', light as any)
  monaco.editor.defineTheme('vitesse-dark', dark as any)

>>>>>>> 2afefee64ac67bac36a521f6fcda3a7af165d377
  return {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  }
})
```

<<<<<<< HEAD
> Wenn man ein Thema für Slidev erstellt, kann man den dynamischen `import()` innerhalb der Setup-Funktion nutzen, um bessere Ergebnisse bei der Code-Aufteilung zu erhalten.
=======
> If you are creating a theme for Slidev, use dynamic `import()` inside the setup function to get better tree-shaking and code-splitting results.
>>>>>>> 2afefee64ac67bac36a521f6fcda3a7af165d377
