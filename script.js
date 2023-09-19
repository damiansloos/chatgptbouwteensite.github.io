document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const confirmationMessage = document.getElementById("confirmation-message");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simuleer hier het verzenden van het formulier (bijv. met een AJAX-aanroep naar de server)
        // Voeg hier je e-mailverzending en verwerkingslogica toe

        // Hieronder wordt het bevestigingsbericht weergegeven en het formulier verborgen
        confirmationMessage.style.display = "block";
        contactForm.style.display = "none";

        // Voeg hier je e-mailverzending en verwerkingslogica toe
        // Deze code simuleert het verzenden van het formulier en het verwerken van de reactie
        // Je moet deze code vervangen door echte e-mailverzending en serververwerking
// Voer de e-mailverzendingslogica op de server uit en stuur een reactie terug naar de client
.then((response) => response.json())
.then((data) => {
    // Hier kun je de serverreactie verwerken
    if (data.success) {
        alert("Bedankt voor je bericht. We nemen zo spoedig mogelijk contact met je op.");
        contactForm.reset();
    } else {
        alert("Er is een probleem opgetreden bij het verzenden van je bericht. Probeer het later opnieuw.");
    }
})
.catch((error) => {
    console.error("Fout bij het verzenden van het formulier: ", error);
});

            // Hier simuleren we een succesvolle reactie van de server
            // Je kunt deze setTimeout verwijderen en je echte e-mailverzending en verwerkingslogica hier plaatsen
            alert("Bedankt voor je bericht. We nemen zo spoedig mogelijk contact met je op.");
            contactForm.reset();
        }, 1000); // Stel de time-out in op 1 seconde (1000 milliseconden)
    });
});
