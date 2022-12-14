

    function salir(){
        window.open('https://w3schools.com');
        /* location.replace('https://w3schools.com'); */
    }
    resul = (window.prompt("indica un numero"));
    console.log(typeof resul);
    
    if( resul>20 ){
        console.log('Resultado mayor que 20');
    } else if(resul<20){
        console.log('Resultado menor que 20');
    }
    else if(resul===20){
        console.log('Resultado igual a 20');
        
    }
     else{
        console.log('No puedo averigüarlo');
    }

    let recarga=window.confirm('Quieres volver a cargar el documento?')
    if (recarga){
        location.reload(true);/*el true neteja la cache i torna acarregar desde el servidor*/
    }else{
        salir();
    } 


