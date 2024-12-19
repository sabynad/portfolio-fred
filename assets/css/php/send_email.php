<?php

    // Vérifiez si la requête est de type POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Récupérer les données du formulaire
        $name = htmlspecialchars($_POST['name']);  // Évitez les attaques XSS en utilisant htmlspecialchars
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);  // Assurez-vous que l'email est valide
        $message = htmlspecialchars($_POST['message']);

        // L'adresse email à laquelle vous souhaitez recevoir les messages
        $to = "latyty@hotmail.fr";
        $subject = "Nouveau message de contact";
        
        // Créez le contenu de l'email
        $email_content = "Nom: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Message: $message\n";
        
        // Définir les en-têtes de l'email
        $headers = "From: $email" . "\r\n" . 
                "Reply-To: $email" . "\r\n" . 
                "Content-Type: text/plain; charset=UTF-8";
        
        // Envoyer l'email
        if (mail($to, $subject, $email_content, $headers)) {
            echo "Votre message a été envoyé avec succès.";
        } else {
            echo "Une erreur s'est produite lors de l'envoi de votre message.";
        }
    }

