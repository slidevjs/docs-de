# Komponenten

## Built-in Komponenten

> Die Dokumentation ist in diesem Bereich noch in Bearbeitung. Schaue dir doch den [Quellcode](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin) selbst an, bevor die Dokumentation fertig ist.

### `TOC`

Fügt ein Inhaltsverzeichnis ein.

Titel und Titelebenen werden automatisch aus dem ersten Titelelement jeder Folie abgerufen.

Man kann das automatische Verhalten für eine Folie überschreiben, indem man den Frontmatter verwendet:

```yml
---
title: Eine Tolle Folie
level: 2
---
```

Oder, wenn eine Folie im Inhaltsverzeichnis ausgeblendet werden soll:
```yml
---
hideInToc: true
---
```

#### Nutzung
~~~md
<Toc />
~~~

Parameter:

* `columns` (`string | number`, default: `1`): Die Anzahl der angezeigten Spalten
* `maxDepth` (`string | number`, default: `Infinity`): Die maximale Tiefe des anzuzeigenden Titelebenen
* `minDepth` (`string | number`, default: `1`): Die minimale Tiefe des anzuzeigenden Titelebenen
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, default: `'all'`):
  * `'all'`: Zeigt alle Items
  * `'onlyCurrentTree'`: Zeigt nur Elemente, die sich im aktuellen Baum befinden (aktives Element, Eltern- und Kinderelemente des aktiven Elements)
  * `'onlySiblings'`: Zeigt nur Elemente, die sich im aktuellen Baum und den direkten Kinderelementen befinden

## Eigene Komponenten

Erstelle einen Ordner `components/` im Ursprung deines Projektverzeichnisses. Dort können eigene Vue Komponenten erstellt werden, die dann ganz einfach in der Markdown Datei genutzt werden können.

Erfahre mehr über [Individualisierung](/custom/directory-structure#components)

## Komponenten bereitgestellt von Themen

Themen können auch eigene Komponenten bereitstellen. Diese sind in der Dokumentation der jeweiligen Themen aufgelistet und erklärt.

Mehr Informationen über die [Ordner Struktur](/custom/directory-structure)
