//1. Crea un html que per mitjà d'una funció et demani un número per camp de text i et digui si és nombre parell o imparell
const a=document.querySelector('#viewParImpar');
const mostrarParImpar=()=>{
    a.innerHTML=`<div >Introduce un número</div>
    <input id="parImpar" type="text">
    <button id="enviarParImpar">verificar</button>
    <button id="cerrarParImpar">cerrar</button>
    <div id="resultadoParImpar"></div>`;
const parImpar=()=>{
    
    const full=document.querySelector('#parImpar').value;
    if(full%2==0){
        resultadoParImpar.innerHTML='par';
    }else{
        resultadoParImpar.innerHTML='impar';
    }
};
document.querySelector('#enviarParImpar').onclick=parImpar;

const b=document.querySelector('#cerrarParImpar');
b.onclick=()=>a.innerHTML='';
};
document.querySelector('#mostrarParImpar').onclick=mostrarParImpar;

//2. Escriu un html que et demani per funció i des d'un camp de text, el resultat de dividir 144/12, Aquest resultat es calcula en una altra funció i és recollit en aquesta primera per deixar passar a l'usuari o no segons la seva resposta.
const e=document.querySelector('#viewVerificar');
const mostrarVerificar=()=>{
e.innerHTML=`<div >Cuál es el resultado de 144/12?</div>
    <input id="respestaVerificar" type="text">
    <button id="enviarVerificar">verificar</button>
    <button id="cerrarVerificar">cerrar</button>
    <div id="resultadoVerificar"></div>`;

    const verificar=()=>{
        let comprobar=document.querySelector('#respestaVerificar').value;
        if(comprobar==12){
            alert('Respuesta correcta, puedes pasar');
        }else{alert('Respuesta incorrecta, no puedes pasar');}
     
    };

    document.querySelector('#enviarVerificar').onclick=verificar;
    const f=document.querySelector('#cerrarVerificar');
    f.onclick=()=>e.innerHTML='';}
document.querySelector('#mostrarVerificar').onclick=mostrarVerificar;

//3. Escriu un html que demani preu sense iva, després el iva i et retorni el valor del producte amb iva, tot això amb camps de text i una funció.

const c=document.querySelector('#viewIva');
const mostrarIva=()=>{
    c.innerHTML=`<div >Introduce un precio</div>
    <input id="precio" type="text">
    <div >Introduce un valor IVA</div>
    <input id="iva" type="text">
    <button id="enviarIva">verificar</button>
    <button id="cerrarIva">cerrar</button>
    <div id="resultadoIva"></div>`;
const iva=()=>{
    
    let iva=parseFloat(document.querySelector('#iva').value);
    let precio=parseFloat(document.querySelector('#precio').value);
    let precioFinal=precio*(iva/100)+precio;
    
    resultadoIva.innerHTML=precioFinal;
   
};
document.querySelector('#enviarIva').onclick=iva;
const d=document.querySelector('#cerrarIva');
d.onclick=()=>c.innerHTML='';
};
document.querySelector('#mostrarIva').onclick=mostrarIva;

//4. Escriu un programa que demani un primer número, ens permeti triar d'un select: suma, resta, multiplica, divideix, o mòdul, després ens demani un segon número i ens doni el resultat de l'operació seleccionada. Tot això amb camps de text i select.

const g=document.querySelector('#viewOperacio');

const mostrarOperacio=()=>{
    g.innerHTML=`<div >Introduce un número</div>
    <input id="num1" type="text"><br>
    <select id="tipoOperacio" name="tipus">
                <option>Escoge operación</option>
                <option value="suma" >Sumar</option>
                <option value="resta">Restar</option>
                <option value="multiplica">Multiplicar</option>
                <option value="divide">Dividir</option>
                <option value="modulo">Módulo</option>
            </select>
    <div >Introduce otro número</div>
    <input id="num2" type="text">
    <button id="enviarOperacio">Calcular</button>
    <button id="cerrarOperacio">cerrar</button>
    <div id="resultadoOperacio"></div>`;

    const operador=()=>{
        let operacion=document.querySelector("#tipoOperacio").value;
        let num1=parseInt(document.querySelector('#num1').value);
        let num2=parseInt(document.querySelector('#num2').value);
        let resultadoOperacion;
        switch(operacion){
        case 'suma':resultadoOperacion=num1+num2;
        break;
        case 'resta':resultadoOperacion=num1-num2;
        break;
        case 'multiplica':resultadoOperacion=num1*num2;
        break;
        case 'divide':resultadoOperacion=num1/num2;
        break;
        case 'modulo':resultadoOperacion=num1%num2;
        break;
    }
    const resultadoOperacio = document.querySelector("#resultadoOperacio");
        resultadoOperacio.innerHTML=resultadoOperacion;
    }
    document.querySelector('#enviarOperacio').onclick=operador;
    document.querySelector('#cerrarOperacio').onclick=()=>{g.innerHTML='';}
    
};
    document.querySelector('#mostrarOperacio').onclick=mostrarOperacio;

 /*    5. Crea un html que ens permeti recollir un array amb els mesos de l'any ja fet i el mostrem: 
a- En la seva ordre real
b- En ordre alfabètic
c- Separat amb guions
d- Ordre invers
e- Separat amb un altre caràcter que eu decideixis. */

const meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];


const i=document.querySelector('#viewMeses');
const mostrarMeses=()=>{
    i.innerHTML=`<div >Muestra de los meses del año</div>
    
    <p>${meses}</p>  <p>${[...meses].sort()}</p> <p>${meses.join('-')}</p> <p>${[...meses].reverse()}</p> <p>${meses.join(';-)')}</p>
    <button id=mesesCerrar>Cerrar</button>`;
    const j=document.querySelector('#mesesCerrar');
    j.onclick=()=>i.innerHTML='';}
    
    document.querySelector('#mostrarMeses').onclick=mostrarMeses;

    /* 6. Crea un nou document HTML que ens imprimeixi en pantalla un llistat dels codis d'un
    producte inventat... “codigo_producte 0 , codigo_producte 1...... */

    const k=document.querySelector('#viewCodigo');
    const mostrarCodigo=()=>{
    k.innerHTML=`<div >Introduce un número de productos</div>
    <input id=numProductos type="text">
    <button id=codigosGenerar>Generar Códigos</button>
    <button id=codigosCerrar>Cerrar</button>`;

    
    
    const crearCodigo=()=>{
    const num4=document.querySelector('#numProductos').value;
    let productos=new Array();
    for(let i=0;i<num4;i++){
        productos[`producto${i}`]=`${i}`;
    };
    let productosCreados = "";
    for(elementos in productos) {
    productosCreados +=`<p>${elementos} - Código:${productos[elementos]}</p>`
    };
    viewCodigo.innerHTML=productosCreados;
 
    

}
    const j=document.querySelector('#codigosCerrar');
    j.onclick=()=>k.innerHTML='';

    document.querySelector('#codigosGenerar').onclick=crearCodigo;
};
document.querySelector('#mostrarCodigo').onclick=mostrarCodigo;


