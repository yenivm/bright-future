
const botonAbriendoMenu = document.getElementById('abriendo-menu');
const contenedorNavegacion = document.getElementById('navegacion');
const botonCerrarMenu = document.getElementById('cerrando-menu');
const contenedorPrincipal = document.getElementById('contenedor-principal');
const fondoNavegacion = document.getElementById('bg-nav');
const body = document.getElementById('body')

function abriendoMenu(){
    contenedorNavegacion.classList.remove('salida-menu');
    contenedorNavegacion.classList.add('entrada-menu');

    fondoNavegacion.classList.add('bg-nav');
    body.classList.add('overflow')
}

function cerrandoMenu(){
    contenedorNavegacion.classList.remove('entrada-menu');
    contenedorNavegacion.classList.add('salida-menu');

    fondoNavegacion.classList.remove('bg-nav');
    body.classList.remove('overflow')
}

botonAbriendoMenu.addEventListener('click', abriendoMenu);
botonCerrarMenu.addEventListener('click', cerrandoMenu)