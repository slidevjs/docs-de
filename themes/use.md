# Theme benutzen

In Slidev das Theme zu ändern ist überraschend einfach. Man muss nur ein `theme:` Feld im Frontmatter Block hinzufügen.

```yaml
---
theme: seriph
---
```

Jetzt kann der Server gestartet werden und dieser fordert einen auf, dass Theme automatisch zu installieren

<div class="language-md">
<pre>
<span class="token keyword">?</span> Das Theme <span class="token string">"@slidev/theme-seriph"</span> was not found in your project, do you want to install it now? › (Y/n)
</pre>
</div>

oder installiere das Theme manuell via

```bash
$ npm install @slidev/theme-seriph
```

Und das ist alles! Mehr Informationen über die Verwendung des Themes findet man in der README Datei des Themes.

Erfahre mehr über das [Erstellen eines eigenen Themes](/themes/write-a-theme)

## Theme Auswerfen

Falls man die komplette Kontrolle über das Theme übernehmen möchte, kann man das Theme mit folgendem Befehl in das lokale Dateisystem **auswerfen** und nach belieben ändern:

```bash
$ slidev theme eject
```

Es wirft das derzeitig verwendete Theme in den `./theme` Ordner und ändert den Frontmatter zu 

```yaml
---
theme: ./theme
---
```

Das kann auch hilfreich sein, wenn man ein neues Theme basierend auf einem bestehenden erstellen möchte. Dabei sollte man aber daran denken das ursprüngliche Theme und den Author zu erwähnen :).

## Locales Theme

Wie schon im vorheringen Abschnitt gezeigt, ist es möglich, einen **relativen Pfad** für das Theme anzugeben.

```yaml
---
theme: ./pfad/zum/theme
---
```

Weitere Informationen über [das schreiben eines Themes](/themes/write-a-theme).
