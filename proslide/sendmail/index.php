<?php

include('kcaptcha/kcaptcha.php');
session_start();
require_once("config.php");


if ($_POST['act']== "y")
{
if(isset($_SESSION['captcha_keystring']) && $_SESSION['captcha_keystring'] ==  $_POST['keystring'])
{

if (isset($_POST['tema']) && $_POST['tema'] == "")
{
$statusError = "$errors_tema";
}
elseif (isset($_POST['screen']) && $_POST['screen'] == "")
{
$statusError = "$errors_screen";
}
elseif (isset($_POST['definition']) && $_POST['definition'] == "")
{
$statusError = "$errors_definition";
}
elseif (isset($_POST['music']) && $_POST['music'] == "")
{
$statusError = "$errors_music";
}
elseif (isset($_POST['nazvanie']) && $_POST['nazvanie'] == "")
{
$statusError = "$errors_nazvanie";
}
elseif (isset($_POST['name']) && $_POST['name'] == "")
{
$statusError = "$errors_name";
}
elseif(isset($_POST['email']) && !preg_match("/^([a-z,._,0-9])+@([a-z,._,0-9])+(.([a-z])+)+$/", $_POST['email']))
{
$statusError = "$errors_email";

unset($_POST['email']);
}
elseif (isset($_POST['telephone']) && $_POST['telephone'] == "")
{
$statusError = "$errors_telephone";
}
elseif (isset($_POST['adress']) && $_POST['adress'] == "")
{
$statusError = "$errors_adress";
}
elseif (isset($_POST['message']) && $_POST['message'] == "")
{
$statusError = "$errors_message";
}

elseif (!empty($_POST))
{
//заголовок для нас
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: $content  charset=$charset\r\n";
$headers .= "Date: ".date("Y-m-d (H:i:s)",time())."\r\n";
$headers .= "From: \"Заказ с сайта ".$_POST['posName']."\" <".$_POST['posEmail'].">\r\n";
$headers .= "X-Mailer: My Send E-mail\r\n";

//заголовок для заказчика
$headerszakaz  = "MIME-Version: 1.0\r\n";
$headerszakaz .= "Content-Type: $content  charset=$charset\r\n";
$headerszakaz .= "Date: ".date("Y-m-d (H:i:s)",time())."\r\n";
$headerszakaz .= "From: \"Подтверждение заказа\" <".$mailto.">\r\n";
$headerszakaz .= "X-Mailer: My Send E-mail\r\n";

mail("$mailto","$subject","Посетитель сайта отправил заказ: $message","$headers");//отправляем сообщение нам
mail($_POST['posEmail'],"$subject","Ваш заказ получен: $message","$headerszakaz");//отправляем сообщение заказчику

unset($name, $posText, $mailto, $subject, $posRegard, $message);

$statusSuccess = "$send";
}

}else{
$statusError = "$captcha_error";
unset($_SESSION['captcha_keystring']);
}
}
?>