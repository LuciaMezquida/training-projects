// Ejercicio 1. Añade un párrafo

// Solución 1
var aElt = document.createElement("a"); // Creación de un elemento a
aElt.textContent = "aquí" // Definición de su contenido de texto
aElt.setAttribute("href",
  "https://es.wikipedia.org/wiki/Anexo:Lenguajes_de_programación"); // Definición de su atributo href

var pElt = document.createElement("p"); // Creación de un elemento p
pElt.textContent = "Una lista más completa " // Definición de su contenido de texto
pElt.appendChild(aElt); // Inserción del enlace a como hijo de p

// Puedes insertar el elemento como hijo del div con id "contenido"
document.getElementById("contenido").appendChild(pElt); // Inserción de p como hijo del div con id "contenido"

// También es posible utilizar insertAdjacentElement después del final de la lista con id "lenguajes"
// document.getElementById("lenguajes").insertAdjacentElement("afterEnd", pElt);

// Solución 2
document.getElementById("lenguajes").insertAdjacentHTML("afterEnd",
  "<p>Una lista más completa <a href='https://es.wikipedia.org/wiki/Anexo:Lenguajes_de_programación'>aquí</a></p>");


// Solución 3
document.getElementById("contenido")
  .innerHTML += "<p>Una lista más completa <a href='https://es.wikipedia.org/wiki/Anexo:Lenguajes_de_programación'>aquí</a></p>";
