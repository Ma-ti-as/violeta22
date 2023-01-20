//7. Muestra en “ventana.html” la hora, minutos, y segundos mas un mensaje “buenos dias” si la hora >= 6:00 y hora <=14:00, muestra “buenas tardes” si la hora >14:00 y hora <20:00 y buenas noches en caso contrario.

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
let hor=new Date().getHours()
let saludito='';
if(hor>=6&&hor<=14){
    saludito='Buenos días';
}else if(hor>14&&hor<20){
    saludito='Buenas tardes'
}else{
    saludito='Buenas noches'
};

let show=document.querySelector('#saludo');
show.innerHTML=saludito;

let changeURL=prompt('Dame una url',`https://`);
console.log(changeURL);
window.opener.location.href = changeURL;