# Checklist Passaggio Proprieta Cliente

Versione: 1.0
Data: 15/03/2026

Questa checklist copre il passaggio completo di proprieta del progetto al cliente.
Flusso richiesto:
1. Account GitHub cliente
2. Account Vercel cliente
3. Trasferimento repo
4. Deploy su Vercel (account cliente)
5. Acquisto dominio Aruba e collegamento a Vercel
6. Collegamento Google Search Console

---

## Prerequisiti

- Accesso admin al repository GitHub attuale
- Accesso all account Vercel attuale (solo se serve confronto configurazioni)
- Email operativa del cliente
- Dati legali cliente (ragione sociale, P.IVA, PEC se richiesta)
- Accesso al pannello Aruba del dominio acquistato
- Account Google del cliente per Search Console

---

## 1) Creo account GitHub cliente

- [ ] Aprire https://github.com/signup
- [ ] Creare username professionale (esempio: nomeazienda-it)
- [ ] Verificare email account
- [ ] Abilitare 2FA (consigliato TOTP)
- [ ] Salvare recovery codes in archivio cliente

Controllo finale:
- [ ] Login eseguito correttamente
- [ ] Profilo completato con email e nome azienda

---

## 2) Creo account Vercel cliente

- [ ] Aprire https://vercel.com/signup
- [ ] Registrare account con GitHub del cliente (consigliato)
- [ ] Scegliere piano Hobby o Pro in base a necessita
- [ ] Verificare email account
- [ ] Abilitare 2FA su Vercel

Controllo finale:
- [ ] Dashboard Vercel accessibile
- [ ] GitHub del cliente collegato in Vercel

---

## 3) Passo proprieta repo al cliente

Metodo consigliato: Transfer ownership della repo.

### Passi owner attuale (GitHub)

- [ ] Aprire Settings della repository
- [ ] Entrare in General
- [ ] Scorrere fino a Danger Zone
- [ ] Selezionare Transfer ownership
- [ ] Inserire username cliente
- [ ] Confermare nome repo e operazione

### Passi cliente (GitHub)

- [ ] Accettare transfer dalla notifica/email GitHub
- [ ] Verificare che la repo risulti nel suo account
- [ ] Verificare tab Settings disponibile

Controllo finale:
- [ ] URL repo aggiornato sotto account cliente
- [ ] Commit history intatta
- [ ] Issues/PR/wiki (se presenti) trasferite correttamente

---

## 4) Deploy su Vercel della repo sull account cliente

### Import progetto

- [ ] In Vercel cliente: Add New -> Project
- [ ] Selezionare repo trasferita
- [ ] Framework preset: Other (Node/Express)
- [ ] Build Command: lasciare vuoto (se non necessario)
- [ ] Output Directory: lasciare vuoto (Express server)
- [ ] Install Command: npm install

### Variabili ambiente (Project Settings -> Environment Variables)

- [ ] RESEND_API_KEY
- [ ] EMAIL_USER
- [ ] NODE_ENV=production
- [ ] PORT (opzionale, Vercel usa porta interna)

### Deploy

- [ ] Eseguire primo deploy production
- [ ] Aprire URL .vercel.app
- [ ] Testare homepage e assets statici
- [ ] Testare invio form contatti
- [ ] Verificare log runtime in Vercel

Controllo finale:
- [ ] Deploy stato Ready
- [ ] Nessun errore 5xx in produzione
- [ ] Form funzionante end-to-end

---

## 5) Cliente acquista dominio su Aruba e lo collego a Vercel

### Acquisto dominio (cliente)

- [ ] Dominio acquistato su Aruba
- [ ] DNS management attivo nel pannello Aruba

### Collegamento dominio in Vercel

- [ ] Vercel -> Project -> Settings -> Domains
- [ ] Aggiungere dominio root (esempio: dominio.it)
- [ ] Aggiungere sottodominio www (www.dominio.it)

### Configurazione DNS su Aruba

Impostare i record richiesti da Vercel mostrati nella schermata Domains.
Configurazione tipica:
- [ ] Record A per root (@) verso 76.76.21.21
- [ ] Record CNAME per www verso cname.vercel-dns.com

Note:
- Se Vercel propone valori diversi, usare SEMPRE quelli mostrati da Vercel.
- Propagazione DNS: da pochi minuti fino a 24-48 ore.

Controllo finale:
- [ ] dominio.it risponde correttamente
- [ ] www.dominio.it risponde correttamente
- [ ] HTTPS attivo con certificato valido
- [ ] Redirect unico deciso (www -> root o root -> www)

---

## 6) Collego Google Search Console

### Preparazione

- [ ] Cliente effettua login su https://search.google.com/search-console
- [ ] Aggiungere proprieta Dominio (consigliato) o URL prefix

### Verifica proprieta (metodo consigliato: DNS TXT)

- [ ] Copiare record TXT fornito da Search Console
- [ ] Inserire TXT nel DNS Aruba
- [ ] Attendere propagazione e cliccare Verify

### Post-verifica

- [ ] Inviare sitemap (esempio: https://dominio.it/sitemap.xml)
- [ ] Impostare proprieta preferita (https)
- [ ] Controllare Copertura/Indicizzazione
- [ ] Richiedere indicizzazione homepage

Controllo finale:
- [ ] Proprieta verificata
- [ ] Sitemap accettata
- [ ] Nessun errore critico di scansione

---

## Consegna finale al cliente

- [ ] Repository sotto proprieta cliente
- [ ] Vercel project sotto account cliente
- [ ] Dominio Aruba collegato e HTTPS attivo
- [ ] Search Console verificata e sitemap inviata
- [ ] Credenziali consegnate tramite canale sicuro
- [ ] Verbale consegna firmato (opzionale ma consigliato)

---

## Registro handover (da compilare)

- Data handover:
- Operatore:
- Account GitHub cliente:
- Account Vercel cliente:
- Dominio:
- Stato deploy:
- Stato DNS:
- Stato Search Console:
- Note finali:
