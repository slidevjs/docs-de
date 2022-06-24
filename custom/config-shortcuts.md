# Konfiguriere Shortcuts

> Available since v0.20

<Environment type="client" />

Erstelle eine `./setup/shortcuts.ts` Datei mit dem folgendem Inhalt:

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'enter',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'backspace',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})
```

Mit diesem Setup können eigene Einstellungen für Tastenkürzel aus [Navigationen](/guide/navigation#navigation-bar) definiert werden. Das obige Beispiel führt die nächste Animation aus, wenn <kbd>enter</kbd> gedrückt wird und die letzte Animation, wenn <kbd>backspace</kbd> gedrückt wird.

Die Konfigurations-Funktion bekommt ein Objekt mit den Navigationsmethoden und gibt einen Array, welcher die Tastenkürzel und Konfigurationen enthält zurück. Weitere Informationen sind in den Typdefinitionen zu finden.

<<<<<<< HEAD
Siehe [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) für mehr Informationen über das `keyPressed` Event.
=======
The `key` type only allows for strings, but you can still bind multiple keys by using following convention:

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'ShiftLeft+ArrowRight',
      fn: () => nav.next(),
      autoRepeat: true,
    }
  ]
})
```

Refer to [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) for more details about key pressed event.
>>>>>>> c8121c161efd5a726d336648d2b101540c346dd2
