/* Crea i vincula amb l'HTML un nou document Javascript amb el nom “ejercicioSupInf.js” que demani dos números a l'usuari mitjançant dos “prompt()” i mostri un “alert()” indicant quin dels dos és superior i quin inferior, tret que els dos siguin iguals, en tal cas ha d'indicar que els dos són iguals. En tots els casos s'han de mostrar els números introduïts. */

num1=Number(prompt('Digue\'m un número'));
document.write(num1);

while (num1 == null || /\D/.test(num1) || num1 == "") {
    num1 = prompt("Ha de ser un número!\nEscriu un número") 
    };
    
num2=Number(prompt('Digue\'m un altre número'));
while (num2 == null || /\D/.test(num2) || num2 == "") {
    num2= prompt("Ha de ser un número!\nEscriu un número") 
    };

if(num1>num2){
 alert(`${num1} es més gran que ${num2}`)
}else if(num2>num1){
    alert(`${num2} es més gran que ${num1}`)
}else{
    alert ('Els números són iguals')
};

