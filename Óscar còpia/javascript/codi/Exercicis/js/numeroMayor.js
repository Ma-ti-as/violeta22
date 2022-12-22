let num,
	contador = 0,
	error = "";
do {
	num = prompt(error + "Introduce un número");
	error = "ERRORUM. ";
	contador++;
} while (!Number(num > 50));

alert(
	" Número aceptado es " +
		num +
		" Y has introducido un número menor o igual a 50 :  " +
		(contador - 1) +
		" veces."
);
