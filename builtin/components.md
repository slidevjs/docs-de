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

<<<<<<< HEAD
## Eigene Komponenten
=======
### `LightOrDark`

Use it to display one thing or another depending on the active light or dark theme.

#### Usage

Use it with the two named Slots `#dark` and `#light`:
~~~md
<LightOrDark>
  <template #dark>Dark mode is on</template>
  <template #light>Light mode is on</template>
</LightOrDark>
~~~

Provided props on `LightOrDark` component will be available using scoped slot props:
~~~md
<LightOrDark width="100" alt="some image">
  <template #dark="props">
    <img src="/dark.png" v-bind="props"/>
  </template>
  <template #light="props">
    <img src="/light.png" v-bind="props"/>
  </template>
</LightOrDark>
~~~

You can provide markdown in the slots, but you will need to surround the content with blank lines:
~~~md
<LightOrDark>
  <template #dark>
  
![dark](/dark.png)

  </template>
  <template #light>
  
![light](/light.png)

  </template>
</LightOrDark>
~~~


## Custom Components
>>>>>>> 9477d414697bced184348cd18c6374f1bbd82a5c

Erstelle einen Ordner `components/` im Ursprung deines Projektverzeichnisses. Dort können eigene Vue Komponenten erstellt werden, die dann ganz einfach in der Markdown Datei genutzt werden können.

Erfahre mehr über [Individualisierung](/custom/directory-structure#components)

## Komponenten bereitgestellt von Themen

Themen können auch eigene Komponenten bereitstellen. Diese sind in der Dokumentation der jeweiligen Themen aufgelistet und erklärt.

Mehr Informationen über die [Ordner Struktur](/custom/directory-structure)
