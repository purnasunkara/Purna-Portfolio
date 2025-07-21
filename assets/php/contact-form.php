<?php
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    require 'PHPMailer/Exception.php';

    // Get form data
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $mobile = trim($_POST['mobile']);
    $message = trim($_POST['message']);
    $emailTo = "purnasaisunkara@outlook.com"; // Put your own email address here
    $subject = 'Message from your website';

    if (empty($subject)) {
        $subject = 'Message from your website';
    }

    $body = "Name: $name\n\nEmail: $email\n\nMobile: $mobile\n\nMessage:\n$message";

    // Create a new PHPMailer instance
    $mail = new PHPMailer\PHPMailer\PHPMailer();

    // SMTP configuration
    $mail->isSMTP();
    $mail->Host = 'smtp.example.com';  // Replace with your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'purnasaic@outlook.com';  // Replace with your SMTP username
    $mail->Password = 'Lovely_01!';  // Replace with your SMTP password
    $mail->SMTPSecure = 'tls';  // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;  // TCP port to connect to

    // Set email details
    $mail->setFrom($email, $name);
    $mail->addAddress($emailTo);
    $mail->Subject = $subject;
    $mail->Body = $body;

    // Send the email
    if ($mail->send()) {
        $emailSent = true;
        echo 'SEND';
    } else {
        echo 'Error: ' . $mail->ErrorInfo;
    }
?>
