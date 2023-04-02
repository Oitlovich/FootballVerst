<?php
    $to = "sergeimaleev13@mail.ru";
    $from = "nik2004itamalcev@gmail.com";
    $subject = "FootballVerst";

    $message = htmlspecialchars($_POST['secondname']);
    $message = urldecode($message);

    $headers = "From: $from" . "\r\n" .
    "Reply-To: $from" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo 'Письмо отправлено';
    }
    else {
        echo 'Письмо не отправлено';
    }

    // header('location: index.php')
?>