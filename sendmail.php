<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('sunshining1106@mail.ru', 'Магазин сертификатов "Дари Душой"');
    $mail->addAddress('sunshining1106@mail.ru');
    $mail->Subject = 'Добро пожаловать в магазин сертификатов';


    $body = '<h1>Заявка с сайта магазина сертификатов "Дари Душой"</h1>';

    if (trim(!empty($_POST['name']))) {
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if (trim(!empty($_POST['phonenumber']))) {
        $body.='<p><strong>Телефон:</strong> '.$_POST['phonenumber'].'</p>';
    }
    if (trim(!empty($_POST['comment']))) {
        $body.='<p><strong>Комментарий:</strong> '.$_POST['comment'].'</p>';
    }

    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>

