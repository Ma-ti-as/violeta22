/* 9. Crea un nuevo documento HTML con un script que a partir de un interactivo nos muestre el ancho de pantalla, alto de pantalla y diagonal de pantalla en pixels.*/
let a = screen.width;
let b = screen.height;
let c=Math.sqrt(a*a + b*b);

const midesPantalla=function midesPantalla(){
document.getElementById("mostrarPrimer").innerHTML=`<p>Amplada:${a} px / Alçada:${b} px / Diagonal:${c.toFixed(2)} px</p>`;
}
document.getElementById("demoPrimer").onclick=midesPantalla;

const esborrar=function esborrar(){
    document.getElementById("mostrarPrimer").innerHTML=``;
    }
    document.getElementById("demo2").onclick=esborrar;

