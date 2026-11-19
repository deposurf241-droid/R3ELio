# R3ELio v1 · app web privata

**Cosa funziona:** anni, creazione viaggi, date, importazione e visualizzazione di foto/video, memorizzazione locale via IndexedDB, lettura EXIF data/GPS per JPEG compatibili, visualizzazione su mappa schematica offline, raggruppamento cronologico, filtro testuale per nome file/note, proposte automatiche basate su criteri semplici, montaggio di base su canvas, anteprima, tentativo di esportazione WebM nei browser compatibili, backup ed importazione dei dati di viaggio (senza allegati multimediali), cancellazione locale.

**Cosa NON è ancora implementato:** AI visiva avanzata che riconosce monumenti o scene, ricerca conversazionale semantica, scelta intelligente dei picchi nei video, riconoscimento dei trend, musica sincronizzata, esportazione garantita in MP4 su iPhone, conversione affidabile delle Live Photos HEIC+MOV. Le proposte "Stupiscimi" sono euristiche, non AI. Le Live Photos vanno importate come coppia di file, se esportate da Foto; la componente HEIC potrebbe non essere visualizzabile sul browser. I metadati dei video MOV/MP4 non vengono letti dal contenitore in questa prima versione. Alcune esportazioni da Foto su iOS possono rimuovere GPS/EXIF.

## Istruzioni per GitHub Pages
1. Estrai lo ZIP sul computer, oppure apri lo ZIP su iPhone nell'app File ed estrailo.
2. Crea un repository GitHub (preferibilmente **privato**; con Pages gratis il supporto dipende dal piano, normalmente Pages gratuito richiede repository pubblico).
3. Carica **i singoli file contenuti nella cartella** (index.html, app.js, style.css, manifest.webmanifest, icon.svg), non il file ZIP. Il README è facoltativo.
4. In Settings > Pages, seleziona Deploy from a branch, branch main e cartella / (root), Save. Attendi che GitHub mostri l'indirizzo pubblicato.
5. Apri l'URL HTTPS su Safari iPhone, Condividi > Aggiungi alla schermata Home.

## Privacy
Non ci sono API, telemetria, CDN, servizi remoti o Firebase. Foto e video sono salvati nel database IndexedDB del browser in uso; non vengono inseriti in GitHub. Sono disponibili però rischi di perdita dati (pulizia della cache, modalità privata, spazio insufficiente). **Non è una cassaforte crittografica**: chi ha accesso al browser/dispositivo può potenzialmente accedere ai dati. Conserva gli originali nell'app Foto o in un backup personale. La mappa è schematica e funziona senza rete. Il sito è statico: GitHub ospita il codice, non i contenuti selezionati. Se carichi grandi video il browser può esaurire memoria o spazio.

Per una privacy verificabile, apri gli strumenti di rete del browser e controlla l'assenza di richieste in uscita al momento dell'importazione; usa hosting HTTPS e mantieni il dispositivo aggiornato.

## Test rapidi
- Crea viaggio di test, carica JPG e MP4 non personali, chiudi e riapri il sito, verifica la galleria.
- Apri la scheda Studio, seleziona il viaggio, anteprima; prova esportazione solo se il browser la supporta.
- Verifica i permessi di accesso a Foto e i metadati importati.
