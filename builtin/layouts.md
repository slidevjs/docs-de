# Layouts

## Eingebaute Layouts

> Da Themen eventuell Layouts überschreiben können, ist es am besten, die genaue Verwendung, Parameter und Beispiele in der jeweiligen Dokumentation nachzulesen.

### `center`

Zeigt den Inhalt in der Mitte des Bildschirms an.

### `cover`

Wird benutzt, um das Deckblatt der Präsentation anzuzeigen. Diese Folie kann auch den Titel und weitere Kontextualisierungen oder anderes enthalten.

### `default`

Das Standard Layout, um jegliche Art von Inhalt anzuzeigen.

### `end`

Die Abschlussfolie der Präsentation.

### `fact`

Zeigt einen Fakt oder Daten mit sehr viel Aufmerksamkeit an.

### `full`

Nutzt den gesamten Platz auf dem Bildschirm für die Darstellung von Inhalten aus.

### `image-left`

Zeig ein Bild auf der linken Seite des Bildschirms und rechts den Inhalt.

#### Verwendung

```yaml
---
layout: image-left

# die Bildquelle
image: ./pfad/zum/bild

# ein benutzerdefinierter Klassenname für den Inhalt
class: mein-toller-inhalt-rechts
---
```

### `image-right`

Zeig ein Bild auf der rechten Seite des Bildschirms und links den Inhalt.

#### Verwendung

```yaml
---
layout: image-right

# die Bildquelle
image: ./pfad/zum/bild

# ein benutzerdefinierter Klassenname für den Inhalt
class: mein-toller-inhalt-links
---
```

### `image`

Zeigt ein Bild als Hauptinhalt der Seite an.

#### Verwendung

```yaml
---
layout: image

# die Bildquelle
image: ./pfad/zum/bild
---
```


### `iframe-left`

Shows a web page on the left side of the screen, the content will be placed on the right side.

#### Usage

```yaml
---
layout: iframe-left

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

### `iframe-right`

Shows a web page on the right side of the screen, the content will be placed on the left side.

#### Usage

```yaml
---
layout: iframe-right

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

### `iframe`

Shows a web page as the main content of the page.

#### Usage

```yaml
---
layout: iframe

# the web page source
url: https://github.com/slidevjs/slidev
---
```


### `intro`

Als Einstieg in die Präsentation, wird normalerweise mit Titel, kurzer Beschreibung, Autor, usw. benutzt.

### `none`

Ein Layout ohne jegliche Styles.

### `quote`

Um ein Zitat an hervorgehobener Stelle anzuzeigen.

### `section`

Wird benutzt, um den Anfang eines neuen Abschnitts in der Präsentation zu markieren.

### `statement`

Mache eine Affirmation/Aussage zum Hauptinhalt der Seite.

### `two-cols`

Trennt den Seiteninhalt in zwei Spalten.

#### Verwendung

```md
---
layout: two-cols
---

# Links

Das wird links angezeigt

::right::

# Rechts

Das wird rechts angezeigt
```

## Eigene Layouts

Erstelle einen Ordner `layouts/` im Ursprung deines Projektverzeichnisses. Dort können eigene Vue Layout Komponenten erstellt werden.

Erfahre mehr unter [Individualisierung](/custom/directory-structure#layouts)

## Layouts bereitgestellt von Themen

Themen können auch eigene Layouts bereitstellen oder bestehende ändern. Diese sind in der Dokumentation der jeweiligen Themen aufgelistet und erklärt.
