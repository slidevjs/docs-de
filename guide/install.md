# Installation

## Starter Vorlage

<<<<<<< HEAD
> Slidev erfordert [**Node.js >=14.0**](https://nodejs.org/)

Der beste Weg, um loszulegen, ist mit unserer offiziellen Starter Vorlage.

Mit NPM:
=======
> Slidev requires [**Node.js >=18.0**](https://nodejs.org/)

The best way to get started is by using our official starter template:

::: code-group
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash [npm]
npm init slidev@latest
```

<<<<<<< HEAD
Mit Yarn:

```bash
$ yarn create slidev
```


Folge den Anweisungen und die Präsentation öffnet sich auf `http://localhost:3030/` automatisch.
=======
```bash [yarn]
yarn create slidev
```

```bash [pnpm]
pnpm create slidev
```

:::

Follow the prompts and it will open the slideshow at `http://localhost:3030/` automatically for you.

It also contains a basic setup along with a short demo with instructions on how to get started with Slidev.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

Die Vorlage beinhaltet eine grundlegende Einrichtung und eine kleine Demo mit einer Anleitung für die ersten Schritte mit Slidev.

<<<<<<< HEAD
## Manuell installieren

Wenn man Slidev trotzdem lieber manuell installieren oder mit bereits existierenden Projekten integrieren möchte, kann man auch folgendes tun:
=======
If you prefer to install Slidev manually or would like to integrate it into an existing project, you can do:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
npm install @slidev/cli @slidev/theme-default
```

<<<<<<< HEAD
> Bitte beachte, dass wir [pnpm](https://pnpm.io) nutzen. [Shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist) muss aktiviert sein, damit alles problemfrei funktioniert:
>
> ```bash
> echo 'shamefully-hoist=true' >> .npmrc
> ```
=======
```bash
touch slides.md
```

```bash
npx slidev
```
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Global installieren

> Verfügbar seit v0.14

Slidev kann mit folgendem Befehl auch global installiert werden:

```bash
npm i -g @slidev/cli
```

Danach kann `slidev` überall genutzt werden ohne, dass jedes mal erst ein Projekt erstellt werden muss.

```bash
npx slidev
```

Dieser Befehl versucht auch die lokale Version `@slidev/cli` zu nutzen, wenn sie im `node_modules` Ordner gefunden werden kann.

## Auf Docker installieren

Wenn ein schneller Weg benötigt wird, um Präsentationen auch auf Containern zu nutzen, kann das bereits fertige [Docker Image](https://hub.docker.com/r/tangramor/slidev) verwendet werden, welches von [tangramor](https://github.com/tangramor) gemaintained wird. Oder man baut sich sein eigenes Image.

Man muss nur folgenden Befehl im Projektordner ausführen:

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    -e NPM_MIRROR="https://registry.npmmirror.com" \
    tangramor/slidev:latest
```

<<<<<<< HEAD
Wenn dein Projektordner leer ist, wird eine `slides.md` Vorlage und andere benötigte Dateien generiert und ein Server auf dem Port `3030` gestartet.
=======
**_Note_**: You can use `NPM_MIRROR` to specify a npm mirror to speed up the installation process.

If your work folder is empty, it will generate a template `slides.md` and other related files under your work folder, and launch the server on port `3030`.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

Jetzt kannst du deine Präsentation hier finden: `http://localhost:3030/`

<<<<<<< HEAD
### Baue ein deploy-bares Image

Oder du kreierst dein eigenes Projekt in einem Docker Image mit einer Dockerfile:
=======
### Build deployable images

You can create your own slidev project as a docker image with Dockerfile:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev
```

Baue das Image: `docker build -t meinePraesentation .`

Und Starte den Container: `docker run --name praesentation --rm --user node -p 3030:3030 meinePraesentation`

Nun findest du deine Präsentation unter `http://localhost:3030/`

<<<<<<< HEAD

### Baue eine hostbare SPA (Single Page Application)

Führe den Befehl `docker exec -i slidev npx slidev build` an einem Container aus, in dem  `slidev` läuft. Er wird die statischen HTML Dateien und den `dist`Ordner generieren,

=======
### Build hostable SPA (Single Page Application)

Run `docker exec -i slidev npx slidev build` on the running container `slidev`. It will generate static HTML files under `dist` folder.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

#### Hosten auf Github Pages

<<<<<<< HEAD
Du kannst den `dist` Ordner als eine statische Webseite mit [Github Pages](https://tangramor.github.io/slidev_docker/) or Gitlab Pages hosten. 

Weil der Github Pages URL eventuell einen Unterordner enthält, muss die generierte `index.html` angepasst werden. Entweder änderst du `href="/assets/xxx` zu `href="./assets/xxx` oder du übergibst eine `--base=/<subfolder>/` Option dem Build-Befehl, zum Beispiel: `docker exec -i slidev npx slidev build --base=/slidev_docker/`.

Damit der Jekyll Bauprozess übersprungen wird, musst du eine leere `.nojekyll` Datei erstellen.

#### Mit Docker Hosten

Man kann die Webseite auch selber über Docker hosten:
=======
You can host `dist` as a static website via services such as [GitHub Pages](https://tangramor.github.io/slidev_docker/) or GitLab Pages.

Since in GitHub Pages the URL may contain subfolders, you may use `--base=/<subfolder>/` option during the build process, such as `docker exec -i slidev npx slidev build --base=/slidev_docker/`.

To avoid the Jekyll build process, you'll need to add an empty file `.nojekyll`.

#### Host via docker

You can also host Slidev yourself via docker:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```bash
docker run --name myslides --rm -p 80:80 -v ${PWD}/dist:/usr/share/nginx/html nginx:alpine
```

Oder baue ein statische Image mit der folgenden Dockerfile:

```Dockerfile
FROM nginx:alpine

COPY dist /usr/share/nginx/html
```

Baue das Docker Image: `docker build -t mystaticppt .`

Und starte de Container: `docker run --name myslides --rm -p 80:80 mystaticppt`

Deine Webseite findes du hier: http://localhost/

<<<<<<< HEAD
=======
Refer to [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) for more details.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

Bei [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) findest du mehr Informationen.

## Befehlszeilenschnittstelle (CLI)

`@slidev/cli` stellt ein paar Befehle bereit, die mit `npx slidev ...` oder durch Hinzufügen von Skripten in der `package.json` verwenden werden können:

<<<<<<< HEAD
=======
`@slidev/cli` exposes a few commands you can use with `npx slidev ...` or by adding scripts in your `package.json`:

>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
```json
{
  "script": {
    "dev": "slidev"
  }
}
```

In diesem Fall ist man in der Lage `npm run dev` auszuführen.

Man kann Optionen beliebigen Befehlen anfügen:

<<<<<<< HEAD
* Boolesche Optionen sind `true`, wenn sie vorhanden sind, ansonsten `false` (Beispiel: `slidev --open`)
* einige Optionen können Werte haben, die direkt nach der Option oder durch Verwendung eines `=` hinzugefügt werden können (Beispiel: `slidev --port 8080` oder `slidev --port=8080`)


Falls npm scripts verwendet werden, vergesse nicht `--` hinter dem npm Befehl einzugeben:
=======
- boolean option are `true` if they are present, false otherwise (example: `slidev --open`)
- some options can have values you can add just after the option or by using the `=` character (example: `slidev --port 8080` or `slidev --port=8080`)

If you use npm scripts, don't forget to add `--` after the npm command:

>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
```bash
npm run slidev -- --open
```

### `slidev [entry]`

Starte einen lokalen Slidev Server.

<<<<<<< HEAD
* `[entry]` (`string`, default: `slides.md`): Pfad zur Einstiegsdatei der Präsentation.
=======
- `[entry]` (`string`, default: `slides.md`): path to the markdown file containing your slides.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

Optionen:

<<<<<<< HEAD
* `--port`, `-p` (`number`, default: `3030`): Port
* `--open`, `-o` (`boolean`, default: `false`): ob es im Browser geöffnet werden soll
* `--remote [password]` (`string`): mache die Präsentation remote erreichbar, wenn ein Wert übergeben wird, ist der Präsentatormodus privat und nur zugänglich, wenn das angegebene Kennwort im URL-Parameter `password` übergeben wird.
* `--log` (`'error', 'warn', 'info', 'silent'`, default: `'warn'`): Log level.
* `--force`, `-f` (`boolean`, default `false`): ignoriere Caches und baue die ganze Präsentation neu
* `--theme`, `-t` (`string`): überschreibe das Theme

### `slidev build [entry]`

Baue eine hostfähige SPA.

* `[entry]` (`string`, default: `slides.md`): Pfad zur Einstiegsdatei der Präsentation.
=======
- `--port`, `-p` (`number`, default: `3030`): port number.
- `--open`, `-o` (`boolean`, default: `false`): open in browser.
- `--remote [password]` (`string`): listen to public host and enable remote control, if a value is passed then the presenter mode is private and only accessible by passing the given password in the URL query `password` parameter.
- `--bind` (`string`, default: `0.0.0.0`): specify which IP addresses the server should listen on in the remote mode.
- `--log` (`'error', 'warn', 'info', 'silent'`, default: `'warn'`): Log level.
- `--force`, `-f` (`boolean`, default: `false`): force the optimizer to ignore the cache and re-bundle.
- `--theme`, `-t` (`string`): override theme.

### `slidev build [entry]`

Build a hostable SPA.

- `[entry]` (`string`, default: `slides.md`): path to the slides markdown file.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

Optionen:

<<<<<<< HEAD
* `--watch`, `-w` (`boolean`, default: `false`): baue die SPA neu, wenn es Änderungen in den Dateien gibt
* `--out`, `-o` (`string`, default: `dist`): Ausgabeverzeichnis.
* `--base` (`string`, default: `/`): Basis URL (see https://cli.vuejs.org/config/#publicpath)
* `--download` (`boolean`, default: `false`): ermögliche den Download der Folien als PDF in der SPA
* `--theme`, `-t` (`string`): überschreibe das Theme

### `slidev export [entry]`

Exportiere die Präsentation als PDF (oder ein anderes Format).

* `[entry]` (`string`, default: `slides.md`): Pfad zur Einstiegsdatei der Präsentation.
=======
- `--out`, `-o` (`string`, default: `dist`): output dir.
- `--base` (`string`, default: `/`): base URL (see https://cli.vuejs.org/config/#publicpath)
- `--download` (`boolean`, default: `false`): allow the download of the slides as a PDF inside the SPA.
- `--theme`, `-t` (`string`): override theme.

### `slidev export [entry]`

Export slides to PDF (or other format). See [Exporting](/guide/exporting.html) for more details.

- `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

Optionen:

<<<<<<< HEAD
* `--output` (`string`, default: nutzt `exportFilename` (siehe https://sli.dev/custom/#frontmatter-configures) oder nutze `[entry]-export`): Pfad zur exportierten Präsentation
* `--base` (`'pdf', 'png', 'md'`, default: `'pdf'`): Exportformat
* `--timeout` (`number`, default: `30000`): Timeout für die Darstellung der Druckseite (see https://playwright.dev/docs/api/class-page#page-goto).
* `--range` (`string`): zu exportierende Seitenbereiche (Beispiel: `'1,4-5,6'`).
* `--dark` (`boolean`, default: `false`): exportiere im Dunklen Theme
* `--with-clicks`, `-c` (`boolean`, default: `false`): Seiten für alle Klicks exportieren (see https://sli.dev/guide/animations.html#click-animations).
* `--theme`, `-t` (`string`): überschreibe das Theme
=======
- `--output` (`string`, default: use `exportFilename` (see https://sli.dev/custom/#frontmatter-configures) or use `[entry]-export`): path to the output.
- `--format` (`'pdf', 'png', 'pptx', 'md'`, default: `'pdf'`): output format.
- `--timeout` (`number`, default: `30000`): timeout for rendering the print page (see https://playwright.dev/docs/api/class-page#page-goto).
- `--range` (`string`): page ranges to export (example: `'1,4-5,6'`).
- `--dark` (`boolean`, default: `false`): export as dark theme.
- `--with-clicks`, `-c` (`boolean`, default: `false`): export pages for every clicks (see https://sli.dev/guide/animations.html#click-animations).
- `--theme`, `-t` (`string`): override theme.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

### `slidev format [entry]`

Formatieren die Markdown Datei.

<<<<<<< HEAD
* `[entry]` (`string`, default: `slides.md`): Pfad zur Einstiegsdatei der Präsentation.
=======
- `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

### `slidev theme [subcommand]`

Themenbezogene Operationen

Unterbefehle:

<<<<<<< HEAD
* `eject [entry]`: Aktuelles Thema in das lokale Dateisystem auswerfen
  * `[entry]` (`string`, default: `slides.md`): Pfad zur Einstiegsdatei der Präsentation.
  * Optionen:
    * `--dir` (`string`, default: `theme`): Ausgabeverzeichnis
    * `--theme`, `-t` (`string`): überschreibe das Theme
=======
- `eject [entry]`: Eject current theme into local file system
  - `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.
  - Options:
    - `--dir` (`string`, default: `theme`): output dir.
    - `--theme`, `-t` (`string`): override theme.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
