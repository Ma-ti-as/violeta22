/* 6. Crea i vincula amb l'HTML un nou document Javascript amb el nom “numeroMayor.js” que demani números a l'usuari (per “prompt()”) mentre l'usuari no introdueixi un número superior a 50. A cada error ens mostrarà un feedback indicant-lo. Si l'usuari introdueix un número superior o igual a 50 ha de mostrar un “alert()” amb un missatge que indiqui quantes vegades s'ha introduït un número menor a 50. */
let contador=0;
do{num=prompt('Escriu un número');
contador++;
console.log(num);
console.log(`intents ${contador}`);}
while(num<50)
if(contador<2){
    alert(`Has fet servir ${contador} intent per de escriure un número igual o superior a 50`)
}
else(alert(`Has fet servir ${contador} intents per de escriure un número igual o superior a 50`));