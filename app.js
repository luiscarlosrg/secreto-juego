//let numeroSecreto=generarNumeroSecreto();
let intentos=0;
let numeroMaximo=10;
let listaNumerosSorteados=[];
let numeroSecreto=generarNumeroSecreto();

//funcion q hace el boton para validar el numero
function intentoUsuario() {
let numeroUsuario=parseInt(document.getElementById('campoUsuario').value);
//console.log(numeroUsuario);
if(numeroUsuario===numeroSecreto){
    intentos++;
    asignarTextoElemento('p',`Felicidades lo lograste en ${intentos}${(intentos==1)?' intento':' intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('intentar').setAttribute('disabled','false');

}else{
//el usuario no acerto
intentos++;
    if(numeroUsuario>numeroSecreto){
        asignarTextoElemento('p','el numero es menor');
    }else{
        asignarTextoElemento('p','el numero es mayor');
    }
limpiaVariable();
//console.log(intentos);
}
return;
}
//funcion que reinicia el juego
function intentoNuevo() {
    limpiaVariable();
    condicionesPrincipales();
    numeroSecreto=generarNumeroSecreto(); 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    document.querySelector('#intentar').removeAttribute('disabled');
    console.log(numeroSecreto);

}
//funcion que limpia el input
function limpiaVariable(){
document.querySelector('#campoUsuario').value='';
}
//funcion para asignar tipo elemento y texto
function asignarTextoElemento(elemento,texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
//funcion para hacer el numero secreto
function generarNumeroSecreto() {
    let numeroGenerado=Math.floor(Math.random()* numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','lo sentimos ya sorteaste todos los numeros posibles');

    
   
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}
//funcion de variables inciales
function condicionesPrincipales(){
intentos=0;
asignarTextoElemento('h1',"Juego del Numero Secreto");
asignarTextoElemento('p',`Ingresa un numero del 1 al ${numeroMaximo}`); 
}
//se llama la funcion inicial
condicionesPrincipales();