if(navigator.cookieEnabled) {
    if (confirm("Permanecer en la web conlleva aceptar el uso de cookies") == true) {
} else {
    location.href = "https://wikipedia.org";
}
};
    
    const table = `<table id="tablaOP" border 1>
    <tr>
<td class="fileQuestions" id="pregunta">PROPIEDAD</td>
<td class="fileAnswer" id="respuesta" >VALOR OBTENIDO CON JS</td>
</tr>
<tr>
<td class="fileQuestions">Valor máximo que puede tener un número en JavaScript</td>
<td class="fileAnswer" id="valorMaximo"></td>
</tr>
<tr>
<td  class="fileQuestions">Valor mínimo que puede tener un número en JavaScript</td>
<td  class="fileAnswer" id="valorMinimo"></td>
</tr>
<tr>
<td class="fileQuestions">Altura total de la pantalla</td>
<td class="fileAnswer" id="altoPantalla"></td>
</tr>
<tr>
<td  class="fileQuestions">Anchura total de la pantalla</td>
<td  class="fileAnswer" id="anchoPantalla"></td>
</tr><tr>
<td class="fileQuestions">Altura de la página web</td>
<td class="fileAnswer" id="altoWeb"></td>
</tr>
<tr>
<td  class="fileQuestions">Anchura de la página web</td>
<td  class="fileAnswer" id="anchoWeb"></td>
</tr><tr>
<td class="fileQuestions">URL de la página web</td>
<td class="fileAnswer" id="url"></td>
</tr>
<tr>
<td  class="fileQuestions">Nombre de la página web con su extensión (index.html)</td>
<td  class="fileAnswer" id="siExtension"></td>
</tr><tr>
<td class="fileQuestions">Nombre de la página web sin su extensión (index)</td>
<td class="fileAnswer" id="noExtension"></td>
</tr>
<tr>
<td  class="fileQuestions">Un valor aleatorio entre 0 y 200 (utiliza el objeto Math)</td>
<td  class="fileAnswer" id="aleatori"></td>
</tr><tr>
<td class="fileQuestions">Sistema operativo del ordenador.</td>
<td class="fileAnswer" id="sO"></td>
</tr>
</table>`;
tabla.innerHTML=table;
//--------------------------------------------------------------------


const min=Number.MIN_SAFE_INTEGER;
valorMaximo.innerHTML=min;

const max=Number.MAX_SAFE_INTEGER;
valorMinimo.innerHTML=max;

let altPantalla=screen.height;
altoPantalla.innerHTML=altPantalla;

let ancPantalla=screen.width;
anchoPantalla.innerHTML=ancPantalla;

let altWeb=document.documentElement.scrollHeight;
altoWeb.innerHTML=altWeb;
let ancWeb=document.documentElement.scrollWidth;
anchoWeb.innerHTML=ancWeb;

let nomUrl=location.href;
let largoDetras='/index.html'.length;
let largoDelante='https://'.length-1;
url.innerHTML=nomUrl;
let conExtension=(nomUrl.substring(largoDelante,nomUrl.length));
let sinExtension=(nomUrl.substring(largoDelante,nomUrl.length-largoDetras));
const title=document.querySelector('title');
siExtension.innerHTML=conExtension;
noExtension.innerHTML=sinExtension;

let valorAleatori = Math.random()*(200-0);
aleatori.innerHTML=valorAleatori;


let so=navigator.userAgentData.platform;
sO.innerHTML=so;

//3. Utiliza JavaScript para detectar si el navegador tiene activadas las Cookies con un window.confirm. En tal caso muestra un mensaje en el código HTML que informe al usuario que permanecer en la web conlleva aceptar el uso de cookies. Si no acepta tienes que redirigirlo a otra página.
//codi al començament da la pàgina

//4. Pide mediante un “prompt” un título para la página web. Si el usuario no introduce ningún valor o bien clica en el botón “cancelar” vuélvelo a pedir hasta que introduzca un valor válido. Por último utiliza un método del objeto String para pasar el valor introducido a mayúsculas y utiliza un método del objeto document para establecer el valor en mayúscula como el nuevo título de la página web.

let titol='';
while (titol.length == 0 || /^\s+$/.test(titol)){
    titol=prompt('Dime un título para la página web').toLocaleUpperCase();
}
const def=document.title=titol;
console.log(def);
alert(`El nuevo título de la página es ${def}`);





//5. Crea un nuevo documento HTML de nombre “ventana.html”,un nuevo JavaSCript de nombre “ventana.js” y asócialos.
//6. Utiliza el objeto Window de JavaScript para abrir una nueva ventana con la web “ventana.html”. Debe tener: a. barras de desplazamiento y unas medidas aleatorias entre 200 y 500 de altura y anchura
document.getElementById('nuevaVentana').onclick=function novaFinestra() {
    let ventana="./ventana.html"
    let midaW=200+Math.random()*(301);
    let midaH=200+Math.random()*(301);
    const myWindow = window.open(ventana,'',`width=${midaW},height=${midaH}`,'scrollbars=yes');

    //myWindow.document.write(ventana);
}
//7. Muestra en “ventana.html” la hora, minutos, y segundos mas un mensaje “buenos dias” si la hora >= 6:00 y hora <=14:00, muestra “buenas tardes” si la hora >14:00 y hora <20:00 y buenas noches en caso contrario.
//codi a ventana.js

//8. Cuando la nueva ventana “ventana.html” se abra, programa desde el JavaScript “ventana.js” que se pida por “prompt” una nueva dirección HTML y modifica la dirección HTML de la ventana principal o padre por la dirección introducida.