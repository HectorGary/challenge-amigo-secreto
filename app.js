// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombreAmigos = [];
// Esta funcion es para capturar y agregar el nombre del nuevo amigo.
function agregarAmigo(){
    if(document.getElementById('amigo').value == "" || listaNombreAmigos.includes(document.getElementById('amigo').value)){
        if(document.getElementById('amigo').value == ""){
            alerta("El nombre no es valido, el campo esta vacio");
        }
        if(listaNombreAmigos.includes(document.getElementById('amigo').value)){
            alerta(`No puedes agregar de nuevo a ${document.getElementById('amigo').value}, ya lo agregaste antes`);
        }
    } else{
        listaNombreAmigos.push(document.getElementById('amigo').value);    
        document.createElement('li', document.getElementById('amigo').value);
        mostralnombres('listaAmigos', document.getElementById('amigo').value);
    } 
    limpiarInput();
   // console.log(nombreAmigos.length());
    console.log(listaNombreAmigos);
}

// Verifico si se presiona la tecla Enter 
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      agregarAmigo();
    }
});

//Esta funcion mostrara mensajes de alerta segun se requieran.
function alerta(mensaje){
    alert(mensaje);
}

function sortearAmigo(){

}

function limpiarInput(){
    document.querySelector('#amigo').value = "";
}

function mostralnombres(elemento, texto) {
    let elementoHTML = document.querySelector(`#${elemento}`);
    elementoHTML.innerHTML = texto;
    return;
}


