const error=document.querySelector("#error");
const badge=document.querySelector("#badge");
const m1=document.querySelector("#mostra1");
const m2=document.querySelector("#mostra2");
const m5=document.querySelector("#mostra5");
const m6=document.querySelector("#mostra6");


const formu=document.firstContact;
const ptremail=/^[a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;
const ptrasunto=/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{5,40}$/;
const pdni=/^[XYZ]?\d{5,8}[A-Z]{1}$/;


formu.addEventListener("submit",(e)=>{
    const mymail=mail();
    const myasunto=asuntos();
    const myacepto=vCheck();
    const mydni=cDni();
 
    if(!mymail||!myasunto||!myacepto||!mydni){
        e.preventDefault();
        error.innerHTML=`error rellena todo bien y bla bla bla `;
        error.style.color="#FF0000";
        
        return false;
    }else{
        formu.submit();
    }
});


const mail=()=>{
    let correo=formu.email.value;
    if (!correo.match(ptremail)){
        
        return false;}
        else{
            
    return true;}
};

const asuntos=()=>{
    let asunto=formu.asunto.value;
    if (!asunto.match(ptrasunto)){
        
        return false;}
        else{
    return true;}
};

const avisoReset=()=>{
    const reset=confirm(
        "CUIDAO, si confirmas se borrará todo"
    );reset?location.reload(true):false;
};
const cDni=()=>{
    let rdni=formu.dni.value;
    rdni=rdni.toUpperCase();
    let numero, let1;
    let resul=rdni.match(pdni);
    let letra="TRWAGMYFPDXBNJZSQVHLCKET";
    if(resul){
        numero=rdni.substr(0,rdni.length-1);
        numero=numero.replace("X",0);
        numero=numero.replace("Y",1);
        numero=numero.replace("Z",2);
        let1=rdni.substr(rdni.length-1,1);
        numero=numero%23;
        letra=letra.substring(numero,numero+1);
        if(letra!==let1)return false;
        return true;
    }else{
        
        return false;
    }

};

const vCheck=()=>{
    let aceptar=formu.acepto.checked;
    if(!aceptar){return false;}
    else{
    return true;}
    };

    /* if(!reset){
        return false;
    }else{
        return true
    }*/

const pasaValor=(e)=>{
    let result;
    switch(e.target.name){
        case "email":
            result=mail();
            if(result){
                m1.innerHTML="Email correcto";
                m1.style.color="#068B3E";
                email.style.border="solid 3px green";}
            else{
                m1.innerHTML="Email no válido y bla bla bla";
                m1.style.color="#FF0000";
                email.style.border="solid 3px red";
                }break;
        case "asunto":
            result=asuntos();
            if(result){
                m2.innerHTML="Asunto correcto";
                m2.style.color="#068B3E";
                asunto.style.border="solid 3px green";}
            else{
                m2.innerHTML="Asunto no válido debe tener entre 2 y 40 caracteres";
                m2.style.color="#FF0000";
                asunto.style.border="solid 3px red";
                }break;
        case "acepto":
            result=vCheck();
            if(result){
                m6.innerHTML="Chek correcto"
                m6.style.color="#068B3E";
                acepto.style.border="solid 3px green";}
            else{
                m6.innerHTML="Debes aceptar";
                m6.style.color="#FF0000";
            }
            break;
        case "dni":
            result=cDni();
            if(result){
                m5.innerHTML="DNI correcto";
                m5.style.color="#068B3E";
                dni.style.border="solid 3px green";}
                else{
                    m5.innerHTML="DNI incorrecto";
                    m5.style.color="#FF0000";
                }
            }
         
    };
/* formu.email.addEventListener("keyup",pasaValor);
formu.asunto.addEventListener("keyup",pasaValor); */
formu.addEventListener("keyup",pasaValor);
formu.acepto.addEventListener("click",pasaValor);
formu.borrar.addEventListener("click", avisoReset);

