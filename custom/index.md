# Anpassungen

Slidev ist vollständig anpassbar, vom Styling bis zur Tools-konfiguration. Slidev ermöglicht darunter liegende Tools zu konfigurieren ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), etc.)

## Frontmatter Konfigurationen

Slidev kann im Frontmatterblock der ersten Folie konfiguriert werden. Folgende Liste zeigt die Standartwerte:

```yaml
---
# themen-id oder package name
theme: 'default'
# Titel der Folie (wird automatisch aus der ersten Überschrift abgeleited, wenn nicht angegeben)
title: ''
# titleTemplate für die Webseite, `%s` wird mit dem Folientitel ersetzt
titleTemplate: '%s - Slidev'

# erlaube das Herunterladen einer PDF aus der SPA, kann auch ein eigener URL sein
download: true
# Syntaxhervorheber, entweder 'prism' oder 'shiki'
highlighter: 'prism'
<<<<<<< HEAD
# Monaco-Editor aktivieren, standardmäßig nur dev
=======
# show line numbers in code blocks
lineNumbers: false
# enable monaco editor, default to dev only
>>>>>>> 7fcdfb6d7dee75f411c762b8d223645a5b35ab29
monaco: 'dev'

# Farbschema für die Folien erzwingen, kann 'auto', 'light' oder 'dark' sein
colorSchema: 'auto'
# Router-Modus für Vue-Router, entwedere "history" oder "hash"
routerMode: 'history'
# Seitenverhältnis der Folien
aspectRatio: '16/9'
# tatsächliche Breite des Canvases (Einheit in px)
canvasWidth: 980

# Schriften werden automatisch von Google Fonts importiert
# Erfahre mehr: https://sli.dev/custom/fonts
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

<<<<<<< HEAD
Weitere Infornationen sind in den [Typdefinitionen](https://github.com/slidevjs/slidev/blob/main/packages/types/src/types.ts#L29) zu finden.
=======
Check out the [type definitions](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) for more options.
>>>>>>> 7fcdfb6d7dee75f411c762b8d223645a5b35ab29

## Ordner Struktur

Slidev nutzt  Ordner-Struktur-Konvetionen, um die Konfigurationspberfläche minimal zu halten und Erweiterungen flexibel und intuitiv zu gestalten.

Siehe Abschnitt [Ordner Struktur](/custom/directory-structure).
## Tools Konfigurieren

- [Highlighters](/custom/highlighters)
- [Vue konfigurieren](/custom/config-vue)
- [Vite konfigurieren](/custom/config-vite)
- [Windi CSS konfigurieren](/custom/config-windicss)
- [Monaco konfigurieren](/custom/config-monaco)
- [KaTeX konfigurieren](/custom/config-katex)
- [Mermaid konfigurieren](/custom/config-mermaid)
