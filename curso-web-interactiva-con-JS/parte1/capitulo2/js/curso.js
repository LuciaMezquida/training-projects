console.log(document.body.childNodes[5].childNodes[1]);

var titulosElts = document.getElementsByTagName("h2"); // Todos los títulos h2
console.log(titulosElts[0]); // Muestra el primer título h2
console.log(titulosElts.length); // Muestra 3 (existen 3 elementos h2 en la página)

// Selecciona y mostramos todos los elementos cuyo nombre de clase sea "maravillas"
var maravillasElts = document.getElementsByClassName("maravillas");
for (var i = 0; i < maravillasElts.length; i++) {
    console.log(maravillasElts[i]);
}

// Seleccionamos y mostramos por consola el elemento con id "nuevas"
console.log(document.getElementById('nuevas'));

// Todos los párrafos
console.log(document.querySelectorAll("p").length); // Muestra 3

// Todos los párrafos al interior del elemento con identificador "contenido"
console.log(document.querySelectorAll("#contenido p").length); // Muestra 2

// Todos los elemento que tengan la clase "existe"
console.log(document.querySelectorAll(".existe").length); // Muestra 8

// Todos los elementos hijos del elemento con id "antiguas" que contengan la clase "existe"
console.log(document.querySelectorAll("#antiguas > .existe").length); // Muestra 1

// El primer párrafo
console.log(document.querySelector("p"));

// El contenido HTML del elemento con id "contenido"
console.log(document.getElementById("contenido").innerHTML);

// El contenido de texto de un elemento con el id "contenido"
console.log(document.getElementById("contenido").textContent);

// El atributo href del primer enlace
console.log(document.querySelector("a").getAttribute("href"));

// El identificador de la primera lista
console.log(document.querySelector("ul").id);

// El nombre de la clase del elemento con id "antiguas"
console.log(document.getElementById("antiguas").className);

// El atributo href del primer enlace
console.log(document.querySelector("a").href);

if (document.querySelector("a").hasAttribute("target")) {
    console.log("El primer enlace tiene el atributo target");
} else {
    console.log("El primer enlace no tiene el atributo target");
}

// Lista de las clases del elemento con el identificador "antiguas"
var classes = document.getElementById("antiguas").classList;
console.log(classes.length); // Muestra 1: El elemento posee una sola clase
console.log(classes[0]); // Muestra "maravillas"

if (document.getElementById("antiguas").classList.contains("maravillas")) {
    console.log("El elemento con id antiguas posee la clase maravilas");
} else {
    console.log("El elemento con id antiguas no posee la clase maravilas");
}
