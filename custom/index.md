# Anpassungen

Slidev ist vollständig anpassbar, vom Styling bis zur Tools-konfiguration. Slidev ermöglicht darunter liegende Tools zu konfigurieren ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), etc.)

## Frontmatter Konfigurationen

Slidev kann im Frontmatterblock der ersten Folie konfiguriert werden. Folgende Liste zeigt die Standartwerte:

```yaml
---
# themen-id oder package name
theme: 'default'
# Titel der Folie (wird automatisch aus der ersten Überschrift abgeleitet, wenn nicht angegeben)
title: ''
# titleTemplate für die Webseite, `%s` wird mit dem Folientitel ersetzt
titleTemplate: '%s - Slidev'

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
routerMode: 'history'
# Seitenverhältnis der Folien
aspectRatio: '16/9'
# tatsächliche Breite des Canvases (Einheit in px)
canvasWidth: 980

# favicon: Kann ein lokaler Pfad oder eine URL sein.
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'

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

# Informationen für die Folien (Markdown string möglich)
info: |
  ## Slidev
  My first [Slidev](http://sli.dev/) presentations!
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
