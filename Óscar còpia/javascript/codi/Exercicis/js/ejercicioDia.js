let dia = prompt("Introduce un día de la semana en minúsculas. Ej: lunes");
dia = dia.toUpperCase();
console.log(dia);
let result;
let ndia = 0;
switch (dia) {
  case "LUNES":
    result = "Has introducido " + dia + " y es el día número " + (ndia + 1);
    break;
  case "MARTES":
    result = "Has introducido " + dia + " y es el día número " + (ndia + 2);
    break;
  case "MIERCOLES":
    result = "Has introducido " + dia + " y es el día número " + (ndia + 3);
    break;
  case "JUEVES":
    result = "Has introducido " + dia + " y es el día número " + (ndia + 4);
    break;
  case "VIERNES":
    result = "Has introducido " + dia + " y es el día número " + (ndia + 5);
    break;
  case "SABADO":
    result = "Has introducido " + dia + " y es el día número " + (ndia + 6);
    break;
  case "DOMINGO":
    // alert("Has introducido " + dia + " y es el día número " + (ndia + 1));
    result = "Has introducido " + dia + " y es el día número " + (ndia + 7);
    break;
  default:
    result = "Introduce un día de la semana correcto";
    break;
}
alert(result);

function salir() {
  location.replace("https://www.w3schools.com");
}

let salirono = confirm("Volver a cargar la app?");

if (salirono) {
  location.reload();
} else {
  salir();
}
