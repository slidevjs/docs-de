# Installation

## Starter Vorlage

> Slidev erfordert [**Node.js >=14.0**](https://nodejs.org/)

Der beste Weg, um loszulegen, ist mit unserer offiziellen Starter Vorlage.

Mit NPM:

```bash
$ npm init slidev@latest
```

Mit Yarn:

```bash
$ yarn create slidev
```

<<<<<<< HEAD
=======
Follow the prompts and it will open up the slideshow at `http://localhost:3030/` automatically for you.
>>>>>>> e9156da7e3b01f48ac2a90552936da50c797d88d

Folge den Anweisungen und die Präsentation öffnet sich auf http://localhost:3030/ automatisch.

Die Vorlage beinhaltet eine grundlegende Einrichtung und eine kleine Demo mit einer Anleitung für die ersten Schritte mit Slidev.

## Manuell installieren

Wenn man Slidev trotzdem lieber manuell installieren oder mit bereits existierenden Projekten integrieren möchte, kann man auch folgendes tun:

```bash
$ npm install @slidev/cli @slidev/theme-default
```
```bash
$ touch slides.md
```
```bash
$ npx slidev
```

> Bitte beachte, dass wir [pnpm](https://pnpm.io) nutzen. [Shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist) muss aktiviert sein, damit alles problemfrei funktioniert:
>
> ```bash
> echo 'shamefully-hoist=true' >> .npmrc
> ```

## Global installieren

> Verfügbar seit v0.14

Slidev kann mit folgendem Befehl auch global installiert werden:

```bash
$ npm i -g @slidev/cli
```

Danach kann `slidev` überall genutzt werden ohne, dass jedes mal erst ein Projekt erstellt werden muss.

```bash
$ slidev
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

Wenn dein Projektordner leer ist, wird eine `slides.md` Vorlage und andere benötigte Dateien generiert und ein Server auf dem Port `3030` gestartet.

<<<<<<< HEAD
Jetzt kannst du deine Präsentation hier finden: http://localhost:3030/
=======
You can access your slides from `http://localhost:3030/`
>>>>>>> e9156da7e3b01f48ac2a90552936da50c797d88d

### Baue ein deploy-bares Image

Oder du kreierst dein eigenes Projekt in einem Docker Image mit einer Dockerfile:

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev

```

Baue das Image: `docker build -t meinePraesentation .`

Und Starte den Container: `docker run --name praesentation --rm --user node -p 3030:3030 meinePraesentation`

<<<<<<< HEAD
Nun findest du deine Präsentation unter http://localhost:3030/
=======
You can visit your slides from `http://localhost:3030/`
>>>>>>> e9156da7e3b01f48ac2a90552936da50c797d88d


### Baue eine hostbare SPA (Single Page Application)

Führe den Befehl `docker exec -i slidev npx slidev build` an einem Container aus, in dem  `slidev` läuft. Er wird die statischen HTML Dateien und den `dist`Ordner generieren,


#### Hosten auf Github Pages

Du kannst den `dist` Ordner als eine statische Webseite mit [Github Pages](https://tangramor.github.io/slidev_docker/) or Gitlab Pages hosten. 

Weil der Github Pages URL eventuell einen Unterordner enthält, muss die generierte `index.html` angepasst werden. Entweder änderst du `href="/assets/xxx` zu `href="./assets/xxx` oder du übergibst eine `--base=/<subfolder>/` Option dem Build-Befehl, zum Beispiel: `docker exec -i slidev npx slidev build --base=/slidev_docker/`.

Damit der Jekyll Bauprozess übersprungen wird, musst du eine leere `.nojekyll` Datei erstellen.

#### Mit Docker Hosten

Man kann die Webseite auch selber über Docker hosten:

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

Bei [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) findest du mehr Informationen.
=======
Refer to the [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) for more details.

## Command Line Interface (CLI)

`@slidev/cli` Expose a few commands you can use with `npx slidev ...` or by adding scripts in your `package.json`:
```json
{
  "script": {
    "dev": "slidev"
  }
}
```

In that case you will be able to run `npm run dev`.

You can pass options to any commands:

* boolean option are `true` if they are present, false otherwise (example: `slidev --open`)
* some options can have values you can add just after the option or by using the `=` character (example: `slidev --port 8080` or `slidev --port=8080`)

If you use npm scripts, don't forget to add `--` after the npm command:
```bash
npm run slidev -- --open
```

### `slidev [entry]`

Start a local server for Slidev.

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

Options:

* `--port`, `-p` (`number`, default: `3030`): port number.
* `--open`, `-o` (`boolean`, default: `false`): open in browser.
* `--remote [password]` (`string`): listen to public host and enable remote control, if a value is passed then the presenter mode is private and only accessible by passing the given password in the URL query `password` parameter.
* `--log` (`'error', 'warn', 'info', 'silent'`, default: `'warn'`): Log level.
* `--force`, `-f` (`boolean`, default `false`): force the optimizer to ignore the cache and re-bundle.
* `--theme`, `-t` (`string`): override theme.

### `slidev build [entry]`

Build hostable SPA.

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

Options:

* `--watch`, `-w` (`boolean`, default: `false`): build watch.
* `--out`, `-o` (`string`, default: `dist`): output dir.
* `--base` (`string`, default: `/`): base URL (see https://cli.vuejs.org/config/#publicpath)
* `--download` (`boolean`, default: `false`): allow to download the slides as PDF inside the SPA.
* `--theme`, `-t` (`string`): override theme.

### `slidev export [entry]`

Export slides to PDF (or other format).

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

Options:

* `--output` (`string`, default: use `exportFilename` (see https://sli.dev/custom/#frontmatter-configures) or use `[entry]-export`): path to the output.
* `--base` (`'pdf', 'png', 'md'`, default: `'pdf'`): output format.
* `--timeout` (`number`, default: `30000`): timeout for rendering the print page (see https://playwright.dev/docs/api/class-page#page-goto).
* `--range` (`string`): page ranges to export (example: `'1,4-5,6'`).
* `--dark` (`boolean`, default: `false`): export as dark theme.
* `--with-clicks`, `-c` (`boolean`, default: `false`): export pages for every clicks (see https://sli.dev/guide/animations.html#click-animations).
* `--theme`, `-t` (`string`): override theme.

### `slidev format [entry]`

Format the markdown file.

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

### `slidev theme [subcommand]`

Theme related operations.

Subcommands:

* `eject [entry]`: Eject current theme into local file system
  * `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.
  * Options:
    * `--dir` (`string`, default: `theme`): output dir.
    * `--theme`, `-t` (`string`): override theme.
>>>>>>> e9156da7e3b01f48ac2a90552936da50c797d88d
