$(document).ready(function() {
	var day=['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
	   month=['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Окрябрь','Ноябрь','Декабрь'];
   SetData();
   function SetData() {
	   var now = new Date();
	   $('.date').html(day[now.getDay()]+', ');
	   $('.date').append(' '+month[now.getMonth()]+' ');
	   $('.date').append(now.getDate()+', ');
	   $('.date').append(now.getFullYear()+' &nbsp; &nbsp; ');
	   hour=now.getHours();
	   minutes=now.getMinutes();
	   if (minutes<10) {minutes='0'+minutes};
	   $('.date').append(hour+':'+minutes);
	}
  	setInterval(SetData,60);

});