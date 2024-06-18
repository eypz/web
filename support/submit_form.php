<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $issue = $_POST["issue"];

    // Validate email (optional but recommended)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Set recipient email address
    $to = "sataniceypz@gmail.com"; // Replace with your email address

    // Subject of the email
    $subject = "Contact Form Submission";

    // Compose the message
    $message = "Email: $email\n\n";
    $message .= "Issue:\n$issue";

    // Set additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully";
    } else {
        echo "Failed to send message";
    }
}
?>
