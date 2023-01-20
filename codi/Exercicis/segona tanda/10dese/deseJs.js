//19. . Haz un programa que te permita entrar con un control de texto el número de columnas y en otro control el número de filas de una tabla que se escribirá en pantalla y permitirà escribir en cada celda creada. Necesitarás un boton para crear la tabla y otro para borrarla


const nuevaTabla = () => {
    const columnas=document.querySelector('#filas').value;
    const filas=document.querySelector('#columnas').value;

    let tablita=tablaInput.innerHTML=`<table border=2>`;
        {for(let i=0; i<columnas;i++){
            tablita+=tablaInput.innerHTML=`<tr>`;
                for(let j=0; j<filas;j++){
                    tablita+=tablaInput.innerHTML=`<td><input class="editable" type="text" ></td>`;}
                    tablita+=tablaInput.innerHTML=`</tr>`;};
                    tablita+=tablaInput.innerHTML=`</table>`;
        }tablaInput.innerHTML=tablita;
}


const crear2 = document.querySelector("#creaTabla");
crear2.onclick = nuevaTabla;
const borrar10 = () => {
    tablaInput.innerHTML = "";
    document.querySelector('#filas').value="";
    document.querySelector('#columnas').value="";
};

const eliminar10 = document.querySelector("#borraTabla");
eliminar10.onclick = borrar10;
