<?php
/* We carry out verification of input data and their protection from hostile scripts */
$name = htmlspecialchars($_POST["name"]);
$interested = htmlspecialchars($_POST["interested"]);
$email = htmlspecialchars($_POST["email"]);
$msg = htmlspecialchars($_POST["msg"]);

$to = "jromeorealtor@gmail.com";
$from = $_POST["email"];

$subject = "Form The Romeo Team at John Savoretti Realty";
$subject2 = "Confirmation of sending a letter - The Romeo Team at John Savoretti Realty";
$message = "\nName:$name \nInterested:$interested \nEmail:$email \nMessage:$msg";
$message2 = "Thank you for your request!\nsomeone from The Romeo Team will get back to you shortly";
$headers = "Content-Type: text/plain; charset=utf-8 \n";
mail($to, $subject, $message, $headers);
mail($from, $subject2, $message2, $headers, "-f info@jromeorealtor.com");
?>