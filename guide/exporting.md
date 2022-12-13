# Exportieren

## Slides

### PDF

> Exportieren in PDF oder PNGs benötigt [Playwright](https://playwright.dev) zum rendern. Dafür muss [`playwright-chromium`](https://playwright.dev/docs/installation#download-single-browser-binary) installiert sein.
> Falls das exportiren in einer CI Umgebung passiert, kann der [playright CI Guide](https://playwright.dev/docs/ci) hilfreich sein.

Installiere `playwright-chromium`

```bash
$ npm i -D playwright-chromium
```

Jetzt kann die Präsentation in PDF mit folgenden Befehl exportiert werden:

```bash
$ slidev export
```

Nach ein paar Sekunden wird die fertige Präsentation unter `./slides-exports.pdf` erscheinen.

Falls du deine Folien mit der dunklen Version des Themes exportieren willst, kannst du die `--dark` option wählen:

```bash
$ slidev export --dark
```

<<<<<<< HEAD
### Animationsschritte exportieren
=======
#### Export Clicks Steps
>>>>>>> 276185826c2f774c4c27838d374730dd54986752

> Verfügbar seit v0.21

Standardmäßig exportiert Slidev Präsentationen mit einer Seite pro Folie und deaktivierten Klick-Animationen. Wenn die Präsentation mit mehreren Schritten pro Folien exportiert werden soll, muss die `--with-clicks` Option übergeben werden.

```bash
$ slidev export --with-clicks
```

### PNGs

Wenn die Option `--format png` überreicht wird, exportiert Slidev PNG Bilder für jeden Folie der Präsentation anstatt einer PDF.

```bash
$ slidev export --format png
```

### Single-Page Application (SPA)

<<<<<<< HEAD
Slidev Präsentationen können auch in eine selbst-hostbare SPA exportiert werden:

```bash
$ slidev build
```

Die generierte Applikation befindet sich unter `dist/` und kann auf [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), oder wo auch immer man will gehosted werden. Jetzt kann man die Präsentation mit der ganzen Welt in nur einem Link teilen.

### Basispfad

Wenn die SPA auf Unterouten gehosted werden soll, muss die Option `--base` mit einem Pfad überreicht werden:

```bash
$ slidev build --base /präsentationen/meine-coole-präsentation/
```

Mehr Details gibt es auf der [Vite Dokumentation](https://vitejs.dev/guide/build.html#public-base-path).

### Herunterladbare PDF bereitstellen

Man kann eine herunterladbare PDF für die Zuschauer der SPA bereitstellen. Mit der folgenden konfiguration wird diese Funktion aktiviert:

```md
---
download: true
---
```

Jetzt generiert Slidev eine PDF mit der SPA und ein Herunterladen-Button erscheint in der SPA.

Man kann eine eigene URL zum herunterladen der PDF angeben. In diesem Fall wird das Generieren der PDF übersprungen.

```md
---
download: "https://meineseite.com/meine-präsentation.pdf"
---
```

### Beispiele

Hier sind ein paar Beispiele einer exportieren SPA:

- [Starter Vorlage](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) von [Anthony Fu](https://github.com/antfu)

Mehr Infos: [Statisches Hosting](/guide/hosting).
=======
See [Static Hosting](/guide/hosting).

## Presenter notes

> Available since v0.36.8

Export only the presenter notes (the last comment block for each slide) into a text document in PDF.

```bash
$ slidev export-notes
```
>>>>>>> 276185826c2f774c4c27838d374730dd54986752
