# Konfiguration und Erweiterung des Parsers

Slidev parsed die Präsentations-Dateien (e.g. `slides.md`) in 3 Schritten:

1. Es wird ein "Preparing"-Schritt durchgeführt: Die Datei wird mit Hilfe des Trennzeichens `---` in Folien aufgeteilt, wobei die möglichen Frontmatter-Blöcke berücksichtigt werden.
2. Jede Folie wird von einer externen Bibliothek geparsed. 
3. Slidev löst die spezielle Frontmatter-Eigenschaft `src: ....` auf, die es erlaubt, andere md-Dateien einzubinden.

## Markdown-Parser

Die Konfiguration des in Schritt 2 verwendeten Markdown-Parsers kann durch [Konfiguration der internen Vite-Plugins](/custom/config-vite#configure-internal-plugins) vorgenommen werden.

## Preparser-Erweiterungen

> Verfügbar seit v0.37.0

:::warning
Wichtig: Wenn die Preparser-Konfiguration geändert wurde, muss Slidev gestoppt und neu gestartet werden (ein Neustart ist möglicherweise nicht ausreichend).
:::

Der Preparser (Schritt 1 oben) ist hochgradig erweiterbar und erlaubt es, eigene Syntaxen für md-Dateien zu implementieren. Das Erweitern des Preparser wird als **ein fortgeschrittenes Feature** betrachtet und ist anfällig dafür, [Editor-Integrationen](/guide/editors) aufgrund impliziter Änderungen in der Syntax zu brechen.

Um ihn anzupassen, muss eine `./setup/preparser.ts` Datei mit folgendem Inhalt:

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(({ filepath, headmatter }) => {
  return [
    {
      transformRawLines(lines) {
        for (const i in lines) {
          if (lines[i] === '@@@')
            lines[i] = 'HELLO'
        }
      },
    }
  ]
})
```

Dieses Beispiel ersetzt systematisch jede `@@@`-Zeile durch eine Zeile mit `hello`. Es veranschaulicht die Struktur einer Präparser-Konfigurationsdatei und einige der wichtigsten Konzepte, die der Präparser beinhaltet:
- `definePreparserSetup` muss mit einer Funktion als Parameter aufgerufen werden.
- Die Funktion erhält den Dateipfad (der Root-Präsentationsdatei) und den Headmatter (aus der md-Datei). Sie kann diese Informationen verwenden um z.B. Erweiterungen auf der Grundlage der Präsentationsdatei zu aktivieren.
- Die Funktion muss eine Liste von Preparser-Erweiterungen zurückgeben.
- Eine Erweiterung kann enthalten:
  - eine Funktion `transformRawLines(lines)`, die direkt nach dem Parsen des Headmatter der md-Datei läuft und eine Liste aller Zeilen (aus der md-Datei) erhält. Die Funktion kann die Liste willkürlich verändern.
  - eine Funktion `transformSlide(content, frontmatter)`, die für jede Folie aufgerufen wird, direkt nachdem die Datei geteilt wurde, und die den Folieninhalt als String und das Frontmatter der Folie als Objekt erhält. Die Funktion kann den Frontmatter verändern und muss den Content-String zurückgeben (möglicherweise verändert, möglicherweise `undefined`, wenn keine Änderungen vorgenommen wurden).
  - ein Name (`name`)

## Beispiel für Preparser-Erweiterungen

### Anwendungsfall 1: kompakter Syntax für das Erstellen von Folien

In einer Situation, in der (ein Teil) der Präsentation hauptsächlich Cover-Bilder zeigt und andere md-Dateien enthält, kann eine kompakte Notation wünschenswert sein, in der zum Beispiel (ein Teil der) `slides.md` wie folgt aussieht:

```md
@cover: /nice.jpg
# Willkommen
@src: page1.md
@src: page2.md
@cover: /break.jpg
@src: pages3-4.md
@cover: https://source.unsplash.com/collection/94734566/1920x1080
<<<<<<< HEAD
# Frage?
Bis zu nächsten mal!

```

Um den `@src:` und `@cover:` Syntax zu erlauben, muss eine `./setup/preparser.ts` Datei mit folgendem Inhalt erstellt werden:
=======
# Questions?
see you next time
```

To allow these `@src:` and `@cover:` syntaxes, create a `./setup/preparser.ts` file with the following content:
>>>>>>> 15820b064d1f419ed06cd798ae4b6dfe0c230e94

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformRawLines(lines) {
        let i = 0
        while (i < lines.length) {
          const l = lines[i]
          if (l.match(/^@cover:/i)) {
            lines.splice(
              i,
              1,
              '---',
              'layout: cover',
              `background: ${l.replace(/^@cover: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          if (l.match(/^@src:/i)) {
            lines.splice(
              i,
              1,
              '---',
              `src: ${l.replace(/^@src: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          i++
        }
      }
    },
  ]
})
```

Und das war's!

<<<<<<< HEAD

### Anwendungsfall 2: Verwendung von benutzerdefinierten Frontmatter-Blöcken
=======
### Use case 2: using custom frontmatter to wrap slides
>>>>>>> 15820b064d1f419ed06cd798ae4b6dfe0c230e94

In einem Fall, in dem Folien oft skaliert werden müssen, aber eine Vielzahl an bestehender Layouts verwendet wird, ist die Erstellung eines neuen Layouts nicht geeignet.
Zum Beispiel könnte die `slides.md` wie folgt aussehen:

```md
---
layout: quote
_scale: 0.75
---

# Willkommen

> Super!

---
_scale: 4
---
# Pause

---

# Ok

---
layout: center
_scale: 2.5
---
<<<<<<< HEAD
# Fragen?
Bis zum nächsten mal!

=======
# Questions?
see you next time
>>>>>>> 15820b064d1f419ed06cd798ae4b6dfe0c230e94
```

Hier wir ein Unterstrich in `_scale` verwendet, um mögliche Konflikte mit bestehenden Frontmatter-Eigenschaften zu vermeiden (tatsächlich würde der Fall von `scale` ohne Unterstrich potentielle Probleme verursachen).

<<<<<<< HEAD
Um dem `_scale: ...` Syntax im Frontmatter behandeln zu können, wird eine `./setup/preparser.ts` Datei mit folgendem Inhalt benötigt:
=======
To handle this `_scale: ...` syntax in the frontmatter, create a `./setup/preparser.ts` file with the following content:
>>>>>>> 15820b064d1f419ed06cd798ae4b6dfe0c230e94

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformSlide(content, frontmatter) {
        if ('_scale' in frontmatter) {
          return [
            `<Transform :scale=${frontmatter._scale}>`,
            '',
            content,
            '',
            '</Transform>'
          ].join('\n')
        }
      },
    },
  ]
})
```

Und das wars!