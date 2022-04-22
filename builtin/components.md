# Komponenten

## Built-in Komponenten

> Die Dokumentation ist in diesem Bereich noch in Bearbeitung. Schaue dir doch den [Quellcode](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin) selbst an, bevor die Dokumentation fertig ist.

### `Toc`

Fügt ein Inhaltsverzeichnis ein.

Wenn Folien nicht im Inhaltsverzeichnis erscheinen sollen, muss das im Frontmatter der Folie angegeben werden:
```yml
---
hideInToc: true
---
```

Titel werden durch die [`<Titles>` Komponente](#titles) angezeigt.

#### Nutzung

~~~md
<Toc />
~~~

Parameter:

* `columns` (`string | number`, standard: `1`): Die Anzahl an Spalten, die gezeigt werden soll
* `listClass` (`string | string[]`, standard: `''`): Klassen, die der dem Inhaltsverzeichnis zugewiesen werden sollen
* `maxDepth` (`string | number`, standard: `Infinity`): Die maximale Tiefe des anzuzeigenden Titels
* `minDepth` (`string | number`, standard: `1`): Die minimale Tiefe des anzuzeigenden Titels
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, standard: `'all'`):
  * `'all'`: Zeigt alle Einträge
  * `'onlyCurrentTree'`: Zeigt nur Einträge, die sich im aktuellen Pfad befinden (aktive, Eltern und Kinder Einträge)
  * `'onlySiblings'`: Zeigt nur Einträge aus dem aktuellen Pfad und die direkten Geschwister

### `Link`

Fügt einen Link ein, der zu einer Folie navigiert.

#### Nutzung

~~~md
<Link to="42">Gehe zur Folie 42</Link>
<Link to="42" title="Gehe zur Folie 42"/>
~~~

Parameter:

* `to` (`string | number`): Der Pfad der Folie, zu der navigiert werden soll (Folien starten bei `1`)
* `title` (`string`): Der anzuzeigende Titel

### `Titles`

Fügt den Haupttitel einer Folie als geparstes HTML ein.

Titel und Titelebenen werden automatisch aus dem ersten Titelelement jeder Folie abgerufen.

```yml
---
title: Eine Tolle Folie
level: 2
---
```

#### Nutzung

Die `<Titles>` Komponente ist eine virtuelle Komponente, die wie folgend importiert werden kann:
```js
import Titles from '/@slidev/titles.md'
```

Dann kann man sie nutzen:

~~~md
<Titles no="42" />
~~~

Parameter:

* `no` (`string | number`): Die Nummer der Folie, von der der Titel gezeigt werden soll (Folien starten bei `1`)

## Eigene Komponenten

Erstelle einen Ordner `components/` im Ursprung deines Projektverzeichnisses. Dort können eigene Vue Komponenten erstellt werden, die dann ganz einfach in der Markdown Datei genutzt werden können.

Erfahre mehr über [Individualisierung](/custom/directory-structure#components)

## Komponenten bereitgestellt von Themen

Themen können auch eigene Komponenten bereitstellen. Diese sind in der Dokumentation der jeweiligen Themen aufgelistet und erklärt.

Mehr Informationen über die [Ordner Struktur](/custom/directory-structure)
