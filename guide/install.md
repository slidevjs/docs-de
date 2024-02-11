# Installation

## Starter Vorlage

<<<<<<< HEAD
> Slidev erfordert [**Node.js >=14.0**](https://nodejs.org/)
=======
> Slidev requires [**Node.js >=18.0**](https://nodejs.org/)
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02

Der beste Weg, um loszulegen, ist mit unserer offiziellen Starter Vorlage.

<<<<<<< HEAD
Mit NPM:
=======
::: code-group
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02

```bash [npm]
npm init slidev@latest
```

<<<<<<< HEAD
Mit Yarn:

```bash
$ yarn create slidev
```

=======
```bash [yarn]
yarn create slidev
```

```bash [pnpm]
pnpm create slidev
```

:::

Follow the prompts and it will open up the slideshow at `http://localhost:3030/` automatically for you.
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02

Folge den Anweisungen und die Präsentation öffnet sich auf `http://localhost:3030/` automatisch.

Die Vorlage beinhaltet eine grundlegende Einrichtung und eine kleine Demo mit einer Anleitung für die ersten Schritte mit Slidev.

## Manuell installieren

Wenn man Slidev trotzdem lieber manuell installieren oder mit bereits existierenden Projekten integrieren möchte, kann man auch folgendes tun:

```bash
npm install @slidev/cli @slidev/theme-default
```
```bash
touch slides.md
```
```bash
npx slidev
```

<<<<<<< HEAD
> Bitte beachte, dass wir [pnpm](https://pnpm.io) nutzen. [Shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist) muss aktiviert sein, damit alles problemfrei funktioniert:
>
> ```bash
> echo 'shamefully-hoist=true' >> .npmrc
> ```

## Global installieren
=======
## Install Globally
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02

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
    tangramor/slidev:latest
```

<<<<<<< HEAD
Wenn dein Projektordner leer ist, wird eine `slides.md` Vorlage und andere benötigte Dateien generiert und ein Server auf dem Port `3030` gestartet.
=======
If your work folder is empty, it will generate a template `slides.md` and other related files under your work folder, and launch the server on port `3030`.
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02

Jetzt kannst du deine Präsentation hier finden: `http://localhost:3030/`

<<<<<<< HEAD
### Baue ein deploy-bares Image

Oder du kreierst dein eigenes Projekt in einem Docker Image mit einer Dockerfile:
=======
### Build deployable image

Or you can create your own slidev project to a docker image with Dockerfile:
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev

```

Baue das Image: `docker build -t meinePraesentation .`

Und Starte den Container: `docker run --name praesentation --rm --user node -p 3030:3030 meinePraesentation`

Nun findest du deine Präsentation unter `http://localhost:3030/`

<<<<<<< HEAD

### Baue eine hostbare SPA (Single Page Application)
=======
### Build hostable SPA (Single Page Application)
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02

Führe den Befehl `docker exec -i slidev npx slidev build` an einem Container aus, in dem  `slidev` läuft. Er wird die statischen HTML Dateien und den `dist`Ordner generieren,

<<<<<<< HEAD

#### Hosten auf Github Pages

Du kannst den `dist` Ordner als eine statische Webseite mit [Github Pages](https://tangramor.github.io/slidev_docker/) or Gitlab Pages hosten. 
=======
#### Host on Github Pages

You can host `dist` in a static web site such as [Github Pages](https://tangramor.github.io/slidev_docker/) or Gitlab Pages.
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02

Weil der Github Pages URL eventuell einen Unterordner enthält, muss die generierte `index.html` angepasst werden. Entweder änderst du `href="/assets/xxx` zu `href="./assets/xxx` oder du übergibst eine `--base=/<subfolder>/` Option dem Build-Befehl, zum Beispiel: `docker exec -i slidev npx slidev build --base=/slidev_docker/`.

Damit der Jekyll Bauprozess übersprungen wird, musst du eine leere `.nojekyll` Datei erstellen.

<<<<<<< HEAD
#### Mit Docker Hosten

Man kann die Webseite auch selber über Docker hosten:
=======
#### Host by docker

You can also host it by yourself with docker:
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02

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


Bei [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) findest du mehr Informationen.

## Befehlszeilenschnittstelle (CLI)

`@slidev/cli` stellt ein paar Befehle bereit, die mit `npx slidev ...` oder durch Hinzufügen von Skripten in der `package.json` verwenden werden können:

```json
{
  "script": {
    "dev": "slidev"
  }
}
```

In diesem Fall ist man in der Lage `npm run dev` auszuführen.

Man kann Optionen beliebigen Befehlen anfügen:

* Boolesche Optionen sind `true`, wenn sie vorhanden sind, ansonsten `false` (Beispiel: `slidev --open`)
* einige Optionen können Werte haben, die direkt nach der Option oder durch Verwendung eines `=` hinzugefügt werden können (Beispiel: `slidev --port 8080` oder `slidev --port=8080`)


Falls npm scripts verwendet werden, vergesse nicht `--` hinter dem npm Befehl einzugeben:
```bash
npm run slidev -- --open
```

### `slidev [entry]`

Starte einen lokalen Slidev Server.

* `[entry]` (`string`, default: `slides.md`): Pfad zur Einstiegsdatei der Präsentation.

Optionen:

* `--port`, `-p` (`number`, default: `3030`): Port
* `--open`, `-o` (`boolean`, default: `false`): ob es im Browser geöffnet werden soll
* `--remote [password]` (`string`): mache die Präsentation remote erreichbar, wenn ein Wert übergeben wird, ist der Präsentatormodus privat und nur zugänglich, wenn das angegebene Kennwort im URL-Parameter `password` übergeben wird.
* `--log` (`'error', 'warn', 'info', 'silent'`, default: `'warn'`): Log level.
* `--force`, `-f` (`boolean`, default `false`): ignoriere Caches und baue die ganze Präsentation neu
* `--theme`, `-t` (`string`): überschreibe das Theme

### `slidev build [entry]`

Baue eine hostfähige SPA.

* `[entry]` (`string`, default: `slides.md`): Pfad zur Einstiegsdatei der Präsentation.

Optionen:

* `--watch`, `-w` (`boolean`, default: `false`): baue die SPA neu, wenn es Änderungen in den Dateien gibt
* `--out`, `-o` (`string`, default: `dist`): Ausgabeverzeichnis.
* `--base` (`string`, default: `/`): Basis URL (see https://cli.vuejs.org/config/#publicpath)
* `--download` (`boolean`, default: `false`): ermögliche den Download der Folien als PDF in der SPA
* `--theme`, `-t` (`string`): überschreibe das Theme

### `slidev export [entry]`

Exportiere die Präsentation als PDF (oder ein anderes Format).

* `[entry]` (`string`, default: `slides.md`): Pfad zur Einstiegsdatei der Präsentation.

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
* `--output` (`string`, default: use `exportFilename` (see https://sli.dev/custom/#frontmatter-configures) or use `[entry]-export`): path to the output.
* `--format` (`'pdf', 'png', 'md'`, default: `'pdf'`): output format.
* `--timeout` (`number`, default: `30000`): timeout for rendering the print page (see https://playwright.dev/docs/api/class-page#page-goto).
* `--range` (`string`): page ranges to export (example: `'1,4-5,6'`).
* `--dark` (`boolean`, default: `false`): export as dark theme.
* `--with-clicks`, `-c` (`boolean`, default: `false`): export pages for every clicks (see https://sli.dev/guide/animations.html#click-animations).
* `--theme`, `-t` (`string`): override theme.
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02

### `slidev format [entry]`

Formatieren die Markdown Datei.

* `[entry]` (`string`, default: `slides.md`): Pfad zur Einstiegsdatei der Präsentation.

### `slidev theme [subcommand]`

Themenbezogene Operationen

Unterbefehle:

* `eject [entry]`: Aktuelles Thema in das lokale Dateisystem auswerfen
  * `[entry]` (`string`, default: `slides.md`): Pfad zur Einstiegsdatei der Präsentation.
  * Optionen:
    * `--dir` (`string`, default: `theme`): Ausgabeverzeichnis
    * `--theme`, `-t` (`string`): überschreibe das Theme
