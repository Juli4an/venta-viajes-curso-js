import { barcelona,roma,paris,londres} from './ciudades.js'

// obtener elementos del DOM 

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// Agreagr el evento click a cada enlace

enlaces.forEach(function(enlace){
    enlace.addEventListener('click',function () {
        // remover clase activa de todos los enlaces 
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        })
        // agregar las clase 'activa' al enlace actual 
        this.classList.add('active')
        // obtener el contenido correspondiente segun el enlace 
        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio


    })
})
// Funcion para traer informacion correcta de ciudades.js

function obtenerContenido(enlace){
    let contenido ={
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}
