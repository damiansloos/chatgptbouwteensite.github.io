
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
