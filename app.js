// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombreAmigos = [];
let lista = document.getElementById('listaAmigos');

// Esta funcion es para capturar y agregar el nombre del nuevo amigo.
function agregarAmigo() {
    if (document.getElementById('amigo').value == "" || listaNombreAmigos.includes(document.getElementById('amigo').value)) {
        if (document.getElementById('amigo').value == "") {
            alert("Por favor, inserte un nombre.");
        }
        if (listaNombreAmigos.includes(document.getElementById('amigo').value)) {
            alert(`No puedes agregar de nuevo a ${document.getElementById('amigo').value}, ya lo agregaste antes`);
        }
    } else {
        listaNombreAmigos.push(document.getElementById('amigo').value);
        
        listarNombres();
    }
    document.querySelector('#amigo').value = "";
    
    //console.log(listaNombreAmigos);
    return;
}

//Esta funcion creara la lista de amigos que se han introduccido.
function listarNombres() {
    let lista = document.getElementById('listaAmigos');
    // Esto Limpiara la lista antes de agregar los nuevos elementos
    lista.innerHTML = "";

    // recorro la lista  de amigos y agregar un <li> por cada uno
    for (let i = listaNombreAmigos.length; i >= 0; i--) {
        let li = document.createElement('li');
        li.textContent = listaNombreAmigos[i];  // Asignar el nombre del amigo al <li>
        lista.appendChild(li);  // esto para agregar  el <li> a la lista <ul>
    }
    return;
}

//Esta es la funcion para sortear el amigo secreto
function sortearAmigo() {
    let longitudArray = listaNombreAmigos.length;
    let numeroAleatorio = 0;
    let lista = document.getElementById('resultado');

    if (listaNombreAmigos.length != 0) {
        numeroAleatorio = Math.floor(Math.random() * longitudArray);

        lista.innerHTML = "";
        //listarNombres(listaNombreAmigos[numeroAleatorio]);

        let li = document.createElement('li');
        li.textContent = `El amigo secreto es: ${listaNombreAmigos[numeroAleatorio]}`;
        lista.appendChild(li);
    } else {
        alert("Primero deves agregar algunos amigos a la lista");
    }
    //console.log(longitudArray);
    //console.log(numeroAleatorio);
    return;
}

// Verifico si se presiona la tecla Enter ya que es mas facil que darle al boton para agregar
document.getElementById('amigo').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});