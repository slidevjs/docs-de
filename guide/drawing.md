# Zeichnung & Anmerkungen

> Verfügbar seit v0.23

Wir haben [drauu](https://github.com/antfu/drauu) für Zeichnungen und Anmerkungen eingebaut, damit deine Präsentation noch besser wird.

Um zu starten, muss nur das <carbon-pen class="inline-icon-btn"/> Icon in der Menüleiste geklickt werden und schon geht's los. Das Zeichnen ist auch im [Präsentatoren Modus](/guide/presenter-mode) verfügbar. Zeichnung & Anmerkungen, die im Präsentationsmodus erstellt werden, werden automatisch in Echtzeit über alle Instanzen **synchronisiert**.

<TheTweet id="1424027510342250499" />

## Verwendung mit Stylus Stift

Wenn ein Stylus Stift auf einem Tablet verwendet wird, erkennt Slidev das automatisch. Nun kann man direkt auf die Folien malen, ohne extra den Zeichenmodus zu aktivieren. Die Finger oder Maus können weiterhin zur navigation genutzt werden.

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

Standartweiße werden alle Zeichnungen aller Instanzen miteinander synchronisiert. Wenn man eventuell seinen Präsentation anderen vorträgt, kann dies stören. Mit folgender Konfiguration kann die Synchronisierung ausgeschaltet werden.

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
>>>>>>> c3c1774bdf48295664f5b30d7ba7bfbda5a0f3d2
