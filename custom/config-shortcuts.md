# Konfiguriere Shortcuts

> Available since v0.20

> Seit v0.35.6 (ausgenommen) entscheide, welche Basiskurzbefehle beibehalten werden sollen (siehe `...base`, unten).


<Environment type="client" />

## Erste Schritte

Erstelle eine `./setup/shortcuts.ts` Datei mit dem folgendem Inhalt:

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // behalte die bestehenden Shortcuts
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

## Erweiterte Shortcuts

Der Typ `key` erlaubt nur Strings, aber man kann trotzdem an mehrere Tasten, mit Hilfe der folgenden Konvention binden:

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base,
    {
      key: 'ShiftLeft+ArrowRight',
      fn: () => nav.next(),
      autoRepeat: true,
    }
  ]
})
```

## Erweiterte Navigationsfunktionen

Die `nav`-Navigationsoperationen ermöglichen den Zugriff auf einige Funktionen, die über die grundlegenden Funktionen _next slide_ oder _previous slide_ hinausgehen. Siehe die folgenden Anwendungsfälle:


```ts
import { NavOperations, defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'e',
<<<<<<< HEAD
      
      // Die Tastenkombination "e" kann als eine Art Lesezeichen
      // oder Schnellzugriff verwendet werden, 
      // um speziell zur Folie Nummer 42 zu navigieren.
=======

      // Set the `e` keyboard shortcut to be used as a bookmark
      // or quick-access of sorts, to navigate specifically to
      // slide number 42
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
      fn: () => nav.go(42),
      autoRepeat: true,
    }
  ]
})
```

Siehe [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) für mehr Informationen über das `keyPressed` Event.