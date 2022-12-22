const error = document.querySelector("#error");
const m1 = document.querySelector("#mostra1");
const m2 = document.querySelector("#mostra2");
const m3 = document.querySelector("#mostra3");
const m4 = document.querySelector("#mostra4");
const m5 = document.querySelector("#mostra5");
const m6 = document.querySelector("#mostra6");

const formu = document.firstContact;
const ptremail =
  /^[a-z0-9_-]+([.][a-z0-9_-]+)*@[a-z0-9_]+([.][a-z0-9_]+)*[.][a-z]{2,9}$/;
const ptrasunto = /^[A-Za-zÀ-ÿ-\u00f1\u00d1\s]{5,40}$/;
const pdni = /^[XYZ]?\d{5,8}[A-Z]{1}$/;
/* const tel=/\d{9}/  */
const ptrcontent = /[A-Za-zÀ-ÿ-\u00f1\u00d1\s]{10,250}$/;

formu.addEventListener("submit", (e) => {
  const mymail = mail();
  const myasunto = asunt();
  const acepto = vCheck();
  const mydni = cDni();
  const mycontent = content();
  const myedad = edad();

  if (!mymail || !myasunto || !acepto || !mydni || !mycontent || !myedad) {
    e.preventDefault();
    error.innerHTML =
      "ERRORUM   No se ha podido enviar el formulario. Por favor, revisa que todos los campos estén rellenados correctamente.";
    error.style.color = "#FF0000";
    return false;
  } else {
    formu.submit();
  }
});

const avisoReset = () => {
  const reset = confirm(
    "ATENCIÓN!!!!!!!\nSi confirmas, se borraran todos los datos del formulario"
  );
  /*   if (!reset) { return false;
  } else {
    return true;
  } */
  reset ? location.reload(true) : false;
};

const mail = () => {
  let correo = formu.email.value;
  if (!correo.match(ptremail)) return false;
  return true;
};

const asunt = () => {
  let asunto = formu.asunto.value;
  if (!asunto.match(ptrasunto)) return false;
  return true;
};

const cDni = () => {
  let rdni = formu.dni.value;
  rdni = rdni.toUpperCase();
  let numero, let1;
  let resul = rdni.match(pdni);
  let letra = "TRWAGMYFPDXBNJZSQVHLCKE";

  if (resul) {
    numero = rdni.substr(0, rdni.length - 1);
    numero = numero.replace("X", 0);
    numero = numero.replace("Y", 1);
    numero = numero.replace("Z", 2);
    let1 = rdni.substr(rdni.length - 1, 1);
    numero = numero % 23;
    letra = letra.substring(numero, numero + 1);
    if (letra !== let1) return false;
    return true;
  } else {
    return false;
  }
};

const edad = () => {
  let fechaNacimiento = formu.miedad.value;
  let fechaNace = new Date(fechaNacimiento);
  let fechaActual = new Date();

  let mes = fechaActual.getMonth();
  let dia = fechaActual.getDate();
  let año = fechaActual.getFullYear();

  fechaActual.setDate(dia);
  fechaActual.setMonth(mes);
  fechaActual.setFullYear(año);

  let mi_edad = Math.floor(
    (fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365
  );
  if (mi_edad >= 18) return true;
  return false;
};

const content = () => {
  let content = formu.contenido.value;
  if (!content.match(ptrcontent)) return false;
  return true;
};

const vCheck = () => {
  let aceptar = formu.acepto.checked;
  if (!aceptar) return false;
  return true;
};

const pasaValor = (e) => {
  let result;
  switch (e.target.name) {
    case "email":
      result = mail();
      if (result) {
        m1.innerHTML = " Email correcto";
        m1.style.color = "#068B3E";
        formu.email.style.border = "solid 2px green";
      } else {
        m1.innerHTML = "Email no válido. se esperaba una (@) y un (.)";
        m1.style.color = "#FF0000";
        formu.email.style.border = "solid 2px red";
      }
      break;
    case "asunto":
      result = asunt();
      if (result) {
        m2.innerHTML = ". Asunto dentro de parámetros";
        m2.style.color = "#068B3E";
        formu.asunto.style.border = "solid 2px green";
      } else {
        m2.innerHTML = ". Asunto no válido. SE SIENTEEEEE";
        m2.style.color = "#FF0000";
        formu.asunto.style.border = "solid 2px red";
      }
      break;
    case "acepto":
      result = vCheck();
      if (result) {
        m6.innerHTML = " Correcto";
        m6.style.color = "#068B3E";
      } else {
        m6.innerHTML = "Incorrecto. No válido";
        m6.style.color = "#FF0000";
      }
      break;
    case "contenido":
      result = content();
      if (result) {
        m3.innerHTML = ". Contenido válido";
        m3.style.color = "#068B3E";
        formu.contenido.style.border = "solid 1px green";
      } else {
        m3.innerHTML = ". Contenido no válido. SE SIENTEEEEE";
        m3.style.color = "#FF0000";
        formu.contenido.style.border = "solid 1px red";
      }
      break;
    case "miedad":
      result = edad();
      if (result) {
        m4.innerHTML = "Tienes más de 18 años";
        m4.style.color = "#068B3E";
        formu.miedad.style.border = "solid 1px green";
      } else {
        m4.innerHTML = "No puedes registrarte porque tienes menos de 18 años";
        m4.style.color = "#FF0000";
        formu.miedad.style.border = "solid 1px red";
      }
      break;
    case "dni":
      result = cDni();
      if (result) {
        m5.innerHTML = "DNI válido";
        m5.style.color = "#068B3E";
        formu.dni.style.border = "solid 1px green";
      } else {
        m5.innerHTML = "DNI o NIE no válido";
        m5.style.color = "#FF0000";
        formu.dni.style.border = "solid 1px red";
      }
      break;
  }
};

/* const listeners = [
  formu.email,
  formu.asunto,
  formu.contenido,
  formu.miedad,
  formu.dni,
  formu.acepto,
]; */
formu.acepto.addEventListener("click", pasaValor);
formu.addEventListener("blur", pasaValor);
/* formu.asunto.addEventListener("keyup", pasaValor);
 for (const listener of listeners)
  listener.addEventListener("keyup", pasa_valor); */

formu.borrar.addEventListener("click", avisoReset);
