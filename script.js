
        .then((response) => response.json())
        .then((data) => {
        
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

/* Dit is de javascript code, omdat de formulierverwerking via een andere, externe site gaat is die code hier niet meer nodig en had ik die code verwijderd.
De code die hier staat is voor het generen van het bericht dat op de pagina van het contactformulier komt te staan zodra op de button wordt gedrukt.
Als er op de button wordt gedrukt dan wordt de code geactiveerd. Verder wordt er gekeken of het bericht wordt verstuurd, zo ja dan krijg je data.success en dan krijg je het specifieke bericht dat het gelukt is.
anders krijg je een bericht met de melding dat er een probleem is met het versturen en dan het later opnieuw geprobeerd moet worden. Ook zit er een controle op .catch((error) deze geeft aan bij het inspecteren dat er een fout is*/
