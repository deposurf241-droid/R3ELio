# R3ELio v2 — Studio migliorato

Aggiornamento della versione originale, con **stesso database IndexedDB** (`reelio_local_v1`) e stesso Firebase Authentication. **Non cancellare i dati del sito**, non modificare le impostazioni Firebase.

## Novità
- Montaggio con tagli variabili (video generalmente più lunghi delle foto), brevi dissolvenze e leggero movimento sulle foto.
- Editor: sposta su/giù, cambia durata di 0,5 s, sposta il punto iniziale dei video di 2 s, rimuovi clip.
- Caricamento video più robusto e gestione dell'inizio dei video.
- Tenta l'esportazione MP4 se MediaRecorder la supporta; altrimenti WebM.
- Nessun upload di foto/video e nessun nuovo SDK cloud.

## Limiti da conoscere
- **Non include ancora una AI di visione**: la selezione è per data/etichette/metadati e regole di ritmo. Non identifica autonomamente il contenuto semantico dei video.
- L'esportazione MP4 non è garantita da Safari iPhone; alcuni video HEVC/HDR potrebbero essere difficili da elaborare anche se riprodotti in galleria.
- Audio delle clip e musica non ancora inclusi.
- Il login Firebase è una protezione dell'interfaccia; il database locale non è cifrato.
- Il JSON dell'app non è un backup completo di foto e video. Conserva gli originali nell'app Foto.

## Come aggiornare
Sostituisci i file corrispondenti nel repository GitHub R3ELio usando quelli di questa cartella (non caricare lo ZIP direttamente). Mantieni `index.html`, `app.js` ecc. nella radice. Attendi aggiornamento GitHub Pages e ricarica Safari. **Non cancellare dati del sito**.
