<<<<<<< HEAD
# Statisches Hosting

## Erstellen von Single Page Applications (SPA)
=======
# Static Hosting
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280

Man kann Slidev Präsentation als selbst-hostbare SPA exportieren:

```bash
$ slidev build
```

<<<<<<< HEAD
Die erstellte SPA ist im `dist/` Ordner verfügbar und kann mit [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/) oder mit was auch immer man will gehostet werden. Nun kann man seine Präsentation mit nur einem link mit der ganzen Welt teilen.
=======
The generated application will be available under `dist/`.

You can test the generated build using a web server (Apache, NGINX, Caddy...etc.) or in the project you can directly run: `npx vite preview`.

Then you can host it on [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), or whatever you want. Now you can share your slides with the rest of the world with a single link.
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280

### Basispfad

<<<<<<< HEAD
Wenn Präsentationen auf sub-Routen bereit gestellt werden soll, kann eine `--base` Option übergeben werden. Zum Beispiel:
=======
To deploy your slides under sub-routes, you will need to pass the `--base` option. The `--base` path **must begin and end** with a slash `/`; for example:
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280

```bash
$ slidev build --base /slides/mein-toller-vortrag/
```

Weitere Einzelheiten sind in [Vite's Dokumentation](https://vitejs.dev/guide/build.html#public-base-path) zu finden.

### Herunterladbare PDF

Man kann herunterladbare PDFs für Zuschauer der SPA mit der folgenden Konfiguration bereitstellen:

```md
---
download: true
---
```

Slidev generiert automatisch mit der SPA eine PDF und in der SPA wird ein 'Download' Button angezeigt.

Man kann auch eine eigene PDF zum herunterladen anbieten, in diesem Fall wird das Generieren der PDF übersprungen.

```md
---
download: "https://meine-seite.de/vortrag.pdf"
---
```

<<<<<<< HEAD
## Beispiele
=======
This can also be done with the CLI option `--download` (`boolean` only).

```bash
$ slidev build --download
```

When using the download option, you can also provide the export options:

* By using [CLI export options](/guide/exporting.html)
* Or [frontmatter export options](/custom/#frontmatter-configures)

### Output directory

You can change the output directory using `--out`.

```bash
$ slidev build --out my-build-folder
```

### Watch mode

By passing the `--watch` option the build will run in watch mode and will rebuild anytime the source changes.

```bash
$ slidev build --watch
```

### Multiple entries

You can also build multiple slides at once.

```bash
$ slidev build slides1.md slides1.md
```

Or

```bash
$ slidev build *.md
```

In this case, each input file will generate a folder containing the build in the output directory.

## Examples
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280

Hier sind einige Beispiele für die exportierte SPA:

- [Starter Template](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) von [Anthony Fu](https://github.com/antfu)

Mehr ist in den [Beispielprojekten](/showcases) zu finden.

## Hosting

Wir empfehlen die Verwendung von `npm init slidev@lastest`, um das Projekt zu erstellen, somit werden die notwendigen Konfigurationsdateien für die Hosting-Dienste direkt mitgeliefert.

### Netlify

- [Netlify](https://netlify.com/)

Erstelle eine `netlify.toml` im Projektstamm mit folgendem Inhalt:

```toml
<<<<<<< HEAD
[build.environment];
NODE_VERSION = "14"

[build];
publish = "dist";
command = "npm run build"

[[redirects]];
from = "/*";
to = "/index.html";
status = 200;
=======
[build]
publish = 'dist'
command = 'npm run build'

[build.environment]
NODE_VERSION = '20'

[[redirects]]
from = '/*'
to = '/index.html'
status = 200
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280
```

Gehe dann zu deinem Netlify Dashboard und erstelle eine neue Website mit dem Repository.

### Vercel

- [Vercel](https://vercel.com/)

Erstelle eine `vercel.json` im Projektstamm mit folgendem Inhalt:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Gehe dann zu deinem Vercel Dashboard und erstelle eine neue Seite mit dem Repository.

### GitHub Pages

- [GitHub Pages](https://pages.github.com/)

<<<<<<< HEAD

Um deine Präsentation auf GitHub Pages zu deployen:
- lade alle Dateien des Projekts in das Repository hoch (zum Beispiel mit dem Namen  `Name_des_Repos`)
- erstelle eine `.github/workflows/deploy.yml` im Projektstamm mit folgendem Inhalt um deine Präsentation via Github Actions auf Github Pages bereitzustellen. In dieser Datei ersetzte `<Name_des_Repos>` mit `Name_des_Repos`

=======
To deploy your slides on GitHub Pages:
- upload all the files of the project in your repo (i.e. named `name_of_repo`)
- create `.github/workflows/deploy.yml` with following content to deploy your slides to GitHub Pages via GitHub Actions. In this file, replace `<name_of_repo>` with `name_of_repo`. Make sure to leave the leading and trailing slashes in place.
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280

```yaml
name: Deploy pages

on:
  workflow_dispatch: {}
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    permissions:
      contents: read
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
<<<<<<< HEAD
          node-version: "14"
=======
          node-version: 'lts/*'

>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280
      - name: Install dependencies
        run: npm install

      - name: Build
<<<<<<< HEAD
        run: slidev build --base <Name_des_Repos>
      - name: Deploy pages
        uses: crazy-max/ghaction-github-pages@v2
=======
        run: npm run build -- --base /<name_of_repo>/

      - uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280
        with:
          path: dist

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```
<<<<<<< HEAD
- In dem Repository, gehe zu Settings>Page. Unter "Build and deployment", wähle "Deploy from a branch", wähle "gh-pages" und "root". Klicke Speichern.
- Nachdem alle Arbeitsabläufe ausgeführt wurden, sollte unter Settings>Page ein Link zu der Präsentation erscheinen.
=======
- In your repository, go to Settings>Pages. Under "Build and deployment", select "Github Actions".
- Finally, after all workflows are executed, a link to the slides should appear under Settings>Pages.
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280
