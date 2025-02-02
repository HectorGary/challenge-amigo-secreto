// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombreAmigos = [];
let lista = document.getElementById('listaAmigos');

// Esta funcion es para capturar y agregar el nombre del nuevo amigo.
function agregarAmigo(){
    if(document.getElementById('amigo').value == "" || listaNombreAmigos.includes(document.getElementById('amigo').value)){
        if(document.getElementById('amigo').value == ""){
            alerta("Por favor, inserte un nombre.");
        }
        if(listaNombreAmigos.includes(document.getElementById('amigo').value)){
            alerta(`No puedes agregar de nuevo a ${document.getElementById('amigo').value}, ya lo agregaste antes`);
        }
    } else{
        listaNombreAmigos.push(document.getElementById('amigo').value);    
        //document.createElement('li', document.getElementById('amigo').value);
        //listarNombres('listaAmigos', document.getElementById('amigo').value);
        listarNombres("");
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
    let longitudArray = listaNombreAmigos.length;
    let numeroAleatorio = 0;

    if(listaNombreAmigos.length != 0){
        numeroAleatorio = Math.floor(Math.random()*longitudArray);
        
        listarNombres(listaNombreAmigos[numeroAleatorio]);
    }else{
        alerta("Primero deves agregar algunos amigos a la lista");
    }
    console.log(longitudArray);
    console.log(numeroAleatorio);
    return;
}

function limpiarInput(){
    document.querySelector('#amigo').value = "";
}

/*function listarNombres(elemento, texto) {
    let elementoHTML = document.querySelector(`#${elemento}`);
    elementoHTML.innerHTML = texto;
    return;
}

function listarNombres(){
    for (let i = 0; i < listaNombreAmigos.length; i++) {
        const element = array[i];
        document.querySelector('#listaAmigos');
    }

    return;
}
*/
function listarNombres(AmigoSecreto) {
    let lista = document.getElementById('listaAmigos');
    // Limpiar la lista antes de agregar los nuevos elementos
    lista.innerHTML = "";
    if(AmigoSecreto == ""){
        // Iterar sobre el arreglo de amigos y agregar un <li> por cada uno
        for (let i = 0; i < listaNombreAmigos.length; i++) {
            let li = document.createElement('li');  // Crear un elemento <li>
            li.textContent = listaNombreAmigos[i];  // Asignar el nombre del amigo al <li>
            lista.appendChild(li);  // Agregar el <li> a la lista <ul>
        }
    }else{
        let li = document.createElement('li');
        li.textContent = AmigoSecreto;
        lista.appendChild(li);
    }
    
  }

