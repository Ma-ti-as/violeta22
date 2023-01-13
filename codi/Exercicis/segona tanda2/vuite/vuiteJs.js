//Crea un programa que permita saber en milisegundos cuando acabó el mundo según el calendario Maya, recoge además el día, mes, año, hora, minutos, segundos actuales y día de la semana.

let data=document.querySelector('#data');
let time=new Date();
let dia=time.getDay();
let any=time.getFullYear();
let mes=time.getMonth();
let minuts=time.getMinutes();
data.innerHTML=`${dia}`;

let displayMilseconds = document.getElementById('displayMilseconds');
let muerteMaya = Date.parse('2012/12/21');
displayMilseconds.innerHTML = muerteMaya;