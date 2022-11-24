<<<<<<< HEAD
# Statisches Hosting
=======

# Static Hosting
>>>>>>> 35a71a169226ed1a0aecd46caa63ecf4e468608c

## Erstellen von Single Page Applications (SPA)

Man kann Slidev Präsentation als selbst-hostbare SPA exportieren:

```bash
$ slidev build
```

Die erstellte SPA ist im `dist/` Ordner verfügbar und kann mit [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/) oder mit was auch immer man will gehostet werden. Nun kann man seine Präsentation mit nur einem link mit der ganzen Welt teilen.

### Basispfad

Wenn Präsentationen auf sub-Routen bereit gestellt werden soll, kann eine `--base` Option übergeben werden. Zum Beispiel:

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

<<<<<<< HEAD
Slidev generiert automatisch mit der SPA eine PDF und in der SPA wird ein 'Download' Button angezeigt.

Man kann auch eine eigene PDF zum herunterladen anbieten, in diesem Fall wird das generieren der PDF übersprungen.
=======
Slidev will generate a PDF file along with the build, and a download button will be displayed in the SPA.

You can also provide a custom URL for the PDF. In that case, the rendering process will be skipped.
>>>>>>> 35a71a169226ed1a0aecd46caa63ecf4e468608c

```md
---
download: "https://meine-seite.de/vortrag.pdf"
---
```

## Beispiele

Hier sind einige Beispiele für die exportierte SPA:

- [Starter Template](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) von [Anthony Fu](https://github.com/antfu)

Mehr ist in den [Beispielprojekten](/showcases) zu finden.

## Hosting

<<<<<<< HEAD
Wir empfehlen die Verwendung von `npm init slidev@lastest`, um das Projekt zu erstellen, somit werden die notwendigen Konfigurationsdateien für die Hosting-Dienste direkt mitgeliefert.
=======
We recommend to use `npm init slidev@latest` to scaffold your project, which contains the necessary configuration files for hosting services out-of-the-box.
>>>>>>> 35a71a169226ed1a0aecd46caa63ecf4e468608c

### Netlify

- [Netlify](https://netlify.com/)

Erstelle eine `netlify.toml` im Projektstamm mit folgendem Inhalt:

```toml
[build.environment];
NODE_VERSION = "14"

[build];
publish = "dist";
command = "npm run build"

[[redirects]];
from = "/*";
to = "/index.html";
status = 200;
```

<<<<<<< HEAD
Gehe dann zu deinem Netlify Dashboard und erstelle eine neue Website mit dem Repository.
=======
Then go to your Netlify dashboard and create a new site with the repository.
>>>>>>> 35a71a169226ed1a0aecd46caa63ecf4e468608c

### Vercel

- [Vercel](https://vercel.com/)

Erstelle eine `vercel.json` im Projektstamm mit folgendem Inhalt:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

<<<<<<< HEAD
Gehe dann zu deinem Vercel Dashboard und erstelle eine neue Seite mit dem Repository.
=======
Then go to your Vercel dashboard and create a new site with the repository.
>>>>>>> 35a71a169226ed1a0aecd46caa63ecf4e468608c

## GitHub Pages

- [GitHub Pages](https://pages.github.com/)

<<<<<<< HEAD
Erstelle eine `.github/workflows/deploy.yml` im Projektstamm mit folgendem Inhalt um deine Präsentation via Github Actions auf Github Pages bereitzustellen:
=======
To deploy your slides on GitHub Pages:
- upload all the files of the project in your repo (i.e. named `name_of_repo`)
- create `.github/workflows/deploy.yml` with following content to deploy your slides to GitHub Pages via GitHub Actions. In this file, replace `<name_of_repo>` with `name_of_repo`.
>>>>>>> 35a71a169226ed1a0aecd46caa63ecf4e468608c

```yaml
name: Deploy pages
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "14"
      - name: Install dependencies
        run: npm install
      - name: Install slidev
        run:  npm i -g @slidev/cli
      - name: Build
        run: slidev build --base <name_of_repo>
      - name: Deploy pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
- In your repository, go to Settings>Pages. Under "Build and deployment", select "Deploy from a branch", select "gh-pages" and "root". Click on save.
- Finally, after all workflows are executed, a link to the slides should appear under Settings>Pages.
