/* 18. Haz un programa que te permita entrar con un control de texto la base de un triángulo, luego la altura en otro, y muestra su área en pantalla. Crea también un boton para ejecutar el cálculo y otro para borrar los datos y el resultado. */

 document.getElementById('calculaTriangle').onclick=()=>{
    let bas=document.querySelector("#baseT").value;
    let alt=document.querySelector("#alturaT").value;

    if(bas==``){alert(`Introduce un número para la base!!`);}
    else{
        if(alt==``){alert(`Introduce un número para la altura!!`)}
        else{mostrarArea.innerHTML=(bas*alt/2);}
    }}
 
/* document.getElementById('calculaTriangle').onclick=()=>{
    let base=document.querySelector("#baseT").value;
    let altura=document.querySelector("#alturaT").value;
    mostrarArea.innerHTML=(base*altura/2);
} */
const esborrarTriangle=()=>{
    document.querySelector("#alturaT").value=``;
    document.querySelector("#baseT").value=``;
    mostrarArea.innerHTML=``;
    }
    document.querySelector("#esborraTiangle").onclick=esborrarTriangle;

