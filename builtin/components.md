# Komponenten

## Built-in Komponenten

<<<<<<< HEAD
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
=======
### `Arrow`

Draw an arrow.
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280

#### Nutzung

~~~md
<Arrow x1="10" y1="20" x2="100" y2="200" />
~~~

Or:

~~~md
<Arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }" />
~~~

Parameter:

<<<<<<< HEAD
* `columns` (`string | number`, standard: `1`): Die Anzahl an Spalten, die gezeigt werden soll
* `listClass` (`string | string[]`, standard: `''`): Klassen, die der dem Inhaltsverzeichnis zugewiesen werden sollen
* `maxDepth` (`string | number`, standard: `Infinity`): Die maximale Tiefe des anzuzeigenden Titels
* `minDepth` (`string | number`, standard: `1`): Die minimale Tiefe des anzuzeigenden Titels
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, standard: `'all'`):
  * `'all'`: Zeigt alle Einträge
  * `'onlyCurrentTree'`: Zeigt nur Einträge, die sich im aktuellen Pfad befinden (aktive, Eltern und Kinder Einträge)
  * `'onlySiblings'`: Zeigt nur Einträge aus dem aktuellen Pfad und die direkten Geschwister
=======
* `x1` (`string | number`, required): start point x position
* `y1` (`string | number`, required): start point y position
* `x2` (`string | number`, required): end point x position
* `y2` (`string | number`, required): end point x position
* `width` (`string | number`, default: `2`): line width
* `color` (`string`, default: `'currentColor'`): line color
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280

### `AutoFitText`

<<<<<<< HEAD
Fügt einen Link ein, der zu einer Folie navigiert.
=======
> Experimental

Box inside which the font size will automatically adapt to fit the content. Similar to PowerPoint or Keynote TextBox.
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280

#### Nutzung

~~~md
<<<<<<< HEAD
<Link to="42">Gehe zur Folie 42</Link>
<Link to="42" title="Gehe zur Folie 42"/>
=======
<AutoFitText :max="200" :min="100" modelValue="Some text"/>
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280
~~~

Parameter:

<<<<<<< HEAD
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
=======
* `max` (`string | number`, default `100`): Maximum font size
* `min` (`string | number`, default `30`): Minimum font size
* `modelValue` (`string`, default `''`): text content
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280

### `LightOrDark`

Kann verwendet werden, um je nach aktivem hellen oder dunklen Theme das eine oder andere anzuzeigen.

#### Verwendung

Verwendung mit den beiden benannten Slots `#dark` und `#light`:
~~~md
<LightOrDark>
  <template #dark>Dunkler Modus ist eingeschaltet</template>
  <template #light>Heller Modus ist eingeschaltet</template>
</LightOrDark>
~~~

Props, die von `LightOrDark` bereitgestellt werden, sind mit Hilfe von scoped slot props verfügbar:
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

In den Slots kann Markdown verwendet werden, muss aber mit einer freien Zeile umrandet werden:
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

### `Link`

Insert a link you can use to navigate to a given slide.

#### Usage

~~~md
<Link to="42">Go to slide 42</Link>
<Link to="42" title="Go to slide 42"/>
<Link to="solutions" title="Go to solutions"/>
~~~

Parameters:

* `to` (`string | number`): The path of the slide to navigate to (slides starts from `1`)
* `title` (`string`): The title to display

One can use a string as `to`, provided the corresponding route exists, e.g.

~~~md
---
routeAlias: solutions
---
# Now some solutions!
~~~

### `RenderWhen`

Render slot only when the context match (for example when we are in presenter view).

#### Usage

~~~md
<RenderWhen context="presenter">This will only be rendered in presenter view.</RenderWhen>
~~~

Context type: `'main' | 'slide' | 'overview' | 'presenter' | 'previewNext'`

Parameters:

* `context` (`Context | Context[]`): context or array of contexts you want the slot to be rendered

### `SlideCurrentNo`

Current slide number.

#### Usage

~~~md
<SlideCurrentNo />
~~~

### `SlidesTotal`

Total number of slides.

#### Usage

~~~md
<SlidesTotal />
~~~

### `Titles`

Insert the main title from a slide parsed as HTML.

Titles and title levels get automatically retrieved from the first title element of each slides.

You can override this automatic behaviour for a slide by using the front matter syntax:
```yml
---
title: Amazing slide title
level: 2
---
```

#### Usage

The `<Titles>` component is a virtual component you can import with:
```js
import Titles from '/@slidev/titles.md'
```

Then you can use it with:
~~~md
<Titles no="42" />
~~~

Parameters:

* `no` (`string | number`): The number of the slide to display the title from (slides starts from `1`)

### `Toc`

Insert a Table Of Content.

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

### `Transform`

Apply scaling or transforming to elements.

#### Usage

~~~md
<Transform :scale="0.5">
  <YourElements />
</Transform>
~~~

Parameters:

* `scale` (`number | string`, default `1`): transform scale value
* `origin` (`string`, default `'top left'`): transform origin value

### `Tweet`

Embed a tweet.

#### Usage

~~~md
<Tweet id="20" />
~~~

Parameters:

* `id` (`number | string`, required): id of the tweet
* `scale` (`number | string`, default `1`): transform scale value
* `conversation` (`string`, default `'none'`): [tweet embed parameter](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)
* `cards` (`'hidden' | 'visible'`, default `'visible'`): [tweet embed parameter](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

### `VAfter`, `VClick` and `VClicks`

See https://sli.dev/guide/animations.html
### `Youtube`

Embed a youtube video.

#### Usage

~~~md
<Youtube id="luoMHjh-XcQ" />
~~~

Parameters:

* `id` (`string`, required): id of the youtube video
* `width` (`number`): width of the video
* `height` (`number`): height of the video

You can also make the video start at specific time if you add `?start=1234` to the id value (where 1234 are seconds),

## Eigene Komponenten

Erstelle einen Ordner `components/` im Ursprung deines Projektverzeichnisses. Dort können eigene Vue Komponenten erstellt werden, die dann ganz einfach in der Markdown Datei genutzt werden können.

Erfahre mehr über [Individualisierung](/custom/directory-structure#components)

## Komponenten bereitgestellt von Themen

Themen können auch eigene Komponenten bereitstellen. Diese sind in der Dokumentation der jeweiligen Themen aufgelistet und erklärt.

Mehr Informationen über die [Ordner Struktur](/custom/directory-structure)
