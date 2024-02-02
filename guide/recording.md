# Präsentation aufzeichnen

Slidev hat eine integrierte Aufnahme- und Kameraansicht. Diese kann genutzt werden, um die eigenen Präsentationen aufzuzeichnen. Alles ganz einfach an einem Ort.

## Kameraansicht

Klicke den <carbon-user-avatar class="inline-icon-btn"/> Button in der Navigationsleiste um die Kameraansicht in der Präsentation zu öffnen. Die Kameraansicht kann auf dem Bildschirm umher geschoben werden und mittels des Handlers in der rechten unteren Ecke in der Größe verändert werden. Die Größe und Position wird im `localStorage` gespeichert und bei den nächsten Präsentation erneut angewendet.

<TheTweet id="1395006771027120133" />

## Aufzeichnung

Klicke den <carbon-video class="inline-icon-btn"/> Button inder Navigationsleiste und es öffnet sich ein Dialog. Hier kann man zwischen der Aufnahme der Präsentation oder des Kamerabilds oder beidem entscheiden. Außerdem kann man angeben, ob beide Videos in eine Datei oder in 2 getrennte Dateien gespeichert werden soll.

Diese Funktion läuft über [RecordRTC](https://github.com/muaz-khan/RecordRTC) und nutzt die [WebRTC API](https://webrtc.org/).

![](/screenshots/recording.png)
