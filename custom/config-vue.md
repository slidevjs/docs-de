# Konfiguriere Vue

<Environment type="client" />

Slidev nutzt [Vue 3](https://v3.vuejs.org/) um die Präsentation auf der Clientseite zu render. Man kann die App erweitern und benutzerdefinierte Plugins und Extensions nutzen.

Erstelle eine `./setup/main.ts` Datei mit dem folgendem Inhalt:

```ts
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(YourPlugin)
})
```

Diese Funktion kann auch als Eintrittspunkt der Slidev App genutzt werden, um Initialisierungen durchzuführen, bevor die App startet.

Erfahre mehr: [Vue Application API](https://v3.vuejs.org/api/application-api.html#component).
