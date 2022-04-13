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

<<<<<<< HEAD
Wenn ein schneller Weg benötigt wird, um Präsentationen auch auf Containern zu nutzen, kann das bereits fertige [Docker Image](https://hub.docker.com/r/stig124/slidev) verwendet werden, welches von [stig124](https://github.com/Stig124) gemaintained wird. Oder man baut sich sein eigenes Image.

Weitere Informationen sind im [slidevjs/container Repo](https://github.com/slidevjs/container) zu finden.
=======
If you need a rapid way to run a presentation with containers, you can use the prebuilt [docker](https://hub.docker.com/r/tangramor/slidev) image maintained by [tangramor](https://github.com/tangramor), or build your own.

Just run following command in your work folder:

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    tangramor/slidev:latest
```

If your work folder is empty, it will generate a template `slides.md` and other related files under your work folder, and launch the server on port `3030`. 

You can access your slides from http://localhost:3030/


### Build deployable image

Or you can create your own slidev project to a docker image with Dockerfile:

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev

```

Create the docker image: `docker build -t myppt .`

And run the container: `docker run --name myslides --rm --user node -p 3030:3030 myppt`

You can visit your slides from http://localhost:3030/


### Build hostable SPA (Single Page Application)

Run command `docker exec -i slidev npx slidev build` on the running container `slidev`. It will generate static HTML files under `dist` folder.


#### Host on Github Pages

You can host `dist` in a static web site such as [Github Pages](https://tangramor.github.io/slidev_docker/) or Gitlab Pages. 

Because in Github pages the url may contain subfolder, so you need to modify the generated `index.html` to change `href="/assets/xxx` to `href="./assets/xxx`. Or you may use `--base=/<subfolder>/` option during the build process, such as: `docker exec -i slidev npx slidev build --base=/slidev_docker/`.

And to avoid Jekyll build process, you need to add an empty file `.nojekyll`.


#### Host by docker

You can also host it by yourself with docker:

```bash
docker run --name myslides --rm -p 80:80 -v ${PWD}/dist:/usr/share/nginx/html nginx:alpine
```

Or create a static image with following Dockerfile:

```Dockerfile
FROM nginx:alpine

COPY dist /usr/share/nginx/html

```

Create the docker image: `docker build -t mystaticppt .`

And run the container: `docker run --name myslides --rm -p 80:80 mystaticppt`

You can visit your slides from http://localhost/


Refer to the [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) for more details.
>>>>>>> 9fa6829bca1bd8a2262cbc20eb2759d08a0f11fa
