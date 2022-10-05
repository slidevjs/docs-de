# Anpassungen

Slidev ist vollständig anpassbar, vom Styling bis zur Tools-konfiguration. Slidev ermöglicht darunter liegende Tools zu konfigurieren ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), etc.)

## Frontmatter Konfigurationen

Slidev kann im Frontmatterblock der ersten Folie konfiguriert werden. Folgende Liste zeigt die Standartwerte:

```yaml
---
<<<<<<< HEAD
# themen-id oder package name
=======
# theme id or package name
# Learn more: https://sli.dev/themes/use.html
>>>>>>> a9706e023e005538c02c8ba9f36d03876f65dacb
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
# Dateiname der exportierten Datei
exportFilename: 'slidev-exported.pdf'
# Syntaxhervorheber, entweder 'prism' oder 'shiki'
=======
# filename of the export file
exportFilename: 'slidev-exported'
# syntax highlighter, can be 'prism' or 'shiki'
>>>>>>> a9706e023e005538c02c8ba9f36d03876f65dacb
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
