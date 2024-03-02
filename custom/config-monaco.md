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

~~~md
```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
```
~~~

zu

~~~md
```js {monaco}
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
```
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

~~~md
```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
```
~~~

Im obigen Beispiel muss man nur sicher gehen, dass `vue` und `@vueuse/core` lokal installiert sind (dependencies oder devDependencies) und Slidev handelt den Rest, damit der Editor funktioniert!

## Themen Konfigurieren

Das Thema wird von Slidev basierend auf dem Hell-/Dunkelmodus gesteuert. Wenn man es anpassen möchte, kann die Themen-ID in der Setup-Funktion übergeben werden. 

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    theme: {
      dark: 'vs-dark',
      light: 'vs',
    },
  }
})
```

Wenn man benutzerdefinierte Themen laden möchte:

```ts
import { defineMonacoSetup } from '@slidev/types'
// ändere dein Thema
import dark from 'theme-vitesse/themes/vitesse-dark.json'
import light from 'theme-vitesse/themes/vitesse-light.json'
export default defineMonacoSetup((monaco) => {
  monaco.editor.defineTheme('vitesse-light', light as any)
  monaco.editor.defineTheme('vitesse-dark', dark as any)
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

## Configure the Editor

> Available since v0.43.0

If you would like to customize the Monaco editor you may pass an `editorOptions` object that matches the [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html) definition.

~~~md
```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
```
~~~

Alternatively if you would like these options to be applied to every Monaco instance, you can return them in the `defineMonacoSetup` function

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      wordWrap: 'on'
    }
  }
})
```
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1
