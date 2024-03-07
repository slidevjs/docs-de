# Moderatoren Modus

Durch klicken des <carbon-user-speaker class="inline-icon-btn"/> Buttons in der Navigationsleiste wird der Moderatoren Modus gestartet. Alternativ kann man auch direkt http://localhost:3030/presenter manuell besuchen. Wenn der Moderatoren Modus geöffnet ist, bleiben andere Seiteninstanzen automatisch synchronisiert.

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
Or you can enable it only for `dev` or `build` mode by setting the mode you want in the config:
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

```md
---
presenter: dev
---
```
<<<<<<< HEAD
In diesem Fall wird der Moderatorenmodus nur verfügbar sein, wenn `slidev` läuft, aber nicht, wenn `slidev build` läuft.
=======

In that case the presenter will only be available when running `slidev` but not when running `slidev build`.
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

## Eingeschränkter Fernzugriff

Die Präsentation kann mit `slidev --remote` mit remote erreichbar gemacht werden.

In diesem Fall sollen vielleicht nur die Folien geteilt werden, allerdings sollen keinen anderen Personen Zugriff auf den Moderatorenmodus haben um die Presentation zu beeinflussen.

Für dieses Szenario kann ein Passwort angelegt werden, indem der Slidev mit `slidev --remote=your_password` gestartet wird.

In diesem Fall wird ein Passwort benötigt, um `/presenter/*` erreichen zu können.
