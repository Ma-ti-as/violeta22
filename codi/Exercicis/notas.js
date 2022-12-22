/* Realiza un programa que nos pida por prompt una nota de un alumno entre 0 y 10 puntos, recojerá la nota y nos dirá :
    1- Suspenso (entre 0 y menos que 5)
    2- Aprobado (entre 5 y mrenos que 6)
    3-Bien (entre 6 y menos que 7)
    4- Notable (entre 7 y menos que 9)
    5- Sobresaliente (de 9 a 10 incluidos) 

    Realiza otro programa que nos pida por prompt una nota de un alumno entre 0 y 10 puntos,  luego otra y no  devuelva la nota mitjana de los dos elercicios con los mismos parámetros que el programa anterior. -->
 */

/* num=prompt('Dame una nota entre 0 y 10');
num1=num.replace(',','.');
if (isNaN(num1)){
    num=prompt('Pon un número!\nDame una nota entre 0 y 10');
    num1=num.replace(',','.');
}



if(num1<5){
    alert(`Un ${num1} es un suspenso`);
}else if(num1==5){
    alert(`Un ${num1} es un aprobado`);
}else if(num1==6){
    alert(`Un ${num1} es un bien`);
}else if(num1>=7&&num1<=8){
    alert(`Un ${num1} es un notable`)
}else if(num1>=9){
    alert(`Un ${num1} es un sobresaliente`)}  */




numDos=Number(prompt('Dame una nota entre 0 y 10').replace(',','.'));
while(isNaN(numDos)||numDos<0||numDos>10||numDos==""){
    numOut2=prompt('Pon un número entre 0 y 10!').replace(',','.');
    numDos=Number(numOut2);
}

let numTres=Number(prompt('Dame otra otra entre 0 y 10').replace(',','.'));
while (isNaN(numTres)||numTres<0||numTres>10||numDos==""){
    numOut3=prompt('Pon un número entre 0 y 10').replace(',','.');
    numTres=Number(numOut3);
}


let mitjana=(numDos+numTres)/2;
let sum=numDos+numTres;
console.log(numDos+'\n');
console.log(numTres+'\n');
console.log(sum);
console.log(mitjana);
    
if(mitjana<5){
    alert(`La nota mitjana entre ${numDos} y ${numTres} es un ${mitjana}, esto es un suspenso`);
}else if(mitjana==5 || mitjana<6){
    alert(`La nota mitjana entre ${numDos} y ${numTres} es un ${mitjana}, esto es un aprobado`);
}else if(mitjana==6 || mitjana<7){
    alert(`La nota mitjana entre ${numDos} y ${numTres} es un ${mitjana}, esto es un bien`);
}else if(mitjana>=7&&mitjana<=8){
    alert(`La nota mitjana entre ${numDos} y ${numTres} es un ${mitjana}, esto es un notable`)
}else if(mitjana>=9){
    alert(`La nota mitjana entre ${numDos} y ${numTres} es un ${mitjana}, esto es un sobresaliente`)}