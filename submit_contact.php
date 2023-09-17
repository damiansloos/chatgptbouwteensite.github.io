<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data["name"];
    $email = $data["email"];
    $message = $data["message"];

    $to = "jouw-email@example.com";
    $subject = "Nieuw contactformulierbericht van $name";
    $email_message = "Naam: $name\n";
    $email_message .= "E-mail: $email\n";
    $email_message .= "Bericht:\n$message";

    $headers = "From: $email\n";
    $headers .= "Reply-To: $email\n";

    $success = mail($to, $subject, $email_message, $headers);

    if ($success) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
} else {
    echo json_encode(["success" => false]);
}
?>
