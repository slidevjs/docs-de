# Addon benutzen

Addons sind zusätzliche Komponenten, Layouts, Styles, Konfigurationen... etc., welche in der Präsentation genutzt werden können.

Sie sind ganz ähnlich wie [Themes](/themes/use), aber im Allgemeinen:

* beeinflussen sie nicht die globalen Styles der Präsentation
* können mehrere Addons in einer Präsentation genutzt werden

Um Addons müssen manuell installiert werden, damit sie benutzt werden können:

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
      "slidev-addon-package2"
    ]
  }
}
```
