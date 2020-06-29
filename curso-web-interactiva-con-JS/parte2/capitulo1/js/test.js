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

preguntas.forEach(function(e, i) {

  // Bloque div que contiene cada una de las preguntas y el botón
  var index = i + 1; // numeramos las respuestas a través del índice del array
  var divElt = document.createElement("div");
  document.getElementById("contenido").appendChild(divElt);

  // Párrafo con que muestra una pregunta
  var h2Elt = document.createElement("h2");
  h2Elt.textContent = "Pregunta " + index + ": " + e.enunciado;
  divElt.appendChild(h2Elt);

  // Botón que revele la respuesta por cada pregunta
  var botonElt = document.createElement("button");
  botonElt.textContent = "Muestra respuesta";
  divElt.appendChild(botonElt);

  // Gestor que elimina el botón y muestra la respuesta al ser pulsado
  botonElt.addEventListener("click", function() {
    divElt.removeChild(botonElt);
    var pElt = document.createElement("p");
    pElt.textContent = e.respuesta;
    divElt.appendChild(pElt);
  });

});
