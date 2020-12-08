let agregarNota;
let tituloNota;
let textoNota;
let temaNota;
let notas = [];

window.addEventListener('load', inicializar, true);

function inicializar(){
    agregarNota=document.getElementById('agregar-nota');
    tituloNota=document.getElementById('titulo-nota');
    textoNota=document.getElementById('texto-nota');
    temaNota=document.getElementById('tema-nota');

    contenedor = document.querySelector('.contenedor-notas');

    agregarNota.addEventListener('clic', addNota, true);
}


function addNota(){
    nuevaNota = {
        titulo: tituloNota.value,
        texto: textoNota.value,
        tema: temaNota.value,
    };
    notas.push(nuevaNota);

    contenedor.innerHTML+="<div class='nota "+nuevaNota.tema+"'><div class='eliminar'>x</div><h2>"+nuevaNota.titulo+"<h2><p>"+nuevaNota.texto+"</p></div>"
}

