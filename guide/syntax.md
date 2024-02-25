---
outline: deep
---

# Markdown Syntax

<<<<<<< HEAD
Alle Folien der Präsentation sind in einer **einzelnen Markdown Datei** untergebracht (Standartweiße `./slides.md`).

Es können alle [Markdown Funktionen](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) wie normal genutzt werden. Zusätzlich können auch noch HTML und Vue Komponenten oder Styles mit der Hilfe von [Windi CSS](https://windicss.org) genutzt werden. Folien sind durch `---` zusammen mit einer neuen Zeile getrennt.
=======
Slides are written within **a single markdown file** (by default `./slides.md`).

You can use [the Markdown features](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) as you normally would, with the additional support of inlined HTML and Vue Components. Styling using [UnoCSS](/custom/config-unocss) is also supported. Use `---` padded with a new line to separate your slides.
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

~~~md
# Slidev

Hallo, Welt!

---

# Folie 2

Codeblöcke zum direkten hervorheben verwenden

//```ts
console.log('Hallo, Welt!')
//```

---

# Folie 3

Nutze Windi CSS und Vue Komponenten um deine Folien zu stylen.

<div class="p-3">
  <Tweet id="20" />
</div>
~~~

<<<<<<< HEAD
## Titelseite & Layouts

Layouts und andere Metadaten können für Folien mit dem Umwandeln der Trennzeichen in [Frontmatter-Blöcke](https://jekyllrb.com/docs/front-matter/) angegeben werden. Jeder Frontmatter-Block startet  mit einem Dreifachstrich (`---`) und ended mit einem weiterem. Texte dazwischen sind Datenobjekte im [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/) Format. Zum Beispiel:
=======
## Frontmatter & Layouts

Specify layouts and other metadata for each slide by converting the separators into [frontmatter blocks](https://jekyllrb.com/docs/front-matter/). Each frontmatter starts with a triple-dash and ends with another. Texts between them are data objects in [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/) format. For example:
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

~~~md
---
layout: cover
---

# Slidev

Das ist die Titelseite.

---
layout: center
background: './images/background-1.png'
class: 'text-white'
---

# Folie 2

Diese Folie hat ein layout `center` und ein Hintergrundbild.

---

# Folie 3

Das ist eine Standartfolie ohne weiteren Metadaten.
~~~

Schaue unter [Individualisierung](/custom/) für mehr Informationen nach.

<<<<<<< HEAD
## Codeblöcke
=======
> The custom syntax might not be compactible with some formatters like Prettier. To improve that, we also support using a direct `yaml` code block to define the frontmatter:
>
> ~~~markdown
> ---
> layout: cover
> ---
>
> # Slidev
>
> This is the cover page.
>
> ---
>
> ```yaml
> # The first yaml block will be treated as the frontmatter of that slide
> layout: center
> background: './images/background-1.png'
> class: 'text-white'
> ```
>
> # Page 2
>
> This is a page with the layout `center` and a background image.
> ~~~
>
> (Available since v0.44.0)

## Code Blocks
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

Ein großer Grund, warum ich Slidev entwickle, ist damit mein Code auf den Folien gut aussieht. So, wie erwartet, können Codeblöcke mit Markdown-Flavor genutzt werden, damit der Syntax ordentlich hervorgehoben wird.

<<<<<<< HEAD
~~~ts
//```ts
console.log('Hallo, Welt!')
//```
~~~

Wir unterstützen [Prism](http://prismjs.com) und [Shiki](https://github.com/shikijs/shiki) zur Syntaxhervorhebung. Mehr Informationen gibt es im [Abschnitt Highlighters](/custom/highlighters).
=======
~~~md
```ts
console.log('Hello, World!')
```
~~~

We support [Prism](https://prismjs.com), [Shiki](https://github.com/shikijs/shiki) as syntax highlighters. Refer to [the highlighters section](/custom/highlighters) for more details.
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

### Zeilen Hervorhebung

<<<<<<< HEAD
Um bestimmte Zeilen im Code hervorzuheben, muss man nur die Zeilen, die hervorgehoben werden sollen, in geschwungenen Klammern (`{}`) notieren. Zeilen werden von 1 aufwärts gezählt.

~~~ts
//```ts {2,3}
function addiere(
=======
To highlight specific lines, simply add line numbers within bracket `{}`. Line numbers start counting from 1 by default.

~~~md
```ts {2,3}
function add(
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
~~~

<<<<<<< HEAD
Um die Hervorhebung in mehreren Schritten zu ändern, können mehrere Angaben mit `|` getrennt angegeben werden. Zum Beispiel:
=======
You can enable line number to all slides by setting `lineNumbers: true` on the config or enable each code block individually by setting `lines:true`. You can also set the starting line for each code block and highlight the lines accordingly, defaults to 1:
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

~~~md
```ts {6,7}{lines:true, startLine:5}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
~~~

<<<<<<< HEAD
Hier wird zuerst `a: Ref<number> | number` und `b: Ref<number> | number`, einen Klick später `return computed(() => unref(a) + unref(b))` und nach dem letzten Klick wird der ganze Block hervorgehoben. Erfahre mehr über [Klicks und Animationen](/guide/animations).

Um die Hervorhebung von Zeilen zu überspringen, kann die Zeilennummer auf `0` gesetzt werden. Zum Beispiel

~~~ts {0}
//```ts {0}
=======
To change the highlight in multiple clicks, you can use `|` to separate them:

~~~md
```ts {2-3|5|all}
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
~~~

<<<<<<< HEAD
Wenn der Code nicht in eine Folie passt, kann eine zusätzliche maxHeight-Option übergeben werden, die eine feste Höhe festlegt und das Scrollen ermöglicht:
=======
This will first highlight `a: Ref<number> | number` and `b: Ref<number> | number`, and then `return computed(() => unref(a) + unref(b))` after one click, and lastly, the whole block.
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

You can set the line number to `hide` to hide the code block or `none` to not highlight any line:

~~~md
```ts {hide|none}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
~~~

::: tip
Learn more in the [clicks animations guide](./animations#positioning).
:::

If the code doesn't fit into one slide, you use the `maxHeight` to set fixed height and enable scrolling:

~~~md
```ts {2|3|7|12}{maxHeight:'100px'}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
/// ...as many lines as you want
const c = add(1, 2)
```
~~~

### TwoSlash Integration

This feature is only available when you [set `highlighter` to `shiki`](/custom/highlighters)

[TwoSlash](https://twoslash.netlify.app/) is a powerful tool for rendering TypeScript code blocks with type information on hover or inlined. It's quite useful for preparing slides for JavaScript/TypeScript-related topics.

To use it, you can add `twoslash` to the code block's language identifier:

~~~md
```ts twoslash
import { ref } from 'vue'

const count = ref(0)
//            ^?
```
~~~

It will be rendered as:

```ts twoslash
import { ref } from 'vue'

const count = ref(0)
//            ^?
```

### Monaco Editor

Wenn man Änderung am Code während der Präsentation machen möchte, kann der Monaco Editor genutzt werden. Ein einfaches `{monaco}` nach der Programmiersprache und der Codeblock wandelt sich in einen komplett ausgestatteten Monaco Editor um!

<<<<<<< HEAD
~~~ts
//```ts {monaco}
console.log('Hallo, Welt!')
//```
=======
~~~md
```ts {monaco}
console.log('HelloWorld')
```
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402
~~~

Wie man [Monaco konfiguriert](/custom/config-monaco).

#### Monaco Diff

Monaco can also generate a diff between two code blocks. Use `{monaco-diff}` to turn the block into a [diff Monaco editor](https://microsoft.github.io/monaco-editor/playground.html?source=v0.36.1#example-creating-the-diffeditor-multi-line-example) and use `~~~` to separate both original and modified version of the code!

````md
```ts {monaco-diff}
This line is removed on the right.
just some text
abcd
efgh
Some more text
~~~
just some text
abcz
zzzzefgh
Some more text.
This line is removed on the left.
```
````

## Embedded Styles

Man kann den `<style>` Tag nutzen, um direkt in der Markdowndatei Styles für die **aktuelle Folie** zu überschreiben.

```md
# Das ist Rot.

<style>
h1 {
  color: red
}
</style>

---

# Die nächste Folie wird nicht beeinflusst
```

<<<<<<< HEAD
Der `<style>` Tag ist immer [bereichsbezogen](https://vue-loader.vuejs.org/guide/scoped-css.html). Mehr über das Überschreiben von globalen Styles gibt es im Abschnitt [Individualisierung](/custom/directory-structure#style).


Durch [Windi CSS](https://windicss.org), kann direkt verschachteltes CSS oder [Direktiven](https://windicss.org/features/directives.html) (z.B. `@apply`) genutzt werden.
=======
`<style>` tag in Markdown is always [scoped](https://vuejs.org/api/sfc-css-features.html#scoped-css). As an outstanding result, a selector with the child combinator (`.a > .b`) is unusable as such; see the previous link. To have global style overrides, check out the [customization section](/custom/directory-structure#style).

Powered by [UnoCSS](/custom/config-unocss), you can directly use nested css and [directives](https://unocss.dev/transformers/directives) (e.g. `--uno:` or `@apply`)
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

```md
# Slidev

> Hallo, `Welt!`

<style>
blockquote {
  code {
    --uno: text-teal-500 dark:text-teal-400;
  }
}
</style>
```

## Statische Assets

Wie man es auch in Markdown machen würde, kann man Bilder mit der Hilfe von remoten oder lokalen Urls definieren.

Für remote Assets kann man das integrierte [`vite-plugin-remote-assets`](https://github.com/antfu/vite-plugin-remote-assets) Plugin nutzten. Dieses Plugin speichert Bilder direkt auf der Festplatte, sodass selbst große Bilder später in der Präsentation sofort laden.

```md
![Remotes Bild](https://sli.dev/favicon.png)
```

Lokale Assets können direkt im [`public` Ordner](/custom/directory-structure.html#public) abgelegt werden und mit **führendem Schrägstrich** genutzt werden.

```md
![Lokales Bild](/pic.png)
```

<<<<<<< HEAD
Falls man eigene Styles auf Bilder anwenden möchte, kann man den Markdown in einen `<img>` Tag umwandeln.
=======
For you want to apply custom sizes or styles, you can convert them to the `<img>` tag
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

```html
<img src="/pic.png" class="m-40 h-40 rounded shadow" />
```

## Notizen

Für jede Folie kann man Notizen anlegen. Diese erscheinen dann im [Moderatoren Modus](/guide/presenter-mode), damit man sie in den Präsentationen nutzen kann.

In Markdown wird der letzte Kommentar in einer Folie in eine Notiz umgewandelt.

~~~md
---
layout: cover
---

# Folie 1

Das ist die Titelseite.

<!-- Das ist eine Notiz -->

---

# Folie 2

<!-- Das ist keine Notiz, weil es vor dem Inhalt der Folie steht  -->

Die 2. Folie

<!--
Das ist eine weitere Notiz
-->
~~~

## Icons

<<<<<<< HEAD
In Slidev können fast alle Open-Source Incon-Sets dank [`unplugin-icons`](https://github.com/antfu/unplugin-icons) und [Iconify](https://iconify.design/) **direkt** in der Markdown Datei genutzt werden. 
=======
Slidev allows you to have the accessing to almost all the popular open-source iconsets **directly** in your markdown after installing the corresponding package. Powered by [`unplugin-icons`](https://github.com/antfu/unplugin-icons) and [Iconify](https://iconify.design/).
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

Die Benennung folgt den [Iconify](https://iconify.design/) Namenskonventionen `{iconset-name}-{icon-name}`. Zum Beispiel:

<<<<<<< HEAD
- `<mdi-account-circle />` - <mdi-account-circle /> von [Material Design Icons](https://github.com/Templarian/MaterialDesign)
- `<carbon-badge />` - <carbon-badge /> von [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons)
- `<uim-rocket />` - <uim-rocket /> von [Unicons Monochrome](https://github.com/Iconscout/unicons)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> von [Twemoji](https://github.com/twitter/twemoji)
- `<logos-vue />` - <logos-vue /> von [SVG Logos](https://github.com/gilbarbara/logos)
- Und viele mehr...
=======
- `<mdi-account-circle />` - <mdi-account-circle /> from [Material Design Icons](https://github.com/Templarian/MaterialDesign) - [`@iconify-json/mdi`](https://npmjs.com/package/@iconify-json/mdi)
- `<carbon-badge />` - <carbon-badge /> from [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons) - [`@iconify-json/carbon`](https://npmjs.com/package/@iconify-json/carbon)
- `<uim-rocket />` - <uim-rocket /> from [Unicons Monochrome](https://github.com/Iconscout/unicons) - [`@iconify-json/uim`](https://npmjs.com/package/@iconify-json/uim)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> from [Twemoji](https://github.com/twitter/twemoji) - [`@iconify-json/twemoji`](https://npmjs.com/package/@iconify-json/twemoji)
- `<logos-vue />` - <logos-vue /> from [SVG Logos](https://github.com/gilbarbara/logos) - [`@iconify-json/logos`](https://npmjs.com/package/@iconify-json/logos)
- And much more...
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

Alle verfügbaren Icons können mit [Icônes](https://icones.js.org/) durchsucht werden.

### Icons stylen

Icons können genau, wie alle anderen HTML Elemente gestylt werden:

```html
<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping" />
```

<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping ml-2" />

## Slots

> Verfügbar seit v0.18

Einige Layouts können mithilfe von [Vue's benannten Slots](https://v3.vuejs.org/guide/component-slots.html) mehrere Basispunkte bereitstellen.

Zum Beispiel, im [`two-cols` Layout](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts/two-cols.vue) hat man zwei Spalten, links (`default` Slot) und rechts (`right` slot), nebeneinander.

```md
---
layout: two-cols
---

<template v-slot:default>

# Links

Dieser Text steht links

</template>
<template v-slot:right>

# Rechts

Dieser Text steht rechts

</template>
```

<div class="grid grid-cols-2 rounded border border-gray-400 border-opacity-50 px-10 pb-4">
<div>
<h3>Links</h3>
<p>Dieser Text steht links</p>
</div>
<div>
<h3>Rechts</h3>
<p>Dieser Text steht rechts</p>
</div>
</div>

Wir bieten außerdem abgekürzten Syntax Zucker `::name::` für Slot Namen. Das folgende Beispiel funktioniert genau das wie das letzte.

```md
---
layout: two-cols
---

# Links

Dieser Text steht links

::right::

# Rechts

Dieser Text steht rechts
```

Der Standart-Slot kann explizit und in eigener Reihenfolge angegeben werden

```md
---
layout: two-cols
---

::right::

# Rechts

Dieser Text steht rechts

::default::

# Links

Dieser Text steht links
```

<<<<<<< HEAD
## Konfigurationen
=======
## Import Code Snippets

> Available since v0.47.0

You can import code snippets from existing files via following syntax:

```md
<<< @/snippets/snippet.js
```

::: tip
The value of `@` corresponds to the source root, the directory where the `slides.md` is located.
:::

This feature is vendored from VitePress, learn more about it in [VitePress's documentation](https://vitepress.dev/guide/markdown#import-code-snippets).

## Configurations
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

Alle benötigten Konfigurationen können in der Markdown Datei definiert werden. Zum Beispiel:

```md
---
theme: seriph
layout: cover
background: 'https://source.unsplash.com/1600x900/?nature,water'
---

# Slidev

Das ist die Titelfolie.
```

Erfahre mehr über [Frontmatter-Konfigurationen](/custom/#frontmatter-configures).

## LaTeX

Slidev kommt mit out-of-box LaTeX Unterstützung von [KaTeX](https://katex.org/).

<TheTweet id="1392246507793915904" />

### Inline

Umgebe den LaTeX Syntax mit einem einzelnen `$` auf jeder Seite für das rendern in der Zeile.

```md
$\sqrt{3x-1}+(1+x)^2$
```

### Block

Nutze zwei (`$$`) für das Rendern im Block. Dieser Modus nutzt größere Symbole und zentriert den Text.

```latex
$$
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$
```

Erfahre mehr: [Demo](https://sli.dev/demo/starter/8) | [KaTeX](https://katex.org/) | [`markdown-it-katex`](https://github.com/waylonflinn/markdown-it-katex)

<<<<<<< HEAD
## Diagramme
=======
### LaTex line highlighting

> Available since v0.43.1

To highlight specific lines, simply add line numbers within bracket `{}`. Line numbers start counting from 1 by default.

```latex
$$ {1|3|all}
\begin{array}{c}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} & = 0
\end{array}
$$
```

The `at` and `finally` options of [code blocks](#line-highlighting) are also available for LaTeX blocks.

## Diagrams
>>>>>>> aa8c4cadc05aeca1e672a8297d644c558b294402

Man kann außerdem Diagramme / Graphen aus Textbeschreibungen in der Markdowndatei mit der Hilfe von [Mermaid](https://mermaid-js.github.io/mermaid) erstellen. 

Codeblöcke, welche mit `mermaid` markiert sind, werden in Diagramme umgewandelt:

~~~md
//```mermaid
sequenceDiagram
  Alice->John: Hallo John, wie geht es dir?
  Note over Alice,John: Eine typische Konversation.
//```
~~~

Des Weiteren kann ein Objekt übergeben werden, dass Optionen wie Skalierung oder Themierung definiert. Der Syntax dieses Objekts ist ein Javascript-Objektliteral. Für String müssen Anführungszeichen (`'`) genutzt werden und Kommas (`,`) zwischen Keys.  

~~~md
//```mermaid {theme: 'neutral', scale: 0.8}
graph TD
B[Text] --> C{Entscheidung}
C -->|Eins| D[Ergebnis 1]
C -->|Zwei| E[Ergebnis 2]
//```
~~~

Erfahre mehr: [Demo](https://sli.dev/demo/starter/9) | [Mermaid](https://mermaid-js.github.io/mermaid)

## Mehrere Dateien

> Verfügbar seit v0.15

Man kann die Hauptdatei (`slides.md`) in mehrere Dateien aufteilen.

`slides.md` :

```md
# Folie 1

Das ist eine normale Folie.

---
src: ./subpage2.md
---

<!-- Diese Folie wird von './subpage2.md' geladen. -->
geschriebene Inhalte werden ignoriert
```

`subpage2.md` :

```md
# Folie 2

Diese Folie ist von einer anderen Datei
```

### Frontmatter Zusammenführung

Man kann Formatter von der Hauptdatei oder anderen Markdownseiten nutzen. Falls mehrere gleiche Attribute enthalten sind, werden die Attribute der **Einstiegsdatei** genutzt, da diese immer die **höhere Priorität** hat. Zum Beispiel:

`slides.md` :

```md
---
src: ./cover.md
background: https://sli.dev/bar.png
class: text-center
---
```

`cover.md` :

```md
---
layout: cover
background: https://sli.dev/foo.png
---

# Titelseite

Titelseite
```

Diesen Folien werden genau, wie die folgenden Aussehen:

```md
---
layout: cover
background: https://sli.dev/bar.png
class: text-center
---

# Titelseite

Titelseite
```

### Folienwiederverwendung

Mit Mehrfach-Eintrag Unterstützung ist das Wiederverwenden von Folien super einfach:

```yaml
---
src: ./cover.md
---

---
src: ./intro.md
---

---
src: ./content.md
---

---
# Wiederverwenden
src: ./content.md
---
```

## MDC Syntax

> Available since v0.43.0

Slidev supports optional [MDC (Markdown Components) Syntax](https://content.nuxtjs.org/guide/writing/mdc) powered by [`markdown-it-mdc`](https://github.com/antfu/markdown-it-mdc).

You can enable it by adding `mdc: true` to the frontmatter of your markdown file.

```mdc
---
mdc: true
---

This is a [red text]{style="color:red"} :inline-component{prop="value"}

![](/image.png){width=500px lazy}

::block-component{prop="value"}
The **default** slot
::
```

Learn more about [the syntax](https://content.nuxt.com/guide/writing/mdc).
