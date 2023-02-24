<?
$root = $_SERVER['DOCUMENT_ROOT'];
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require ($root . '/phpmailer/Exception.php');
require ($root . '/phpmailer/PHPMailer.php');
require ($root . '/phpmailer/SMTP.php');

$name = $_POST["name"];
$phone = $_POST["phone"];
$marka = $_POST["marka"];
$whereFrom = $_POST["whereFrom"];
$where = $_POST["where"];


$m = new PHPMailer();
$m->IsSMTP();
$m->CharSet    = 'UTF-8';
$m->Host       = "smtp.yandex.ru";
$m->SMTPSecure = 'ssl';
$m->SMTPDebug  = 2;
$m->SMTPAuth   = true;
$m->Port       = 465;
$m->Username   = "vlastelin-service-notifications@spaceapp.ru";
$m->Password   = "bnbiH6iFJHn2PRoVmj";
$m->setFrom('vlastelin-service-notifications@spaceapp.ru', 'Властелин Сервис');

$m->addAddress('vlastelinservis@mail.ru', 'Получатель');
$m->addAddress('kozlov.anton@spaceapp.ru', 'Получатель');
// $m->addAddress('', 'Получатель');


$m->Subject = "Заявка с сайта";


if(isset($_POST["marka"])){
    $m->Body = "
    Откуда забрать автомобиль: {$whereFrom}
    Куда доставить автомобиль: {$where}
    Марка и модель автомобиля: {$marka}
    Телефон: {$phone}
    ";
    }
    else if(isset($_POST["whereFrom"])){
        $m->Body = "
        Откуда забрать автомобиль: {$whereFrom}
        ";
    } 
    else {
        $m->Body = "
        Имя: {$name}
        Телефон: {$phone}
        ";
    }
    

// $m->IsHTML(true);
$m->send();

?>