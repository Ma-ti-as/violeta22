/* alert("PopUp lanzado \"desde\" un archivo externo a mi HTml"); */
const dameNombre=function dameNombre()
{let nom=prompt('Cómo te llamas?');
console.log(nom);
/* document.write(nom); */
// document.getElementById("mostra").innerHTML="Hola, "+nom;
document.getElementById("mostra").innerHTML=`<p style='font-size:30px'>Hola, ${nom}</p>`;
}
document.getElementById("nombre").onclick=dameNombre;