//Escribe un html que pida por un input de texto, un texto, guárdalo como un objeto String y que nos permita saber el número de caracteres escritos, que nos permita re- escribirlo en cursiva, en negrita, en color rojo, a un tamaño muy grande, y finalmente tachado



document.getElementById('canviTipus').onclick=function(){
    let valor= document.querySelector("#texto2").value;
    let elemento;
    let estilo=document.querySelector("#tipus").value;
        
    switch(estilo){
            case 'cursiva':
                elemento=valor.italics();
                break;
            case 'negrita':
                elemento=valor.bold();
                break;
            case 'rojo':
                elemento=valor.fontcolor('red');
                break;
            case 'cuerpo':
                elemento=valor.big();
                break;
            case 'tachado':
                elemento=valor.strike();
                break;
    }
    mostrarFrase.innerHTML=`${elemento} tiene${valor.length} caracteres`;
}
    
  



