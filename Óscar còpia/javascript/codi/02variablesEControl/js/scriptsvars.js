/*   let vidasRestantes = 3;
          let numero = Number(prompt("Incremento de vidas"));
          alert(`El numero introduit es ${numero}`);
          console.log(`El numero introduit es ${numero}`);
          let resul = numero + vidasRestantes;
          alert(`Vidas restantes: ${resul}`);
          console.log(`Vidas restantes: ${resul}`); */

/* var hola = "Hola mundo";
            let hello = "Hello world";

            console.log(hola, hello);
            hola = 2;
            console.log(window.hola, window.hello);

            function testVar() {
                console.log(hola);
                hola = 30;
                console.log(hola);
                if (hola) {
                    hola = 80;
                    console.log(hola);
                }
            }
            testVar();
            console.log(hola);

            function testLet() {
                console.log(hello);
                let hello = 30;
                console.log(hello);
                if (hello) {
                    hello = 80;
                    console.log(hello);
                }
            }
            testLet();
            console.log(hello); */

let variable1 = 10;

function salir() {
  location.replace("https://w3schools.com");
}

let resul = prompt("indica un numero");
console.log(typeof resul);
/*     let resul = variable1 + variable2; */
if (resul > 20) {
  console.log(`Resultado mayor que 20`);
} else if (resul < 20) {
  console.log(`Resultado menor que 20`);
} else if (resul === 20) {
  console.log(`Resultado es igual a 20`);
} else {
  console.log(`No puedo averiguarlo`);
}

let recarga = confirm("¿Quieres volver a cargar el documento?");
if (recarga) {
  location.reload(true);
}
/* else {
  salir();
} */
