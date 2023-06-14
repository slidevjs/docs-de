# Addon erstellen

> Verfügbar seit v0.32.1

## Fähigkeiten

Addons können folgende Punkte beeinflussen:

<<<<<<< HEAD
- Globale Styles (mit Vorsicht zu verwenden, das ist eher die Rolle von [Themes](/themes/use))
- Bereitstellen Layouts oder Überschreiben von vorhandenen Layouts
- Bereitstellen Komponenten oder Überschreiben von vorhandenen Komponenten
- Erweitern der Windi CSS Konfiguration
- Konfigurieren von Tools, wie Monaco oder Prism
=======
- Global styles (use with caution has it is more the role of [themes](/themes/use))
- Provide custom layouts or override the existing one
- Provide custom components or override the existing one
- Extend UnoCSS/Windi CSS configurations
- Configure tools like Monaco and Prism
>>>>>>> 281e164b346b52adc3a71e21d96d17965b799d59

## Konventionen

Addons werden im npm-Registry veröffentlicht und sollten den unten stehenden Konventionen folgen:

- der Paketname sollte mit `slidev-addon-` starten, zum Beispiel: `slidev-addon-awesome`
- `slidev-addon` und `slidev` müssen im `keywords` Feld der `package.json` Datei stehen

## Einrichtung

### Initialisierung

Um ein Addon zu erstellen, muss zunächst ein Verzeichnis mit einer `package.json` Datei erstellt werden (`npm init` kann dafür verwendet werden).


Dann müssen die slidev Abhängigkeiten installiert werden:

```bash
$ npm install -D @slidev/cli
```

### Testen

Um eine Testumgebung für das Addon einzurichten, muss eine `example.md` Datei mit einigen Inhalten erstellt werden.

Optional können auch `scripts` zur `package.json` hinzugefügt werden:

```json
// package.json
{
  "scripts": {
    "dev": "slidev example.md",
    "build": "slidev build example.md",
    "export": "slidev export example.md",
    "screenshot": "slidev export example.md --format png"
  }
}
```

Um ein Addon zu veröffentlichen, muss nur `npm publish` ausgeführt werden. Es ist kein Build-Prozess erforderlich (was bedeutet, dass direkt `.vue` und `.ts` Dateien veröffentlicht werden können, slidev ist intelligent genug, diese zu verarbeiten).

Das erstellen von Addons folgt den selben Contribution-Richtlinien wie lokale Konfigurationen, siehe [Dokumentation für Namenskonvektionen](/custom/)

## Addon Metadaten

### Slidev Version

Wenn das Addon auf eine bestimmte Funktion von Slidev angewiesen ist, die neu eingeführt wurde, kann die minimale Slidev-Version festgelegt werden, die erforderlich ist, damit das Addon richtig funktioniert: 

```json
// package.json
{
  "engines": {
    "slidev": ">=0.32.1"
  }
}
```

Wenn Nutzer ältere Versionen von Slidev verwenden, wird eine Fehlermeldung ausgegeben.

