//Escribe un programa que permita escribir una tabla con cuatro celdas (dos filas y dos columnas), con bordes colapsados y un texto en cada celda.

/* function creaTabla(){
    const contenedor = document.getElementById("tabla");
    const tabla = document.createElement("table");
   
    tabla.setAttribute("border", "1");
 
    let tr = document.createElement("tr");

    tr = document.createElement("tr");
    td = document.createElement("td");
    
    td.appendChild(document.createTextNode("arriba izquierda"));
    tr.appendChild(td);
 
    td = document.createElement("td");
    td.appendChild(document.createTextNode("arriba derecha"));
    tr.appendChild(td);
 
    tabla.appendChild(tr);
 
    tr = document.createElement("tr");
    td = document.createElement("td");
    
    td.appendChild(document.createTextNode("abajo izquierda"));
    tr.appendChild(td);
 
    td = document.createElement("td");
    td.appendChild(document.createTextNode("abajo derecha"));
    tr.appendChild(td);
 
    tabla.appendChild(tr);
 
    contenedor.appendChild(tabla);
}
window.onload = creaTabla; */



const mostra = document.querySelector("#tabla");

const crearTabla = () => {
    
    const table = `<table border=2>
<tr>
<td contenteditable>arriba izquierda</td>
<td contenteditable>arriba derecha</td>
</tr>
<tr>
<td  contenteditable>abajo izquierda1</td>
<td  contenteditable>tabajo derecha</td>
</tr>
</table>`;
    tabla.innerHTML = table;
};

const borrar = () => {
    tabla.innerHTML = "";
};
const crear = document.querySelector("#crear");
crear.onclick = crearTabla;

const eliminar = document.querySelector("#borrar");
eliminar.onclick = borrar;
