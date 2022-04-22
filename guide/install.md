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

Jetzt kannst du deine Präsentation hier finden: http://localhost:3030/

### Baue ein deploy-bares Image

Oder du kreierst dein eigenes Projekt in einem Docker Image mit einer Dockerfile:

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev

```

Baue das Image: `docker build -t meinePraesentation .`

Und Starte den Container: `docker run --name praesentation --rm --user node -p 3030:3030 meinePraesentation`

Nun findest du deine Präsentation unter http://localhost:3030/


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


Bei [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) findest du mehr Informationen.
