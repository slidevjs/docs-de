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

<<<<<<< HEAD
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
=======
### PNGs and Markdown
>>>>>>> 145fc07cd89b05477358f72609931fdf9c7d68cf

Wenn die Option `--format png` überreicht wird, exportiert Slidev PNG Bilder für jeden Folie der Präsentation anstatt einer PDF.

```bash
$ slidev export --format png
```

You can also compile a markdown file composed of compiled png using `--format md`.

<<<<<<< HEAD
Mehr Infos: [Statisches Hosting](/guide/hosting).
=======
```bash
$ slidev export --format md
```

### Dark mode

In case you want to export your slides using the dark version of the theme, use the `--dark` option:

```bash
$ slidev export --dark
```

### Export Clicks Steps

> Available since v0.21

By default, Slidev exports one page per slide with clicks animations disabled. If you want export slides with multiple steps into multiple pages, pass the `--with-clicks` option.

```bash
$ slidev export --with-clicks
```

### Slide range

You can also specify a range of slides to export with the `--range` option.

```bash
$ slidev export --range 1,4-5,6
```

### PDF outline

> Available since v0.36.10

You can generate the PDF outline by passing the `--with-toc` option.

```bash
$ slidev export --with-toc
```

### Output filename

You can specify the output filename with the `--output` option.

```bash
$ slidev export --output my-pdf-export
```

Or in the frontmatter configuration:

```yaml
---
exportFilename: my-pdf-export
---
```

### Export a range of slides

By default, all slides in the presentation are exported. If you want to export a specific slide or a range of slides you can set the `--range` option and specify which slides you would like to export. 

```bash
$ slidev export --range 1,6-8,10
```

This option accepts both specific slide numbers and ranges.

The example above would export slides 1,6,7,8, and 10.


### Multiple entries

You can also export multiple slides at once.

```bash
$ slidev export slides1.md slides1.md
```

Or

```bash
$ slidev export *.md
```

In this case, each input file will generate its own PDf file.
>>>>>>> 145fc07cd89b05477358f72609931fdf9c7d68cf

## Moderator Notizen

> Verfügbar seit v0.36.8

Es können auch nur die Notizen (der letzte Kommentarblock jeder Folien) in ein Textdokument (PDF) exportiert werden.

```bash
$ slidev export-notes
```

This command also accept multiple entries like for the [export command](#multiple-entries)

## Single-Page Application (SPA)

See [Static Hosting](/guide/hosting).

## Troubleshooting

### Timeout

For big presentation you might want to increase the playwrigth timeout with `--timeout`

```bash
$ slidev export --timeout 60000
```

### Executable path

You can set the browser executable path for playwright using `--executable-path`

```bash
$ slidev export --executable-path [path_to_chromium]
```
