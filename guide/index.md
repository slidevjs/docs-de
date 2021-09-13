# Erste Schritte

## Überblick

Slidev <sup>(slide + dev, `/slʌɪdɪv/`)</sup> ist ein Web-basiertes Tool zum Erstellen und Präsentieren von Präsentationen. Slidev wurde für Entwickler entwickelt und setzt den Fokus auf das Verfassen von Inhalten in Markdown, während HTML und leistungsfähige Vue Komponenten pixelgenaue Designs und Layouts mit eingebetteten interaktiven Demos für deine Präsentation liefern.

Slidev verwendet eine funktionsreiche Markdown Datei um schöne Folien mit sofortigem Wiederladeerlebnis und vielen anderen Integrationen, wie Live-Coding, PDF-Export oder Präsentationsaufzeichnung zu generieren. Da Slidev über Web-Technologien läuft ist so gut wie alles möglich - die Möglichkeiten sind endlos.

Weitere Informationen über den Hintergrund von Slidev sind im [Warum Slidev](/guide/why) Abschnitt zu finden.

### Funktionen

<<<<<<< HEAD
- 📝 [**Markdown-basiert**](/guide/syntax.html) - benutze deinen Lieblingseditor und Arbeitsablauf
- 🧑‍💻 [**Entwickler freundlich**](/guide/syntax.html#code-blocks) - integrierte Syntax Hervorhebung, live Coding, etc.
- 🎨 [**Anpassbarer Stil**](/themes/gallery.html) - Themen können geteilt und via npm packages genutzt werden
- 🌈 [**Stylish**](/guide/syntax.html#embedded-styles) - [Windi CSS](https://windicss.org/) on-demand utilities und einfach zu benutzende, eingebttete Stylesheets
- 🤹 [**Interaktiv**](/custom/directory-structure.html#components) - eigene Vue Komponenten
- 🎙 [**Moderatoren Modus**](/guide/presenter-mode.html) - nutze ein anderes Fenster oder deine Handy um deine Präsentation zu steuern
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - integrierte Unterstützung für mathematische LaTeX Gleichungen
- 📰 [**Diagramme**](/guide/syntax.html#diagrams) - erstelle Diagramme mit Beschriftungen
- 🌟 [**Icons**](/guide/syntax.html#icons) - direkter Zugriff auf Icons von jedem Iconset
- 💻 [**Editors**](/guide/editors.html) - integrierter Editor, oder [extension für VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Aufzeichnungen**](/guide/recording.html) - integrierte Aufnahme und Kameraansicht
- 📤 [**Portabel**](/guide/exporting.html) - exportiere in PDF, PNG oder hostbare SPA
- ⚡️ [**Blitzschnell**](https://vitejs.dev) - sofortiges Nachladen durch [Vite](https://vitejs.dev)
- 🛠 [**Hackbar**](/custom/config-vite.html) - nutze Vite plugins, Vue Komponenten, oder ein beliebiges npm package
=======
- 📝 [**Markdown-based**](/guide/syntax.html) - use your favorite editors and workflow
- 🧑‍💻 [**Developer Friendly**](/guide/syntax.html#code-blocks) - built-in syntax highlighting, live coding, etc.
- 🎨 [**Themable**](/themes/gallery.html) - theme can be shared and used with npm packages
- 🌈 [**Stylish**](/guide/syntax.html#embedded-styles) - [Windi CSS](https://windicss.org/) on-demand utilities, easy-to-use embedded stylesheets
- 🤹 [**Interactive**](/custom/directory-structure.html#components) - embedding Vue components seamlessly
- 🎙 [**Presenter Mode**](/guide/presenter-mode.html) - use another window, or even your phone to control your slides
- 🎨 [**Drawing**](/guide/drawing.html) - draw and annotate on your slides
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - built-in LaTeX math equations support
- 📰 [**Diagrams**](/guide/syntax.html#diagrams) - creates diagrams with textual descriptions 
- 🌟 [**Icons**](/guide/syntax.html#icons) - Access to icons from any iconset directly
- 💻 [**Editors**](/guide/editors.html) - integrated editor, or [extension for VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Recording**](/guide/recording.html) - built-in recording and camera view
- 📤 [**Portable**](/guide/exporting.html) - export into PDF, PNGs, or even a hostable SPA
- ⚡️ [**Fast**](https://vitejs.dev) - instant reloading powered by [Vite](https://vitejs.dev)
- 🛠 [**Hackable**](/custom/config-vite.html) - using Vite plugins, Vue components, or any npm packages
>>>>>>> 565eb6709aa69ec36842f22c104f90ef741d9440

### Tech-Stack

Slidev wird durch die Kombination dieser Tools und Technologien ermöglicht: 

<<<<<<< HEAD
- [Vite](https://vitejs.dev) - Ein extrem schnelles Frontend-Tool
- [Vue 3](https://v3.vuejs.org/) powered [Markdown](https://daringfireball.net/projects/markdown/syntax) - Konzentriere dich auf den Inhalt, während die Power von HTML und Vue Komponenten immer an deiner Seite ist
- [Windi CSS](https://github.com/windicss/windicss) - On-Demand Utility-First CSS Framework, style deine Folien mit einer Lichtigkeit
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - Erstlassige Code-Snippet-Unterstützung mit Live-Coding Fähigkeit
- [RecordRTC](https://recordrtc.org) - Integrierte Aufnahmeunterstützung mit Kameraansicht
- [VueUse](https://vueuse.org) Familie -  [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), etc.
- [Iconify](https://iconify.design/) - Iconset Sammlung.
- [KaTeX](https://katex.org/) - LaTeX Formeln rendern.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Textbasierte Diagramme.
=======
- [Vite](https://vitejs.dev) - An extremely fast frontend tooling
- [Vue 3](https://v3.vuejs.org/) powered [Markdown](https://daringfireball.net/projects/markdown/syntax) - Focus on the content while having the power of HTML and Vue components whenever needed
- [Windi CSS](https://github.com/windicss/windicss) - On-demand utility-first CSS framework, style your slides at ease
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - First-class code snippets support with live coding capability
- [RecordRTC](https://recordrtc.org) - Built-in recording and camera view
- [VueUse](https://vueuse.org) family -  [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), etc.
- [Iconify](https://iconify.design/) - Iconsets collection.
- [Drauu](https://github.com/antfu/drauu) - Drawing and annotations support
- [KaTeX](https://katex.org/) - LaTeX math rendering.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Textual Diagrams.
>>>>>>> 565eb6709aa69ec36842f22c104f90ef741d9440

### Die 1. Präsentation

Mit NPM:

```bash
$ npm init slidev
```

Mit Yarn:

```bash
$ yarn create slidev
```

Folge den Anweisungen und beginne mit dem Erstellen der Folien. Lies dir die [Syntaxanleitung](/guide/syntax) für mehr Informationen über den Syntax durch.

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

~~~md
# Slidev

Hallo Welt

---

# Seite 2

Codeblöcke zum direkten hervorheben verwenden

//```ts
console.log('Hallo, Welt!')
//```

---

# Seite 3
~~~

Erfahre mehr über [Slidev's Markdown Syntax](/guide/syntax).
