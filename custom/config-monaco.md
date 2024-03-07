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

````md
```js {monaco} // [!code ++]
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
<<<<<<< HEAD
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
=======
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2
```
````

<<<<<<< HEAD
## Automatische Typen Installation
=======
## TypeScript Types
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

Wenn TypeScript mit Monaco genutzt wird, werden Typen für Abhängigkeiten automatisch auf der Clientseite installiert.

````md
```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
```
````

<<<<<<< HEAD
Im obigen Beispiel muss man nur sicher gehen, dass `vue` und `@vueuse/core` lokal installiert sind (dependencies oder devDependencies) und Slidev handelt den Rest, damit der Editor funktioniert!
=======
In the example above, make sure `vue` and `@vueuse/core` are installed locally as dependencies / devDependencies, Slidev will handle the rest to get the types working for the editor automatically. When deploy as SPA, those types will also be bundled for static hosting.

### Additional Types

Slidev will scan all the monaco codeblocks in your slides and import the types for those used libraries for you. In case it missed some, you can explicitly specify extra packages to import the types for:

```md
---
monacoTypesAdditionalPackages:
  - lodash-es
  - foo
---
```

### Auto Type Acquisition

You can optionally switch to load types from CDN by setting the following headmatter:

```md
---
monacoTypesSource: ata
---
```

This feature is powered by [`@typescript/ata`](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata) and runs completely on the client-side.
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

## Themen Konfigurieren

<<<<<<< HEAD
Das Thema wird von Slidev basierend auf dem Hell-/Dunkelmodus gesteuert. Wenn man es anpassen möchte, kann die Themen-ID in der Setup-Funktion übergeben werden. 
=======
Since v0.48.0, Monaco will reuse the Shiki theme you configured in [Shiki's setup file](/custom/highlighters#configure-shiki), powered by [`@shikijs/monaco`](https://shiki.style/packages/monaco). You don't need to worry about it anymore and it will have a consistent style with the rest of your code blocks.

## Configure the Editor

> Available since v0.43.0

If you would like to customize the Monaco editor you may pass an `editorOptions` object that matches the [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html) definition.

````md
```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
```
````

Alternatively if you would like these options to be applied to every Monaco instance, you can return them in the `defineMonacoSetup` function
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

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
  return {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  }
})
```

> Wenn man ein Thema für Slidev erstellt, kann man den dynamischen `import()` innerhalb der Setup-Funktion nutzen, um bessere Ergebnisse bei der Code-Aufteilung zu erhalten.
=======
## Disabling

Since v0.48.0, Monaco editor is enabled by default and only be bundled when you use it. If you want to disable it, you can set `monaco` to `false` in the frontmatter of your slide:

```yaml
---
monaco: false # can also be `dev` or `build` tp conditionally enable it
---
```
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2
