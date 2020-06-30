// Array de objetos. Cada objeto cuenta con dos propiedades: enunciado y respuesta
var preguntas = [
  {
    enunciado: "¿Cuánto es 2 + 2?",
    respuesta: "2 + 2 = 4"
  },
  {
    enunciado: "¿Cuánto es 5 x 8?",
    respuesta: "5 + 8 = 40"
  },
  {
    enunciado: "¿Cuánto es 18 / 3?",
    respuesta: "18 / 3 = 6"
  },
];

preguntas.forEach(function(array, indice) {

  // Bloque div que contiene cada una de las preguntas y el botón
  var index = indice + 1; // numeramos las respuestas a través del índice del array
  var divElement = document.createElement("div");//creamos un elemento div
  document.getElementById("contenido").appendChild(divElement);//lo metemos dentro del div con id 'contenido'

  // Párrafo con que muestra una pregunta
  var h2Element = document.createElement("h2");//creamos un elemento h2
  h2Element.textContent = "Pregunta " + index + ": " + array.enunciado;//le añadimos el enunciado del array
  divElement.appendChild(h2Element);//lo añadimos al div creado antes

  // Botón que revele la respuesta por cada pregunta
  var botonElement = document.createElement("button");//creamos un boton
  botonElement.textContent = "Muestra respuesta";//le añadimos contenido
  divElement.appendChild(botonElement);//lo añadimos al div creado antes

  // Gestor que elimina el botón y muestra la respuesta al ser pulsado
  botonElement.addEventListener("click", function() {
    divElement.removeChild(botonElement);//borramos el boton
    var pElement = document.createElement("p");//creamos un elemento p
    pElement.textContent = array.respuesta;//añadimos a p la respuesta contenida en el array
    divElement.appendChild(pElement);//añadimos p al div creado antes
  });

});
