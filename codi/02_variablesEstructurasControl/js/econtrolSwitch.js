let num_1=Number((window.prompt("indica un numero entre el 10 y el 30 incluidos: ")));
let result;
const mostra=document.getElementById('mostra');
/* 
let num_1=function dameNumero()
{let num=prompt('indica un numero entre el 10 y el 30 incluidos: ');
console.log(num);

document.getElementById("mostra").innerHTML=`<p style='font-size:30px'>Hola, ${num}</p>`;
}
document.getElementById("mostra").onclick=dameNumero;
 */


switch( num_1 ){ /* valor a comparar  */
case 10:
    result=`${num_1} vale 10`;
    break; 
case 20:
    result=`${num_1} vale 20`;
    break; 
case 30:
    result=`${num_1} vale 30`;    
    break; 
default:
    result=`${num_1}" no vale ni 10 ni 20 ni 30"`;
}
console.log(result);
mostra.innerHTML=result;
