<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

$name = $_POST["name"];
$phone = $_POST["phone"];
$reviews = $_POST["reviews"];

// ykuxnjehflgtteon
$m = new PHPMailer();
$m->IsSMTP();
$m->CharSet    = 'UTF-8';
$m->Host       = "smtp.yandex.ru";
$m->SMTPSecure = 'ssl';
$m->SMTPDebug  = 2;
$m->SMTPAuth   = true;
$m->Port       = 465;
$m->Username   = "uristsaratovrf.scorpion@yandex.ru";
$m->Password   = "ykuxnjehflgtteon";
$m->setFrom('uristsaratovrf.scorpion@yandex.ru', 'Юридическая компания "СКОРПИОНЪ"');


$m->addAddress('whitedemon2092@gmail.com', 'Получатель');
$m->addAddress('uristsaratovrf.scorpion@yandex.ru', 'Получатель');

if(isset($_POST["phone"])) {
    $m->Subject = "Новая заявка";

    $m->msgHTML("
    <html>
        <body>
            <div style='margin-bottom: 10px'>Имя: <span style='margin-left: 5px'>{$name}</span></div>
            <div style='margin-bottom: 10px'>Телефон: <span style='margin-left: 5px'>{$phone}</span></div>
        </body>
    </html>");
} else {
    $m->Subject = "Новый отзыв";

    $m->msgHTML("
    <html>
        <body>
            <div style='margin-bottom: 10px'>Имя: <span style='margin-left: 5px'>{$name}</span></div>
            <div style='margin-bottom: 10px'>Отзыв: <span style='margin-left: 5px'>{$reviews}</span></div>
        </body>
    </html>");
}




$m->send();

?>