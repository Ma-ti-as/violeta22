/* A partir del método bgColor del document(cambia_color.html) construye un html que permita en un select, seleccionar un color de cuatro y con un botón que reasigne a la página a ese color de fondo. */
document.getElementById('canviColor').onclick=function(){
  let valor= document.querySelector("#colors").value;
  document.querySelector("#tercer").style.background=valor;
}