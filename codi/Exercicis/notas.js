/* Realiza un programa que nos pida por prompt una nota de un alumno entre 0 y 10 puntos, recojerá la nota y nos dirá :
    1- Suspenso (entre 0 y menos que 5)
    2- Aprobado (entre 5 y mrenos que 6)
    3-Bien (entre 6 y menos que 7)
    4- Notable (entre 7 y menos que 9)
    5- Sobresaliente (de 9 a 10 incluidos) 

    Realiza otro programa que nos pida por prompt una nota de un alumno entre 0 y 10 puntos,  luego otra y no  devuelva la nota media de los dos elercicios con los mismos parámetros que el programa anterior. -->
 */

/* num1=prompt('Dame una nota entre 0 y 10');


if(num1<5){
    alert(`Un ${num1} es un suspenso`);
}else if(num1==5){
    alert(`Un ${num1} es un aprobado`);
}else if(num1==6){
    alert(`Un ${num1} es un bien`);
}else if(num1>=7&&num1<=8){
    alert(`Un ${num1} es un notable`)
}else if(num1>=9){
    alert(`Un ${num1} es un sobresaliente`)} */


    num2=Number(prompt('Dame una nota entre 0 y 10'));
    num3=Number(prompt('Dame una otra entre 0 y 10'));
    media=(num2+num3)/2;
    document.write(media);
    if(media<5){
        alert(`La nota media es un ${media}, esto es un suspenso`);
    }else if(media==5){
        alert(`La nota media es un ${media}, esto es un aprobado`);
    }else if(media==6){
        alert(`La nota media es un ${media}, esto es un bien`);
    }else if(media>=7&&media<=8){
        alert(`La nota media es un ${media}, esto es un notable`)
    }else if(media>=9){
        alert(`La nota media es un ${media}, esto es un sobresaliente`)}