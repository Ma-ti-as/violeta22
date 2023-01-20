//Crea un programa que permita saber en milisegundos cuando acabó el mundo según el calendario Maya, recoge además el día, mes, año, hora, minutos, segundos actuales y día de la semana.

let data=document.querySelector('#data');
let time=new Date();


const dias=['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
const meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

let mes=meses[new Date().getMonth()];
let nomDia=dias[new Date().getDay()];
let any=time.getFullYear();


function temps(){
myDate = new Date();
let hores = myDate.getHours();
if (hores < 10) hores = 0 + hores;
let minuts = myDate.getMinutes();
if (minuts < 10) minuts = "0" + minuts;
let segons = myDate.getSeconds();
if (segons < 10) segons = "0" + segons;
hora.innerHTML=(hores+ ":" +minuts+ ":" +segons);
setTimeout("temps()", 1000);
}

data.innerHTML=`${nomDia} ${time.getDate()} de ${mes} de ${any} `;
hora.innerHTML=(temps());


let muerteMaya= new Date(2012,12,21);
let ahora=new Date;
console.log(muerteMaya.getTime);
console.log(ahora);
let prestado=ahora-muerteMaya;

displayMilseconds.innerHTML = prestado;