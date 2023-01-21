# Addon benutzen

Addons sind zusätzliche Komponenten, Layouts, Styles, Konfigurationen... etc., welche in der Präsentation genutzt werden können.

Sie sind ganz ähnlich wie [Themes](/themes/use), aber im Allgemeinen:

* sie beeinflussen nicht die globalen Styles der Präsentation
* es können mehrere Addons in einer Präsentation genutzt werden

To use addons, you have to install them manually via:
Um Addons benutzen zu können, müssen sie manuell installiert werden:

```bash
$ npm install [slidev-addon-package1] [slidev-addon-package2]
```

... und dann im Frontmatter deklariert werden:

```yaml
---
addons:
  - slidev-addon-package1
  - slidev-addon-package2
---
```

Oder in der `package.json`:

```json
// package.json
{
  "slidev": {
    "addons": [
      "slidev-addon-package1",
      "slidev-addon-package2",
    ]
  }
}
```
