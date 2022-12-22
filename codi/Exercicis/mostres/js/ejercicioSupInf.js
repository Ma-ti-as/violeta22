let n1 = Number(prompt("Introduce un primer número"));
let n2 = Number(prompt("Introduce el segundo número"));

if (!Number(n1) || !Number(n2)) {
  alert("Pillin me quieres engañar. Introduce números");
  location.reload();
} else {
  if (n1 > n2) {
    alert(n1 + " es mayor que " + n2);
  } else if (n2 > n1) {
    alert(n2 + " es mayor que " + n1);
  } else {
    alert(n2 + " es = a " + n1);
  }
}

// let salirono = confirm("Volver a cargar la app?");
// if (salirono) {
//   location.reload();
// }
