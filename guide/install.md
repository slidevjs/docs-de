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
> echo 'shamefully-flatten=true' >> .npmrc
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

Wenn ein schneller Weg benötigt wird, um Präsentationen auch auf Containern zu nutzen, kann das bereits fertige [Docker Image](https://hub.docker.com/r/stig124/slidev) verwendet werden, welches von [stig124](https://github.com/Stig124) gemaintained wird. Oder man baut sich sein eigenes Image.

Weitere Informationen sind im [slidevjs/container Repo](https://github.com/slidevjs/container) zu finden.
