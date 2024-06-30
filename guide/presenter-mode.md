# Moderatoren Modus

<<<<<<< HEAD
Durch klicken des <carbon-user-speaker class="inline-icon-btn"/> Buttons in der Navigationsleiste wird der Moderatoren Modus gestartet. Alternativ kann man auch direkt http://localhost:3030/presenter manuell besuchen. Wenn der Moderatoren Modus geöffnet ist, bleiben andere Seiteninstanzen automatisch synchronisiert.
=======
Click the <carbon-user-speaker class="inline-icon-btn"/> button in the navigation panel, or visit `http://localhost:3030/presenter` manually, to enter the presenter mode. To present, you'll want to open two browser windows, one for the presenter and one for the audience. Generally maximizing the slideshow window on your projector screen, then controlling it from your laptop's screen is how people present with Slidev.

Whenever you change slides in the presenter mode, all other page instances will automatically change as well, to stay in sync with the presenter.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

![](/screenshots/presenter-mode.png)

## Deaktivieren

Der Moderatorenmodus ist standardmäßig aktiviert.

Er kann mit der folgenden Konfiguration deaktiviert werden:

```md
---
presenter: false
---
```

<<<<<<< HEAD
Oder nur für den `dev` oder `build` Modus aktiviert werden:  
=======
Alternately you can enable it only for `dev` or `build` modes by setting the mode you want in the config:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```md
---
presenter: dev
---
```
<<<<<<< HEAD
In diesem Fall wird der Moderatorenmodus nur verfügbar sein, wenn `slidev` läuft, aber nicht, wenn `slidev build` läuft.
=======

In that case the presenter will only be available when running `slidev` but not when running `slidev build`.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Eingeschränkter Fernzugriff

Die Präsentation kann mit `slidev --remote` mit remote erreichbar gemacht werden.

<<<<<<< HEAD
In diesem Fall sollen vielleicht nur die Folien geteilt werden, allerdings sollen keinen anderen Personen Zugriff auf den Moderatorenmodus haben um die Presentation zu beeinflussen.

Für dieses Szenario kann ein Passwort angelegt werden, indem der Slidev mit `slidev --remote=your_password` gestartet wird.
=======
If you want to share your slides with other people but you don't want them to access the presenter mode (either because you're ashamed of your presenter notes, or because you don't want them to mess up your presentation), you can provide a password to protect the presenter server by running `slidev --remote=your_password`.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

In diesem Fall wird ein Passwort benötigt, um `/presenter/*` erreichen zu können.
