/* const NOMBRE="Òscar";
const PI=3.141516; */
const nombre = "Òscar";
const apellido = "Perolillos";
const saludo = ` <h3>Bienvenido</h3> <p>${nombre} ${apellido} a nuestra aplicación</p>`;
const lista = document.getElementById("lista");
const abrir = document.getElementById("abrir");
const borrar = document.getElementById("borrar");
let estaciones = ``;

const mostra = document.getElementById("mostra");
mostra.innerHTML = saludo;

const primavera = "Primavera";
const verano = "Verano";
const otonyo = "Otoño";
const invierno = "Invierno";

function listaEstaciones() {
  estaciones += ` <ul>
    <li>${primavera}</li>
    <li>${verano}</li>
    <li>${otonyo}</li>
    <li>${invierno}</li>
</ul> `;
  lista.innerHTML = estaciones;
}
function borrarEstaciones() {
  estaciones = ` <ul>
    <li>${primavera}</li>
    <li>${verano}</li>
    <li>${otonyo}</li>
    <li>${invierno}</li>
</ul> `;
  lista.innerHTML = estaciones;
}

abrir.onclick = listaEstaciones;
borrar.onclick = borrarEstaciones;
