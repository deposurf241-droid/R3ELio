/* R3ELio • Accesso con Firebase Authentication (solo UI, non cifratura dei file locali). */
'use strict';
(function () {
  const screen=document.getElementById('auth-screen'), app=document.getElementById('app');
  const form=document.getElementById('login-form'), status=document.getElementById('auth-status');
  const loginButton=document.getElementById('login-button');
  const config=window.R3ELIO_FIREBASE_CONFIG, allowed=window.R3ELIO_ALLOWED_UID;
  let loaded=false, auth=null;
  function message(t){status.textContent=t;}
  function showLogin(){app.classList.add('hidden');screen.classList.remove('hidden');}
  function showApp(){screen.classList.add('hidden');app.classList.remove('hidden');if(!loaded){loaded=true;const script=document.createElement('script');script.src='app.js';script.onerror=()=>{loaded=false;showLogin();message('Impossibile avviare l’app.')};document.body.appendChild(script)}}
  if(!window.firebase || !config || !allowed || allowed.startsWith('INSERISCI_') || !config.apiKey || config.apiKey.startsWith('INSERISCI_') || !config.appId || config.appId.startsWith('INSERISCI_')) {message('Configurazione incompleta: leggi il file GUIDA-FIREBASE.md e modifica firebase-config.js.');return;}
  try {firebase.initializeApp(config);auth=firebase.auth();auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(()=>{});}catch(e){message('Configurazione Firebase non valida.');return;}
  form.addEventListener('submit',async e=>{
    e.preventDefault();loginButton.disabled=true;message('Controllo delle credenziali…');
    try {const email=document.getElementById('login-email').value.trim(), pass=document.getElementById('login-password').value;const result=await auth.signInWithEmailAndPassword(email,pass);if(result.user.uid!==allowed){await auth.signOut();message('Account non autorizzato.');}else{document.getElementById('login-password').value='';message('');}}
    catch(e){message('Accesso non riuscito. Controlla email, password e configurazione Firebase.');}
    finally{loginButton.disabled=false;}
  });
  auth.onAuthStateChanged(async user=>{
    if(!user){showLogin();return;}
    if(user.uid!==allowed){showLogin();message('Questo account non è autorizzato.');await auth.signOut();return;}
    showApp();
  },()=>{showLogin();message('Impossibile verificare la sessione. Controlla la connessione.');});
  // Pulsante esci, creato soltanto a sessione autenticata.
  const logout=document.createElement('button');logout.type='button';logout.className='auth-logout';logout.textContent='🔒 Esci da R3ELio';logout.onclick=()=>auth.signOut();app.appendChild(logout);
})();
