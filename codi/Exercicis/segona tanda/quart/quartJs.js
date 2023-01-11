/* Escribe un html que permita abrir desde un botón, una ventana controlada desde javascript , escribiendo el html necesario para mostrar un texto con las propiedades utilizadas y un botón que permita cerrar la nueva ventana. */

let novaPagina=`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Nova finestra creada per JavaScript</h1>
    <p>Codi fet servir:</p>
    <p>document.getElementById('demoQuart').onclick=function novaFinestra() {<br>
        const myWindow = window.open();<br>
        myWindow.document.write(novaPagina);<br>
    }
    </p>
    <h3>Botó per tancar finestra</h3>
    <button id="tancar" onclick="cerrarse()">Tancar</button>
    <script>
            function cerrarse(){
                window.close()
            }
    </script>
</body>

</html>`;
document.getElementById('demoQuart').onclick=function novaFinestra() {
    const myWindow = window.open();
    myWindow.document.write(novaPagina);
   
}


    