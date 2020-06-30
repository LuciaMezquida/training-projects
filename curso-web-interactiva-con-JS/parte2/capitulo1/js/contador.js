let contadorElemento = document.getElementById('contador-clics');
let boton = document.getElementById('clic-button');
let contadorClics = 0;

function clic() {
  contadorClics++;
  contadorElemento.textContent = contadorClics;
}

boton.addEventListener('click', clic);

let botonDesactivar = document.getElementById('desactivar');
botonDesactivar.addEventListener('click', function() {
  boton.removeEventListener('click', clic);
})





/*
var contadorElt = document.getElementById("contador-clics");
var boton = document.getElementById("clic-button");
var contadorClics = 0;

function clic() {
  contadorClics++;
  contadorElt.textContent = contadorClics;
}

boton.addEventListener("click", clic);

document.getElementById("desactivar").addEventListener("click", function() {
  boton.removeEventListener("click", clic);
})
*/