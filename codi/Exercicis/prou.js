let dni="44009273S";
let num=dni.substring(0,8)%23;
console.log(dni);
console.log(dni.charAt(8));
let letra="TRWAGMYFPDXBNJZSQVHLCKET";
let letraCorrecta=letra.charAt(num);
console.log(letraCorrecta);
if(dni.length=9 && dni.charAt(8)==letraCorrecta){
    console.log("dni válido")
}else{
    console.log("no vale")
};