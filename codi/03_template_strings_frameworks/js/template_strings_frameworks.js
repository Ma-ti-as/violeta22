const nombre='Matias';
const apellido='Primero';
const primavera='Primavera';
const verano='Verano';
const otonyo='Otoño';
const invierno='Invierno';
let estaciones="";




const saludo=`<h3>Bienvenido</h3> <p>${nombre} ${apellido} a nuestra aplicación</p>`;
const mostra=document.getElementById('mostra');
mostra.innerHTML=saludo;

const lista=document.getElementById('lista');
const abrir=document.getElementById("abrir");
const borrar=document.getElementById("borrar");

    
function listaEstaciones(){
    estaciones+=` <ul>
    <li>${primavera}</li>
    <li>${verano}</li>
    <li>${otonyo}</li>
    <li>${invierno}</li>
    </ul> `
    console.log(estaciones);
    lista.innerHTML=estaciones;
}
function borrarEstaciones(){
    estaciones=``;
    console.log(estaciones);
    lista.innerHTML=estaciones;
}

abrir.onclick=listaEstaciones;
borrar.onclick=borrarEstaciones;


