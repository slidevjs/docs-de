# Exportieren

## Folien

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

#### Animationsschritte exportieren

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

Mehr Infos: [Statisches Hosting](/guide/hosting).

## Moderator Notizen

> Verfügbar seit v0.36.8

Es können auch nur die Notizen (der letzte Kommentarblock jeder Folien) in ein Textdokument (PDF) exportiert werden.

```bash
$ slidev export-notes
```
