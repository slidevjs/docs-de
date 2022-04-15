# Anpassungen

Slidev ist vollständig anpassbar, vom Styling bis zur Tools-konfiguration. Slidev ermöglicht darunter liegende Tools zu konfigurieren ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), etc.)

## Frontmatter Konfigurationen

Slidev kann im Frontmatterblock der ersten Folie konfiguriert werden. Folgende Liste zeigt die Standartwerte:

```yaml
---
# themen-id oder package name
theme: 'default'
<<<<<<< HEAD
# Titel der Folie (wird automatisch aus der ersten Überschrift abgeleitet, wenn nicht angegeben)
title: ''
# titleTemplate für die Webseite, `%s` wird mit dem Folientitel ersetzt
=======
# title of your slide, will auto infer from the first header if not specified
title: 'Slidev'
# titleTemplate for the webpage, `%s` will be replaced by the page's title
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5
titleTemplate: '%s - Slidev'
# information for your slides, can be a markdown string
info: false

<<<<<<< HEAD
# erlaube das Herunterladen einer PDF aus der SPA, kann auch ein eigener URL sein
download: true
# Syntaxhervorheber, entweder 'prism' oder 'shiki'
highlighter: 'prism'
# Monaco-Editor aktivieren, standardmäßig nur dev
monaco: 'dev'
# Zeilennummern in Codeblöcken anzeigen
lineNumbers: false

# Farbschema für die Folien erzwingen, kann 'auto', 'light' oder 'dark' sein
colorSchema: 'auto'
# Router-Modus für Vue-Router, entweder "history" oder "hash"
=======
# enabled pdf downloading in SPA build, can also be a custom url
download: false
# filename of the export file
exportFilename: 'slidev-exported.pdf'
# syntax highlighter, can be 'prism' or 'shiki'
highlighter: 'prism'
# show line numbers in code blocks
lineNumbers: false
# enable monaco editor, can be boolean, 'dev' or 'build'
monaco: 'dev'
# download remote assets in local using vite-plugin-remote-assets, can be boolean, 'dev' or 'build'
remoteAssets: false
# controls whether texts in slides are selectable
selectable: true
# enable slide recording, can be boolean, 'dev' or 'build'
record: 'dev'

# force color schema for the slides, can be 'auto', 'light', or 'dark'
colorSchema: 'auto'
# router mode for vue-router, can be "history" or "hash"
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5
routerMode: 'history'
# Seitenverhältnis der Folien
aspectRatio: '16/9'
# tatsächliche Breite des Canvases (Einheit in px)
canvasWidth: 980
# used for theme customization, will inject root styles as `--slidev-theme-x` for attribute `x`
themeConfig:
  primary: '#5d8392'

# favicon: Kann ein lokaler Pfad oder eine URL sein.
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
<<<<<<< HEAD

# Schriften werden automatisch von Google Fonts importiert
# Erfahre mehr: https://de.sli.dev/custom/fonts
=======
# URL of PlantUML server used to render diagrams
plantUmlServer: 'https://www.plantuml.com/plantuml'
# fonts will be auto imported from Google fonts
# Learn more: https://sli.dev/custom/fonts
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# Standard-Frontmatter, gilt für alle Folien
defaults:
  layout: 'default'
  # ...

<<<<<<< HEAD
# Informationen für die Folien (Markdown string möglich)
info: |
  ## Slidev
  My first [Slidev](http://sli.dev/) presentations!
=======
# drawing options
# Learn more: https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5
---
```

Weitere Informationen sind in den [Typdefinitionen](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) zu finden.

## Ordner Struktur

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
