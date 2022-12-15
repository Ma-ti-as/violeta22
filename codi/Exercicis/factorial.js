

num=Number(prompt('Dame un número:'));
while (num == null || /\D/.test(num) || num == "") {
    num = prompt("Ha de ser un número!\nEscriu un número") 
    };
numEntrat=num;
factorial=1;

// For loop

/* for(i=num; i>0; i--){
    factorial=factorial*i;
}
document.write(factorial); */



// While loop

/* while (num2 > 1){
    factorial = factorial * num2
    num2 = num2 - 1;}
    document.write(factorial); */


    
//Do while loop

do{
    factorial = factorial * num
    num = num - 1;
    console.log(num);
}
while(num>1);document.write(`El factorial de ${numEntrat} es ${factorial}`);

