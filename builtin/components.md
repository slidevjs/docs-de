# Komponenten

## Built-in Komponenten

> Die Dokumentation ist in diesem Bereich noch in Bearbeitung. Schaue dir doch den [Quellcode](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin) selbst an, bevor die Dokumentation fertig ist.

<<<<<<< HEAD
## Eigene Komponenten
=======
### `TOC`

Insert a Table Of Content.

Titles and title levels get automatically retrieved from the first title element of each slides.

You can override this automatic behaviour for a slide by using the front matter syntax:
```yml
---
title: Amazing slide title
level: 2
---
```

Or if you prefer the slide to not appear in the TOC at all, you can use:
```yml
---
hideInToc: true
---
```

#### Usage
~~~md
<Toc />
~~~

Parameters:

* `columns` (`string | number`, default: `1`): The number of columns of the display
* `maxDepth` (`string | number`, default: `Infinity`): The maximum depth level of title to display
* `minDepth` (`string | number`, default: `1`): The minimum depth level of title to display
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, default: `'all'`):
  * `'all'`: Display all items
  * `'onlyCurrentTree'`: Display only items that are in current tree (active item, parents and children of active item)
  * `'onlySiblings'`: Display only items that are in current tree and their direct siblings

## Custom Components
>>>>>>> 06ae2757fe5d59fbc9f2acd5867bba7521f3d679

Erstelle einen Ordner `components/` im Ursprung deines Projektverzeichnisses. Dort können eigene Vue Komponenten erstellt werden, die dann ganz einfach in der Markdown Datei genutzt werden können.

Erfahre mehr über [Individualisierung](/custom/directory-structure#components)

## Komponenten bereitgestellt von Themen

Themen können auch eigene Komponenten bereitstellen. Diese sind in der Dokumentation der jeweiligen Themen aufgelistet und erklärt.

Mehr Informationen über die [Ordner Struktur](/custom/directory-structure)
