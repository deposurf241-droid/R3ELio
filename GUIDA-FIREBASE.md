# R3ELio — configurazione Firebase, poi GitHub

## 1. Crea il progetto
- Vai su https://console.firebase.google.com/ → Aggiungi progetto → R3ELio (Analytics facoltativo, meglio disattivato).
- Piano **Spark (gratuito)**. Non servono Firestore, Storage o un piano a pagamento.

## 2. Abilita l’accesso email/password
- Build → Authentication → Get started → Sign-in method → Email/Password → Enable → Save.
- Authentication → Users → Add user: inserisci **email e password scelte da te**. Non inviare la password a nessuno.
- Copia **UID** del nuovo utente dalla tabella Users.
- L'app NON contiene il pulsante per creare nuovi account; Firebase può però accettare altre registrazioni via API. Soltanto l'UID indicato è ammesso nell'interfaccia, non costituisce un controllo server-side.

## 3. Registra il sito web in Firebase
- Project overview → icona Web `</>` → App nickname `R3ELio web` → Register app.
- Configurazione web già inserita nel file `firebase-config.js`.
- Configurazione Firebase e UID autorizzato già inseriti nel file `firebase-config.js`; non devi modificarlo.
- Authentication → Settings → Authorized domains: aggiungi `deposurf241-droid.github.io` (senza https e senza /R3ELio). Per email/password è una precauzione di configurazione utile soprattutto per le future funzionalità di autenticazione.

## 4. Carica i file GitHub
- Se usi GitHub Free, GitHub Pages richiede un repository **Public**. Il codice sarà leggibile da chiunque, non i dati che importi dalla tua galleria nell'app.
- Nel repository R3ELio scegli Settings → General → Danger zone → Change visibility → Public (solo se accetti che il codice sia pubblico).
- Nella radice del repository sostituisci `index.html`, `style.css`, aggiungi `firebase-config.js`, `auth-gate.js` e conserva `app.js`, `manifest.webmanifest`, `icon.svg`, `README.md`.
- Per ogni file già esistente su GitHub: apri il file → icona matita → sostituisci contenuto → Commit changes. Se usi Upload files, verifica se GitHub permette di sovrascrivere i nomi. Mai caricare lo ZIP come unico file.
- Settings → Pages → Deploy from a branch → main → /(root) → Save.
- URL previsto: https://deposurf241-droid.github.io/R3ELio/

## 5. iPhone
- Apri il link in Safari → Condividi → Aggiungi alla schermata Home.
- Accedi con email/password create in Firebase.
- Importa prima soltanto foto/video di test. Verifica che l'archivio si conservi dopo chiusura/riapertura.

## LIMITI DI PRIVACY (LEGGERE)
- Login Firebase **protegge l'interfaccia**, ma NON crittografa il database IndexedDB dell'iPhone e NON protegge i file da chi controlla il dispositivo/profilo browser o da script malevoli serviti dall'origine.
- NON caricare mai immagini/video nel repository GitHub: importa i file soltanto dalla galleria interna di R3ELio.
- Foto e video vengono conservati nel browser in locale; nessun upload al cloud è previsto dal codice dell'app. Firebase riceve le credenziali di accesso per verificarle. I file potrebbero perdersi cancellando i dati del sito.
- Il codice client che controlla l'UID non è una regola server-side: non usare questo login per proteggere dati sensibili messi online. Nessun Firestore o Storage è attivato.
- Se desideri un archivio con dati davvero cifrati, serviranno cifratura locale e gestione delle chiavi, che questa v1 non implementa.
- L'AI avanzata, le Live Photos complete e l'export MP4 garantito su Safari non sono implementati.
