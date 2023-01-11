//Crea un programa que permita saber en milisegundos cuando acabó el mundo según el calendario Maya, recoge además el día, mes, año, hora, minutos, segundos actuales y día de la semana.

let data=document.querySelector('#data');
let time=new Date();
data.innerHTML=time;

var displayHours = document.getElementById('displayHours');
var currentTime = new Date();
displayHours.innerHTML = currentTime.getHours() + " hrs";