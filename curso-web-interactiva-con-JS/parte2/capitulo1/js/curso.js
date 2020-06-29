// EVENTOS

var boton = document.getElementById("boton");

boton.addEventListener("click", function() {
  console.log("Has hecho clic en el botón");
});

// Eliminación del gestor del evento 'click'
// boton.removeEventListener("click", clic);

document.getElementById("boton").addEventListener("click", function(e) {
  console.log(e); // muestra por pantalla el objeto event por consola
  console.log("Evento: " + e.type +
              "\nNodo de texto del objetivo: " + e.target.textContent);
});

// document.addEventListener("keypress", function(e) {
//   console.log(e.key); // muestra por pantalla la tecla pulsada
// });

function infoTecla(e) {
  console.log("Evento: " + e.type + // muestra por pantalla el tipo de evento
              "\n Tecla: " + e.key); // muestra por pantalla la tecla pulsada
};

document.addEventListener("keydown", infoTecla);
document.addEventListener("keyup", infoTecla);

// Retorna el nombre del botón del ratón a partir de su código
function getBotonRaton(codigo) {
    var boton = "desconocido";
    switch (codigo) {
    case 0: // 0 es el código del botón izquierdo
        boton = "izquierdo";
        break;
    case 1: // 1 es el código del botón central (si lo tiene)
        boton = "central";
        break;
    case 2: // 2 es el código del botón derecho
        boton = "derecho";
        break;
    }
    return boton;
}

// Muestra la infrmación de un evento del ratón
function infoRaton(e) {
  console.log("Evento de ratón: " + e.type + ", botón " +
    getBotonRaton(e.button) + ", X: " + e.clientX + ", Y: " + e.clientY);
}

// // Gestor de clic del ratón
// document.addEventListener("click", infoRaton);

// // Gestor de la pulsación de un botón del ratón
// document.addEventListener("mousedown", infoRaton);
// // Gestor de la liberación de un botón del ratón
// document.addEventListener("mouseup", infoRaton);

// // Gestor de la carga total de la página web
// window.addEventListener("load", function() {
//   console.log("Página totalmente cargada");
// });

// Gestor del clic sobre el documento
document.addEventListener("click", function() {
  console.log("Gestor del documento");
});
// Gestor del clic sobre el párrafo
document.getElementById("parrafo").addEventListener("click", function() {
  console.log("Gestor del párrafo");
});
// Gestor del clic sobre el botón
document.getElementById("propagacion").addEventListener("click", function(e) {
  console.log("Gestor del botón");
  e.stopPropagation();
});
