/* Construye un programa que accionemos un botón y calcule un número aleatorio del 1 al 10 y lo muestre en una div del html*/
//let num=Math.floor(Math.random()*11);

        

const aleatori=function aleatori(){
    let num=Math.floor(Math.random()*11);
    document.getElementById("mostrarSegon").innerHTML=`<p>Número aleatori: ${num}</p>`;
    }
    document.getElementById("demoSegon").onclick=aleatori;
    
const esborrar2=function esborrar2(){
    document.getElementById("mostrarSegon").innerHTML=``;
    }
    document.getElementById("demo3").onclick=esborrar2; 
