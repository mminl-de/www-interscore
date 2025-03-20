# Anforderungen
- Ein Handy(Android/iOS) / eine GoPro7 oder höher
- Einen Laptop
- Einen Bildschirm
## Wie funktionierts?
Wir verbinden ihre Kamera(Handy/GoPro) und das Kampfgericht mit unseren Servern, welche anschließend das Overlay hinzufügen und an ihre ausgewählte Streamingplatform weiterleiten.
## Kamera einrichten
Wir empfehlen eine Handy als Kamera zu wählen, da die Einrichtung deutliche einfacher ist und die Streaming-Qualität von GoPros zu wünschen übrig lassen.
### Handy
Die Einrichtung ist sowohl für Android als für iOS gleich.(?)
#### Android
1. Gehen sie in den Google Play Store und installieren sie: [[Streamlabs: Live Streaming][https://play.google.com/store/apps/details?id=com.streamlabs]]
![IMG STREAMLABS IN GOOGLE PLAY]
2. Öffnen sie die App
3. ![IMG streamlabs1.jpeg] Klicken sie auf Weiter
4. ![IMG streamlabs_allow_camera.jpeg] Erlauben sie der App ihre Kamera und Mikrofon zu benutzen, falls sie gefragt werden.
5. ![IMG streamlabs_select_kamera_streamen.jpeg] Wählen sie Kamera Streamen aus und drücken sie auf Weiter
6. ![IMG streamlabs_skip.jpeg] Überspringen sie die Frage nach dem Layout. Das Layout ist für uns nicht entscheident.
7. ![IMG streamlabs_press_live_gehen.jpeg] Drücken sie auf Go Live unten in der Mitte.
8. ![IMG streamlabs_press_rtmp.jpeg] Scrollen sie im auftauchenden Menu ganz nach unten. Wählen sie dort "Benutzerdefiniertes RTMP" aus.1
9. ![IMG streamlabs_write_rtmp_data.jpeg] Im auftauchenden Menu füllen sie die Lücken wie folgt:
Name: radball
URL: rtmp://mminl.de/rtmp/1
Stream-Key: Dieser wurde ihnen per E-Mail zugeschickt und sollte X zeichen haben.
**Es ist sehr wichtig, dass sie sich bei der URL und dem Stream-Key nicht vertippen! Falls der Stream kein Bild zeigt, liegt es höchstwahrscheinlich daran!**
![IMG streamlabs_rtmp_data_writen.jpeg]
10. Klicken sie auf Speichern. Sie landen wieder im Startbildschirm mit ihrem Kamerabild.
![IMG streamlabs_press_live_gehen.jpeg]
11. Klicken sie erneut auf live gehen. ![IMG streamlabs_go_live.jpeg] diesmal taucht ein anderes Menu auf.
12. ![IMG streamlabs_go_live_dropdown.jpeg] Klicken sie auf das Dropdown-Menu und wählen sie radball aus. ![IMG streamlabs_go_live_platform_selected.jpeg]
13. ![IMG streamlabs_beeing_live.jpeg] Nun sollte die App so aussehen. Unten sollte "Anhalten" stehen und oben die Zeit, die sie bereits Live sind sowie ihre Verbindungsqualität.
#### iOS
Fast das gleiche i.g. aber zumindest auf iPad andere reihenfolge
TODO
### GoPro
TODO
### Tipps zur Positionierung
Wir empfehlen die Kamera so hoch wie möglich zu positionieren. Außerdem empfehlen wir, wenn sie die Möglichkeit haben, die Weitwinkelfunktion ihrer Kamera zu nutzen und die Kamera in der Mitte des Spielfeldes zu positionieren. Wenn dies nicht möglich ist, an einer Ecke des Spielfeldes, so dass das gesamte Spielfeld zu sehen ist. Weiterhin sollte der Winkel der Kamera so eingestellt sein, dass das Spielfeld im unteren Teil der Kamera ist, dass stellt sicher, dass die Spielanzeige usw. die Sicht nicht blockiert. 
## Kampfgericht einrichten
Wir unterstützen Windows und Linux. Auch für MacOS bieten wir eine Version an, diese wird allerdings nicht aktiv getestet. Wir empfehlen Windows oder Linux.
Schließen sie den Bildschirm an, damit auch die Halle die Ergebnisse sieht.
### Download
Downloaden sie die neuste Version des Kampfgerichts auf: https://mminl.de/kampfgericht / github.com
Ist Github benutzbar genug für die Leute? Ist es gut, dass man die Software einfach runterladen kann?
### Benutzung
Beim Öffnen des Programms sollten zwei Fenster geöffnet werden. ![IMG rentnerend_input.png] ![IMG rentnerend_display.png] Das Schwarze Fenster ist das Fenster für die Halle. Das andere ist fürs Kampfgericht selber.

Die Spiele sind bereits alle eingetragen. Die Spielstände werden pro Spiel gespeichert. Um immer die aktuellsten Ergebnisse im Livestream anzuzeigen empfehlen sie so schnell wie möglich nach Ende eines Spieles auf das nächste umzuschalten. Dies gilt auch für das letzte Spiel! Spielen sie vor dem Spieltag einfach mal ein bisschen mit dem Program herum um es kennenzulernen.
## Einen Streamingdienst auswählen
Sie können sich aussuchen, ob sie über ihren eigenen Kanal oder über unseren Streamen wollen. Falls sie über unseren streamen wollen, müssen sie nichts weiter tun. Falls sie ihren nutzen wollen, müssen sie die RTMP URL sowie ihren Streaming-Key beschaffen. Außerdem müssen sie dafür sorgen, dass der Stream auch läuft. Die folgenden Anleitungen für verschiedene Platformen zeigen ihnen wie.

Wir empfehlen ihnen auf Sportdeutschland.tv zu streamen, da dies der offizielle Streaming-Partner des BSOD's und somit des BDR's sind und nach Rahmenverträgen Streams über Sportdeutschland laufen müssen. Für mehr Informationen siehe: [https://www.dosb.de/aktuelles/news/detail/dosb-new-media-erwirbt-tv-rechte-von-ard-und-zdf].
### Sportdeutschland
Achtung: Sportdeutschland schaltet Accounts manuell frei. Dies kann einige Tage in Anspruch nehmen! Planen sie dies ein.
1. Erstellen sie sich einen kostenlosen Account auf sportdeutschland.tv
2. Optional: Bearbeiten sie ihr Profil, damit man sie erkennt.
3. Warten sie bis ihr Profil freigeschaltet wurde. Dies sollten sie per E-Mail erfahren.
4. Loggen sie sich ein und klicken sie auf ihr Profilbild ![IMG sportdeutschland_profil_anklicken.png]
5. Klicken sie auf "Neuer Beitrag"
6. Wählen sie Livestream aus, bearbeiten Titel, Beschreibung und Vorschaubild. Geben sie außerdem den Start der Veranstaltung an.
7. Klicken sie auf "Neue permanente RTMP-URL anlegen" und suchen sie sich einen beliebigen Namen aus. Wählen sie ihn anschließend im Dropdown-Menu aus.
8. Klicken sie auf "Livestream erstellen"
9. Es sollte ein Pop-Up auftauchen, in dem Textfelder mit "Persöhnliche RTMP-URL" und "Geheimer Schlüssel" stehen. Kopieren sie beide und schicken sie sie per E-Mail an uns. Diese benötigen wir, damit wir den Livestream von uns an Sportdeutschland weiterleiten können.
10. Kopieren sie die "Öffentliche Livestream-URL" um sie mit anderen zu teilen. Unter diesem Link können sie später den Livestream sehen.
### Youtube
Achtung: Auf Youtube müssen sie das Livestream-Feature aktiv aktivieren. Anschließend müssen sie 24h warten. Manchmal erlaubt Youtube Livestreams unter bestimmten Abonnentenzahlen(Bspw. <1000) auch garnicht. Prüfen sie dies vorher!
1. TODO
