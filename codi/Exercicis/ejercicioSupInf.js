/* Crea i vincula amb l'HTML un nou document Javascript amb el nom “ejercicioSupInf.js” que demani dos números a l'usuari mitjançant dos “prompt()” i mostri un “alert()” indicant quin dels dos és superior i quin inferior, tret que els dos siguin iguals, en tal cas ha d'indicar que els dos són iguals. En tots els casos s'han de mostrar els números introduïts. */

num1=prompt('Digue\'m un número');
num2=prompt('Digue\'m un altre número');

if(num1>num2){
 alert(`${num1} es més gran que ${num2}`)
}else if(num2>num1){
    alert(`${num2} es més gran que ${num1}`)
}else{
    alert ('Els números són iguals')
};