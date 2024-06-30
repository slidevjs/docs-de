# Addon benutzen

Addons sind zusätzliche Komponenten, Layouts, Styles, Konfigurationen... etc., welche in der Präsentation genutzt werden können.

Sie sind ganz ähnlich wie [Themes](/themes/use), aber im Allgemeinen:

<<<<<<< HEAD
* beeinflussen sie nicht die globalen Styles der Präsentation
* können mehrere Addons in einer Präsentation genutzt werden
=======
- they don't affect the global styles of your slides
- you can use multiple addons in one presentation
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

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

## Examples

- [slidev-addon-qrcode](https://github.com/kravetsone/slidev-addon-qrcode) is an addon that allows you to embed QR codes in your slides.

- [slidev-addon-remoji](https://github.com/twitwi/slidev-addon-remoji) is an addon that replaces emoji with icons in your slides for consistency / printing purposes.
