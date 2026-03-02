// Cookie Consent 
(() => {
    const cookieBanner = document.getElementById('cookieBanner');
    const accettaBtn = document.getElementById('accettaCookie');
    const rifiutaBtn = document.getElementById('rifiutaCookie');
    const personalizzaBtn = document.getElementById('personalizzaCookie');

    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(() => cookieBanner.style.display = 'block', 1000);
    }

    const setConsent = (type) => {
        localStorage.setItem('cookieConsent', type);
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        cookieBanner.style.display = 'none';
        console.log(type === 'all' ? 'All cookies accepted' : 'Only necessary cookies');
    };

    accettaBtn.addEventListener('click', () => setConsent('all'));
    rifiutaBtn.addEventListener('click', () => setConsent('necessary'));
    personalizzaBtn.addEventListener('click', () => {
        alert('Funzionalità di personalizzazione cookie in sviluppo.\nPer ora puoi scegliere tra "Accetta tutti" o "Solo necessari".');
    });
})();

// Form Contatti 
const form = document.getElementById("formContatti");
const risposta = document.getElementById("rispostaForm");
const messaggio = document.getElementById("messaggio");
const charCount = document.getElementById("charCount");
const submitBtn = document.getElementById("submitBtn");
const submitText = document.getElementById("submitText");
const submitSpinner = document.getElementById("submitSpinner");

// Aggiornamento contatore caratteri
messaggio.addEventListener("input", () => {
    const len = messaggio.value.length;
    charCount.textContent = len;
    charCount.classList.toggle("text-danger", len > 2000);
});

// Validazione visuale dei campi
form.querySelectorAll("input, textarea").forEach(field => {
    field.addEventListener("blur", () => {
        field.classList.toggle("is-valid", field.checkValidity());
        field.classList.toggle("is-invalid", !field.checkValidity());
    });
});

// Invio form
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    risposta.className = "";
    risposta.textContent = "";

    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
    }

    if (!document.getElementById("privacy").checked) {
        risposta.className = "alert alert-warning mt-3";
        risposta.textContent = "Devi accettare la privacy policy per inviare il messaggio.";
        return;
    }

    submitBtn.disabled = true;
    submitText.textContent = "Invio in corso...";
    submitSpinner.style.display = "inline-block";

    const dati = new FormData(form);
    const obj = {
        nome: dati.get("nome"),
        email: dati.get("email"),
        messaggio: dati.get("messaggio")
    };

    try {
        const res = await fetch("/api/contatti", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin",
            body: JSON.stringify(obj)
        });

        const data = await res.json();

        if (res.ok && data.success) {
            risposta.className = "alert alert-success mt-3";
            risposta.textContent = "Messaggio inviato correttamente! Ti risponderemo al più presto.";
            form.reset();
            charCount.textContent = "0";
            form.classList.remove("was-validated");
            form.querySelectorAll(".is-valid, .is-invalid").forEach(el => el.classList.remove("is-valid", "is-invalid"));
        } else {
            risposta.className = "alert alert-danger mt-3";
            risposta.textContent = data.message || "Errore nell'invio del messaggio.";
        }
    } catch (err) {
        risposta.className = "alert alert-danger mt-3";
        risposta.textContent = "Errore di connessione al server. Riprova più tardi.";
        console.error(err);
    } finally {
        submitBtn.disabled = false;
        submitText.textContent = "Invia messaggio";
        submitSpinner.style.display = "none";
    }
});

//  Smooth Scroll 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});