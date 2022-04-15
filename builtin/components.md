# Komponenten

## Built-in Komponenten

> Die Dokumentation ist in diesem Bereich noch in Bearbeitung. Schaue dir doch den [Quellcode](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin) selbst an, bevor die Dokumentation fertig ist.

### `Toc`

Fügt ein Inhaltsverzeichnis ein.

<<<<<<< HEAD
Titel und Titelebenen werden automatisch aus dem ersten Titelelement jeder Folie abgerufen.

Man kann das automatische Verhalten für eine Folie überschreiben, indem man den Frontmatter verwendet:
=======
If you want a slide to not appear in the `<Toc>` component, you can use in the front matter block of the slide:
```yml
---
hideInToc: true
---
```

Titles are displayed using the [`<Titles>` component](#titles)

#### Usage

~~~md
<Toc />
~~~

Parameters:

* `columns` (`string | number`, default: `1`): The number of columns of the display
* `listClass` (`string | string[]`, default: `''`): Classes to apply to the table of contents list
* `maxDepth` (`string | number`, default: `Infinity`): The maximum depth level of title to display
* `minDepth` (`string | number`, default: `1`): The minimum depth level of title to display
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, default: `'all'`):
  * `'all'`: Display all items
  * `'onlyCurrentTree'`: Display only items that are in current tree (active item, parents and children of active item)
  * `'onlySiblings'`: Display only items that are in current tree and their direct siblings

### `Link`

Insert a link you can use to navigate to a given slide.

#### Usage

~~~md
<Link to="42">Go to slide 42</Link>
<Link to="42" title="Go to slide 42"/>
~~~

Parameters:

* `to` (`string | number`): The path of the slide to navigate to (slides starts from `1`)
* `title` (`string`): The title to display

### `Titles`

Insert the main title from a slide parsed as HTML.

Titles and title levels get automatically retrieved from the first title element of each slides.
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5

```yml
---
title: Eine Tolle Folie
level: 2
---
```

<<<<<<< HEAD
Oder, wenn eine Folie im Inhaltsverzeichnis ausgeblendet werden soll:
```yml
---
hideInToc: true
---
```

#### Nutzung
=======
#### Usage

The `<Titles>` component is a virtual component you can import with:
```js
import Titles from '/@slidev/titles.md'
```

Then you can use it with:
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5
~~~md
<Titles no="42" />
~~~

Parameter:

<<<<<<< HEAD
* `columns` (`string | number`, default: `1`): Die Anzahl der angezeigten Spalten
* `maxDepth` (`string | number`, default: `Infinity`): Die maximale Tiefe des anzuzeigenden Titelebenen
* `minDepth` (`string | number`, default: `1`): Die minimale Tiefe des anzuzeigenden Titelebenen
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, default: `'all'`):
  * `'all'`: Zeigt alle Items
  * `'onlyCurrentTree'`: Zeigt nur Elemente, die sich im aktuellen Baum befinden (aktives Element, Eltern- und Kinderelemente des aktiven Elements)
  * `'onlySiblings'`: Zeigt nur Elemente, die sich im aktuellen Baum und den direkten Kinderelementen befinden
=======
* `no` (`string | number`): The number of the slide to display the title from (slides starts from `1`)
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5

## Eigene Komponenten

Erstelle einen Ordner `components/` im Ursprung deines Projektverzeichnisses. Dort können eigene Vue Komponenten erstellt werden, die dann ganz einfach in der Markdown Datei genutzt werden können.

Erfahre mehr über [Individualisierung](/custom/directory-structure#components)

## Komponenten bereitgestellt von Themen

Themen können auch eigene Komponenten bereitstellen. Diese sind in der Dokumentation der jeweiligen Themen aufgelistet und erklärt.

Mehr Informationen über die [Ordner Struktur](/custom/directory-structure)
