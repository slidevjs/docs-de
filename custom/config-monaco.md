# Konfiguriere Monaco

<Environment type="client" />

> Standardmäßig ist Monaco nur im Development-Modus aktiviert. Damit Monaco auch in einer SPA funktioniert, muss `monaco: true` in den Frontmatter Konfigurationen gesetzt werden.

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

Im obigen Beispiel muss man nur sicher gehen, dass `vue` und `@vueuse/core` local installiert sind (dependencies oder devDependencies) und Slidev handelt den Rest, damit der Editor funktioniert!
