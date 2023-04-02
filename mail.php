<?php
    $to = "sergeimaleev13@mail.ru";
    $from = "sergeimaleev13@mail.ru";

    $message = htmlspecialchars($_POST['secondname']) . '\r\n' . 
               htmlspecialchars($_POST['firstname']) . '\r\n' . 
               htmlspecialchars($_POST['phone']) . '\r\n' . 
               htmlspecialchars($_POST['comment']);

    $message = urldecode($message);

    if (mail($to, $message)) {
        echo 'Письмо отправлено';
    }
    else {
        echo 'Письмо не отправлено';
    }

    header('location: index.php')
?>