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
