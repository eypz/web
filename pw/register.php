<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Send email with the generated password
    $to = $email;
    $subject = "Your New Password";
    $message = "Hey $username,\n\nHere is your password: $password";
    $headers = "From: sataniceypz@gamil.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }

    // Additional logic to store the user data (email, username, password) in a database or file could be added here.
}
?>
