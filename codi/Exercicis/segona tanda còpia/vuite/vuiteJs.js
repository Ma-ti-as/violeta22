//Crea un programa que permita saber en milisegundos cuando acabó el mundo según el calendario Maya, recoge además el día, mes, año, hora, minutos, segundos actuales y día de la semana.

let data=document.querySelector('#data');
let time=new Date();


const dias=['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo']
const meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

let mes=meses[new Date().getMonth()];
let nomDia=dias[new Date().getDay()-1];
let any=time.getFullYear();

let minuts=time.getMinutes();
data.innerHTML=`${nomDia} ${time.getDate()} de ${mes} de ${any} `;

let displayMilseconds = document.getElementById('displayMilseconds');

let muerteMaya= new Date(2012,12,21);
console.log(muerteMaya.getTime());
console.log(Date.now(muerteMaya.getTime()));

displayMilseconds.innerHTML = muerteMaya.getTime();