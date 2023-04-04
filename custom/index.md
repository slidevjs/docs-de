# Anpassungen

Slidev ist vollständig anpassbar, vom Styling bis zur Tools-konfiguration. Slidev ermöglicht darunter liegende Tools zu konfigurieren ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), etc.)

## Frontmatter Konfigurationen

Slidev kann im Frontmatterblock der ersten Folie konfiguriert werden. Folgende Liste zeigt die Standartwerte:

```yaml
---
# theme-id oder package name
# Mehr unter: https://sli.dev/themes/use.html
theme: 'default'
# Titel der Folie (wird automatisch aus der ersten Überschrift abgeleitet, wenn nicht angegeben)
title: 'Slidev'
# titleTemplate für die Webseite, `%s` wird mit dem Folientitel ersetzt
titleTemplate: '%s - Slidev'
# information for your slides, can be a markdown string
info: false
# erlaube das Herunterladen einer PDF aus der SPA, kann auch ein eigener URL sein
download: false
<<<<<<< HEAD
# Präsentationsmodus aktivieren, kann boolean, 'dev' oder 'build' sein
presenter: true
# Dateiname der exportierten Datei
exportFilename: 'slidev-exported.pdf'
# Syntaxhervorheber, entweder 'prism' oder 'shiki'
=======
# filename of the export file
exportFilename: 'slidev-exported'
# export options
# use export CLI options in camelCase format
# Learn more: https://sli.dev/guide/exporting.html
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
# syntax highlighter, can be 'prism' or 'shiki'
>>>>>>> 86744c7f6c0257bbc850cc76bc921ff08eb82107
highlighter: 'prism'
# Zeilennummern in Codeblöcken anzeigen
lineNumbers: false
# Monaco-Editor aktivieren, standardmäßig nur dev
monaco: 'dev'
# Remote-Assets lokal mit vite-plugin-remote-assets herunterladen, kann ein  boolean, 'dev' oder 'build' sein
remoteAssets: false
# gibt an, ob Text in den Folien auswählbar ist
selectable: true
# Folienaufzeichnung aktivieren, kann ein boolean, 'dev' oder 'build' sein
record: 'dev'

# Farbschema für die Folien erzwingen, kann 'auto', 'light' oder 'dark' sein
colorSchema: 'auto'
# Router-Modus für Vue-Router, entweder "history" oder "hash"
routerMode: 'history'
# Seitenverhältnis der Folien
aspectRatio: '16/9'
# tatsächliche Breite des Canvases (Einheit in px)
canvasWidth: 980
# passe Theme Designs an, fügt Root-Styles `--slidev-theme-x` für das Attribut `x` ein
themeConfig:
  primary: '#5d8392'

# favicon: Kann ein lokaler Pfad oder eine URL sein.
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'

# URL von einem PlantUML Server, der zum render von Diagrammen genutzt werden soll
plantUmlServer: 'https://www.plantuml.com/plantuml'
# Schriften werden automatisch von Google Fonts importiert
# Erfahre mehr: https://de.sli.dev/custom/fonts
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# Standard-Frontmatter, gilt für alle Folien
defaults:
  layout: 'default'
  # ...


# Zeichnungsoptionen
# Mehr Informationen: https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true

# HTML tag attributes
htmlAttrs:
  dir: 'ltr'
  lang: 'en'
---
```

Weitere Informationen sind in den [Typdefinitionen](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) zu finden.

<<<<<<< HEAD
## Ordner Struktur
=======
## Per slide configuration

In addition, every slide accepts the following configuration in the Frontmatter block:

* `clicks` (`number`): Custom clicks count (learn more [here](/guide/animations.html#custom-clicks-count)).
* `disabled` (`boolean`): Completely disable the slide.
* `hide` (`boolean`): Hide sub-slides when using `src` (learn more [here](/guide/syntax.html#multiple-entries)).
* `hideInToc` (`boolean`): Hide the slide for the `<Toc>` components (learn more [here](/builtin/components.html#toc)).
* `layout` (`string`): Defines the layout component applied to the slide (learn more [here](/guide/syntax.html#front-matter-layouts) and [here](/builtin/layouts.html)).
* `level` (`number`): Override the title level for the `<Title>` and `<Toc>` components (only if `title` has also been declared, learn more [here](/builtin/components.html#titles)).
* `preload` (`boolean`, default `true`): preload the next slide (learn more [here](/guide/animations.html#motion)).
* `routeAlias` (`string`): create a route alias that can be used in the URL or with the `<Link>` component (learn more [here](/builtin/components.html#link)).
* `src` (`string`): Includes a markdown file (learn more [here](/guide/syntax.html#multiple-entries)).
* `title` (`string`): Override the title for the `<Title>` and `<Toc>` components (learn more [here](/builtin/components.html#titles)).
* `transition` (`string | TransitionProps`): Defines the transition between the slide and the next one (learn more [here](/guide/animations.html#slide-transitions)).

## Directory Structure
>>>>>>> 86744c7f6c0257bbc850cc76bc921ff08eb82107

Slidev nutzt  Ordner-Struktur-Konventionen, um die Konfigurationsoberfläche minimal zu halten und Erweiterungen flexibel und intuitiv zu gestalten.

Siehe Abschnitt [Ordner Struktur](/custom/directory-structure).
## Tools Konfigurieren

- [Highlighters](/custom/highlighters)
- [Vue konfigurieren](/custom/config-vue)
- [Vite konfigurieren](/custom/config-vite)
- [Windi CSS konfigurieren](/custom/config-windicss)
- [Monaco konfigurieren](/custom/config-monaco)
- [KaTeX konfigurieren](/custom/config-katex)
- [Mermaid konfigurieren](/custom/config-mermaid)
