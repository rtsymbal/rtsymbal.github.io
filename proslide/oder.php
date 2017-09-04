<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
	


 
<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="info@proslide.com.ua";  // e-mail админа 
 
 
$date=date("d.m.y"); // число.месяц.год 
 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="http://www.proslide.com.ua/";  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
  
 
// Принимаем данные с формы 
$tema=$_POST['tema'];

$screen=$_POST['screen'];

$definition=$_POST['definition'];

$music=$_POST['music'];

$song=$_POST['song']; 

$name=$_POST['name'];
 
$email=$_POST['email']; 

$telephone=$_POST['telephone'];

$adress=$_POST['adress'];
 
$message=$_POST['message']; 
 
  
 
// Проверяем валидность e-mail 
 
if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is", 
strtolower($email))) 
 
 { 
 
  echo 
"<center>Вернитесь <a 
href='javascript:history.back(1)'><B>назад</B></a>. Вы 
указали неверные данные!"; 
 
  } 
 
 else 
 
 { 
 
 
$msg=" 

 
Тема: $tema

Размер экрана: $screen

Разрешение экрана: $definition

Направление музыки: $music

Исполнитель, композиция: $song
 
ФИО: $name
 
E-mail: $email

Адрес доставки: $adress
 
Сообщение: $message
 
"; 
 
  
 
 // Отправляем письмо админу  
 
mail("$adminemail", "$date $time Сообщение 
от $name", "$msg"); 
  
 
// Сохраняем в базу данных 
 
$f = fopen("message.txt", "a+"); 
 
fwrite($f," \n $date $time Сообщение от $name"); 
 
fwrite($f,"\n $msg "); 
 
fwrite($f,"\n ---------------"); 
 
fclose($f); 
 
  
 
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 6000); 
//--></script> 
 
<center>
<img src='../images/logo.png'><br>
<h1>Спасибо за Ваш заказ!</h1>
<b>В ближайшее время мы свяжемся с вами для обсуждения деталей заказа
Через несколько секунд Вы будете перенаправлены на главную страницу</b></center>"; 
exit; 
 
 } 
 
?>
</body>
</html>