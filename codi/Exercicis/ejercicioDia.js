/* 5. Crea i vincula amb l'HTML un nou document Javascript amb el nom “ejercicioDia.js” que demani per “prompt()” el nom del dia de la setmana (pej: “dilluns”, “dimarts”, etc..) el dia serà convertit a caixa alta per verificar el dia introduït i utilitzant una estructura de control “switch” emmagatzemi en una variable el número del dia corresponent començant per dilluns i una vegada finalitzat el “switch” mostri un “alert(), i en una div, indicant el número de la setmana corresponent. pej: si s'introdueix “dilluns”, s'ha de mostrar el missatge “dia de la setmana 1”, si s'introdueix “diumenge”, s'ha de mostrar el missatge “dia de la setmana 7”.
Afegeix com a mínim un comentari que indiqui com és la finalitat del codi escrit. */

/* let numDia=0; */
dia=prompt('Introdueix un dia de la setmana').toUpperCase();
console.log(dia);
switch (dia){
    case ('DILLUNS'):
        numDia=1;
        break;
    case('DIMARTS'):
        numDia=2;
        break;
    case('DIMECRES'):
        numDia=3;
        break;
    case('DIJOUS'):
        numDia=4;
        break;
    case('DIVENDRES'):
        numDia=5;
        break;
    case('DSSABTE'):
        numDia=6;
        break;
    case('DIUMENGE'):
        numDia=7;
        break;
}

alert(`${dia} és el dia de la setmana número ${numDia}`);
document.getElementById("dia").innerHTML=`${dia} és el dia de la setmana número ${numDia}`;