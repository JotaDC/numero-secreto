let numeroSecreto=0;
let intentos=0;
let numerosSorteados=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto){
    let elementoHtml=document.querySelector(elemento);
    elementoHtml.innerHTML=texto; 
}

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById("valorUsuario").value);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos==1?'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        //El usuario no acertó
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p',"El numero secreto es menor");
        }else{
            asignarTextoElemento('p',"El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
        //document.getElementById("valorUsuario").onfocus();
    }

}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto actualizado");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}` );
    numeroSecreto=generarNumeroSecreto(1,numeroMaximo);
    intentos=1;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje intervalo de numeros
     //Generar numero aleatorio
    //inicializar intentos
    condicionesIniciales();
    //deshabilitar el boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value="";
    
}

function generarNumeroSecreto(inicio, maximo){
     let numero=Math.floor(Math.random()*maximo)+inicio;
       //si ya sorteamos todos los numeros
       if(numerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p',"Ya se sortearon todos los numeros psibles");
       }else{
        if(numerosSorteados.includes(numero)){
            return generarNumeroSecreto(inicio,maximo);
        }else{
            numerosSorteados.push(numero); 
            console.log(numerosSorteados)
            return numero;
        }
        }
       
       
}


condicionesIniciales();
