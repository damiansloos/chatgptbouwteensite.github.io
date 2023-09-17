<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // E-mailadres waar de e-mail naartoe wordt gestuurd
    $to = "jouw-email@example.com";

    // Onderwerp van de e-mail
    $subject = "Nieuw contactformulierbericht van $name";

    // Berichtinhoud
    $email_message = "Naam: $name\n";
    $email_message .= "E-mail: $email\n";
    $email_message .= "Bericht:\n$message";

    // E-mailheader instellen
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email\n";

    // E-mail verzenden
    if (mail($to, $subject, $email_message, $headers)) {
        echo "<p>Bedankt voor je bericht. We nemen zo spoedig mogelijk contact met je op.</p>";
    } else {
        echo "<p>Er is een probleem opgetreden bij het verzenden van je bericht. Probeer het later opnieuw.</p>";
    }
}
?>
