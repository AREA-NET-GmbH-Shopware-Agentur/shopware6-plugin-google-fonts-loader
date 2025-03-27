## 🔑 Google API Key erstellen

Damit das Plugin Google Webfonts über die API laden kann, wird ein kostenloser API Key von Google benötigt. So erstellst du diesen:

### Schritt 1: Google Cloud Console öffnen
Rufe die [Google Cloud Console](https://console.cloud.google.com/) auf.

> **Hinweis:** Du benötigst ein Google-Konto. Falls du noch keines hast, musst du zuerst eins erstellen.

---

### Schritt 2: Neues Projekt erstellen (optional)
Falls du noch kein Projekt hast:

1. Klicke oben auf den **Projektnamen** (z. B. „Mein erstes Projekt“).
2. Klicke im Popup auf **Neues Projekt**.
3. Vergib einen Projektnamen (z. B. „Shopware Fonts Plugin“).
4. Klicke auf **Erstellen**.
5. Wähle anschließend dein neu erstelltes Projekt aus.

---

### Schritt 3: Google Fonts Developer API aktivieren

1. Stelle sicher, dass du im richtigen Projekt bist.
2. Gehe zur [Google Fonts API Seite](https://console.cloud.google.com/apis/library/webfonts.googleapis.com).
3. Klicke auf **API aktivieren**.

---

### Schritt 4: API-Schlüssel erstellen

1. Gehe in der Cloud Console links auf **APIs & Dienste > Anmeldedaten**.
2. Klicke oben auf **Anmeldedaten erstellen > API-Schlüssel**.
3. Es wird ein neuer Schlüssel generiert – kopiere ihn und bewahre ihn sicher auf.

> Du kannst den API-Schlüssel in den Plugin-Einstellungen in der Shopware-Administration einfügen.

---

### Schritt 5 (empfohlen): API-Key einschränken

Um Missbrauch zu vermeiden:

1. Klicke beim erstellten API-Schlüssel auf das **Bearbeiten-Symbol**.
2. Unter **API-Einschränkungen**:
    - Wähle „**Einschränken**“ aus.
    - Suche nach „**Google Fonts Developer API**“ und aktiviere sie.
3. Optional kannst du den Zugriff auf bestimmte HTTP-Referrer (z. B. deine Domain) einschränken.

---

### ✅ Fertig!

Dein API Key ist jetzt einsatzbereit und kann im Plugin hinterlegt werden.  
Das Plugin lädt anschließend alle Google Webfonts direkt über die Google Fonts API
