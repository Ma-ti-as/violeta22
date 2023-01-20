/* 18. Haz un programa que te permita entrar con un control de texto la base de un triángulo, luego la altura en otro, y muestra su área en pantalla. Crea también un boton para ejecutar el cálculo y otro para borrar los datos y el resultado. */

//let area=document.querySelector('#mostrarArea');
/*
const estruFun = () => {

}
*/


document.getElementById('calculaTriangle').onclick=function(){
    let base=document.querySelector("#baseT").value;
    let altura=document.querySelector("#alturaT").value;
    let area=mostrarArea.innerHTML=(base*altura/2);
    //document.querySelector("#baseT").value='';
    //document.querySelector("#alturaT").value='';
    console.log(area);
}


const borroInput=()=>{
    input.value="";
    
}


const esborrarTriangle=()=>{
    document.querySelector("input","#alturaT").value="";
    //document.querySelector("#alturaT").value=``;
    }
    document.querySelector("#esborraTiangle").onclick=esborrarTriangle;

