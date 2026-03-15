# LA SANTI Gomme srl

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![Express](https://img.shields.io/badge/Express-5.x-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple)
![Version](https://img.shields.io/badge/version-2.0.1-blue)

Sito web per **LA SANTI Gomme srl** - Gommista a Travagliato (BS).

## Quick Start

```bash
# Clona il repository
git clone https://github.com/tuouser/SantiGomme.git
cd SantiGomme

# Installa dipendenze
npm install

# Configura ambiente
cp .env.example .env
# Modifica .env con i tuoi valori

# Avvia server
npm start
```

## Configurazione

Crea un file `.env` con:

```env
PORT=3000
NODE_ENV=production
RESEND_API_KEY=re_xxxxx
EMAIL_USER=info@lasantigommesrl.it
```

## Documentazione

Consulta [DOCUMENTAZIONE.md](DOCUMENTAZIONE.md) per la documentazione completa.
Per il passaggio di proprieta al cliente usa [CHECKLIST_PASSAGGIO_CLIENTE.md](CHECKLIST_PASSAGGIO_CLIENTE.md).

## Sicurezza

- Helmet (Security Headers)
- Rate Limiting
- Input Validation & Sanitization
- XSS Protection
- GDPR Compliance (Cookie Banner)

## Struttura

```
├── server.js          # Server Express
├── public/
│   ├── index.html     # Homepage
│   ├── index.js       # JavaScript frontend
│   ├── index.css      # Stili personalizzati
│   ├── privacy.html   # Privacy Policy
│   ├── cookie.html    # Cookie Policy
│   ├── termini.html   # Termini e Condizioni
│   └── img/           # Immagini e icone
└── DOCUMENTAZIONE.md  # Docs complete
```

## Licenza

Copyright (c) 2026 Enrico Jaupi, Davide Albo

All rights reserved.
