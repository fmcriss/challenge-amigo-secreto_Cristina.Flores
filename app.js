// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let amigoAgregado = document.getElementById('amigo').value;
    
    if (amigoAgregado !== "") {
        listaAmigos.push(amigoAgregado);
        actualizarLista();
        document.getElementById('amigo').value = ""; // Limpiar el input
    } else {
        alert("Por favor ingresa un nombre válido.");
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaAmigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return null;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    return listaAmigos[indiceAleatorio];
}

function mostrarSorteo() {
    let amigoSorteado = sortearAmigo();
    if (amigoSorteado) {
        // Mostrar el nombre del amigo sorteado en el resultado
        asignarTextoElemento('#resultado', `El amigo sorteado es: ${amigoSorteado}`);
    } else {
        // Si no hay amigos en la lista, mostrar un mensaje
        asignarTextoElemento('#resultado', 'No hay amigos para sortear.');
    }
}

asignarTextoElemento('h1', 'Juego del Amigo Secreto');
asignarTextoElemento('h2', 'Agrega el nombre de tus amigos');