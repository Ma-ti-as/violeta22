/* alert("PopUp lanzado 'desde'  un javascript externo a mi  html"); */
function dameNombre() {
  let nombre = prompt("Dime tu nombre");
  console.log(nombre);
  alert(nombre);
  /* document.write(nombre); */
  /* document.getElementById("mostra").innerHTML = "Tú nombre es: " + nombre; */
  document.getElementById(
    "mostra"
  ).innerHTML = `<p style="font-size:30px">Tú nombre es:  ${nombre}</p>`;
}

document.getElementById("nombre").onclick = dameNombre;
/* dameNombre(); */
