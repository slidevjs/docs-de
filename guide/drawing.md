# Zeichnung & Anmerkungen

> Verfügbar seit v0.23

<<<<<<< HEAD
Wir haben [drauu](https://github.com/antfu/drauu) für Zeichnungen und Anmerkungen eingebaut, damit deine Präsentation noch besser wird.

Um zu starten, muss nur das <carbon-pen class="inline-icon-btn"/> Icon in der Menüleiste geklickt werden und schon geht's los. Das Zeichnen ist auch im [Präsentatoren Modus](/guide/presenter-mode) verfügbar. Zeichnung & Anmerkungen, die im Präsentationsmodus erstellt werden, werden automatisch in Echtzeit über alle Instanzen **synchronisiert**.
=======
[drauu](https://github.com/antfu/drauu) is built-in for drawing and annotation, should that help improve your presentation further.

To start, click the <carbon-pen class="inline-icon-btn"/> icon in the toolbar and start drawing. It's also available in the [Presenter Mode](/guide/presenter-mode). Drawings and annotations you created will be **synced** automatically across all instances in real time.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

<TheTweet id="1424027510342250499" />

## Verwendung mit Stylus Stift

<<<<<<< HEAD
Wenn ein Stylus Stift auf einem Tablet verwendet wird, erkennt Slidev das automatisch. Nun kann man direkt auf die Folien malen, ohne extra den Zeichenmodus zu aktivieren. Die Finger oder Maus können weiterhin zur navigation genutzt werden.
=======
When using a stylus pen on a tablet (for example, iPad with Apple Pencil), Slidev will intelligently detect the input type. You can directly draw on your slides with the pen without turning on the drawing mode, while having your fingers or mouse control the navigation.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Zeichnungen Speichern

Mit der folgenden Frontmatter konfiguration werden Zeichnungen als SVGs im `.slidev/drawings` Ordner gespeichert. Dadurch können diese auch mit pdfs exportiert werden oder sind in der SPA zu sehen.

```md
---
drawings:
  persist: true
---
```

## Zeichnungen deaktivieren

Vollständig:

```md
---
drawings:
  enabled: false
---
```

Nur während der Entwicklung:

```md
---
drawings:
  enabled: dev
---
```

Nur im Präsentationsmodus:

```md
---
drawings:
  presenterOnly: true
---
```

## Zeichnung Synchronisierung

<<<<<<< HEAD
Standartweiße werden alle Zeichnungen aller Instanzen miteinander synchronisiert. Wenn man eventuell seinen Präsentation anderen vorträgt, kann dies stören. Mit folgender Konfiguration kann die Synchronisierung ausgeschaltet werden.
=======
By default, Slidev syncs up your drawings across all instances. If you are sharing your slides with others, you might want to disable the syncing via:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```md
---
drawings:
  syncAll: false
---
```

<<<<<<< HEAD
Wenn `syncAll` deaktiviert ist, werden trotzdem alle Zeichnungen von Präsentator der synchronisiert.
=======
With this config, only the drawing from the presenter instance will be able to sync with others.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
