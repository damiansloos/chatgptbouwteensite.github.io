document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Valideer de invoer hier (bijv. controleer of e-mail geldig is)

        // Verzend de gegevens naar de server voor e-mailverzending
        fetch("submit_contact.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
            }),
        })
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
    });
});
