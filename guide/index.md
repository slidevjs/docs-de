# Erste Schritte

## Überblick

Slidev <sup>(slide + dev, `/slʌɪdɪv/`)</sup> ist ein Web-basiertes Tool zum Erstellen und Präsentieren von Präsentationen. Slidev wurde für Entwickler entwickelt und setzt den Fokus auf das Verfassen von Inhalten in Markdown, während HTML und leistungsfähige Vue Komponenten pixelgenaue Designs und Layouts mit eingebetteten interaktiven Demos für deine Präsentation liefern.

Slidev verwendet eine funktionsreiche Markdown Datei um schöne Folien mit sofortigem Wiederladeerlebnis und vielen anderen Integrationen, wie Live-Coding, PDF-Export oder Präsentationsaufzeichnung zu generieren. Da Slidev über Web-Technologien läuft ist so gut wie alles möglich - die Möglichkeiten sind endlos.

Weitere Informationen über den Hintergrund von Slidev sind im [Warum Slidev](/guide/why) Abschnitt zu finden.

### Funktionen

- 📝 [**Markdown-basiert**](/guide/syntax.html) - benutze deinen Lieblingseditor und Arbeitsablauf
- 🧑‍💻 [**Entwickler freundlich**](/guide/syntax.html#code-blocks) - integrierte Syntax Hervorhebung, live Coding, etc.
- 🎨 [**Anpassbarer Stil**](/themes/gallery.html) - Themen können geteilt und via npm packages genutzt werden
- 🌈 [**Stylish**](/guide/syntax.html#embedded-styles) - [Windi CSS](https://windicss.org/) oder [UnoCSS](https://github.com/unocss/unocss) on-demand utilities und einfach zu benutzende, eingebttete Stylesheets
- 🤹 [**Interaktiv**](/custom/directory-structure.html#components) - eigene Vue Komponenten
- 🎙 [**Moderatoren Modus**](/guide/presenter-mode.html) - nutze ein anderes Fenster oder deine Handy um deine Präsentation zu steuern
- 🎨 [**Drawing**](/guide/drawing.html) - draw and annotate on your slides
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - integrierte Unterstützung für mathematische LaTeX Gleichungen
- 📰 [**Diagramme**](/guide/syntax.html#diagrams) - erstelle Diagramme mit Beschriftungen
- 🌟 [**Icons**](/guide/syntax.html#icons) - direkter Zugriff auf Icons von jedem Iconset
- 💻 [**Editors**](/guide/editors.html) - integrierter Editor, oder [extension für VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Aufzeichnungen**](/guide/recording.html) - integrierte Aufnahme und Kameraansicht
- 📤 [**Portabel**](/guide/exporting.html) - exportiere in PDF, PNG oder hostbare SPA
- ⚡️ [**Blitzschnell**](https://vitejs.dev) - sofortiges Nachladen durch [Vite](https://vitejs.dev)
- 🛠 [**Hackbar**](/custom/config-vite.html) - nutze Vite plugins, Vue Komponenten, oder ein beliebiges npm package

### Tech-Stack

Slidev wird durch die Kombination dieser Tools und Technologien ermöglicht:

- [Vite](https://vitejs.dev) - Ein extrem schnelles Frontend-Tool
- [Vue 3](https://v3.vuejs.org/) powered [Markdown](https://daringfireball.net/projects/markdown/syntax) - Konzentriere dich auf den Inhalt, während die Power von HTML und Vue Komponenten immer an deiner Seite ist
- [Windi CSS](https://github.com/windicss/windicss) oder [UnoCSS](https://github.com/unocss/unocss) - On-Demand Utility-First CSS Framework, style deine Folien mit einer Lichtigkeit
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - Erstlassige Code-Snippet-Unterstützung mit Live-Coding Fähigkeit
- [RecordRTC](https://recordrtc.org) - Integrierte Aufnahmeunterstützung mit Kameraansicht
- [VueUse](https://vueuse.org) Familie - [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), etc.
- [Iconify](https://iconify.design/) - Iconset Sammlung.
- [Drauu](https://github.com/antfu/drauu) - Drawing and annotations support
- [KaTeX](https://katex.org/) - LaTeX Formeln rendern.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Textbasierte Diagramme.

<br>

### Die 1. Präsentation

#### Online ausprobieren

[sli.dev/new](https://sli.dev/new)

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://sli.dev/new)

#### Lokal erstellen

Mit NPM:

```bash
$ npm init slidev
```

Mit Yarn:

```bash
$ yarn create slidev
```

<<<<<<< HEAD
Folge den Anweisungen und beginne mit dem Erstellen der Folien. Lies dir die [Syntaxanleitung](/guide/syntax) für mehr Informationen über den Syntax durch.
=======
With pnpm:

```bash
$ pnpm create slidev
```

Follow the prompts and start making your slides now! For more details about the markdown syntax, read through the [syntax guide](/guide/syntax).
>>>>>>> 1317cbcaae63868c5cfbb66bcf4560be7f9c5fbf

### Command Line Interface

In einem Projekt, wo Slidev installiert ist, kann Slidev über den `slidev` Befehl in den npm Skripten verwendet werden.

```json
{
  "scripts": {
    "dev": "slidev", // start dev server
    "build": "slidev build", // build for production SPA
    "export": "slidev export" // export slides to pdf
  }
}
```

Andernfalls kann Slidev mit [`npx`](https://www.npmjs.com/package/npx) verwendet werden.

```bash
$ npx slidev
```

Führe `slidev --help` aus, um alle verfügbaren Optionen zu erhalten.

### Markdown Syntax

Slidev liest die `slides.md` Datei in deinem Projektstamm und wandelt sie in eine Präsentation um. Bei Änderungen wird deine Präsentation sofort aktualisiert. Ein Beispiel:

```md
# Slidev

Hallo Welt

---

# Seite 2

Codeblöcke zum direkten hervorheben verwenden

//`ts console.log('Hallo, Welt!') //`

---

# Seite 3
```

Erfahre mehr über [Slidev's Markdown Syntax](/guide/syntax).
