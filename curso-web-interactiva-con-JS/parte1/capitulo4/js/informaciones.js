// Ejercicio 2. Muestra la información del elemento con id "contenido"
let contenidoParr = document.createElement('p'); //creo el tag p
contenidoParr.textContent = 'Informaciones del contenido'; // le añado un contenido a p
document.getElementById('informaciones').appendChild(contenidoParr) // añado p y su contenido a continuación del div con id 'informaciones'

var contenidoStyle = getComputedStyle(document.getElementById("contenido")); // saco el estilo del id 'contenido'  de la hoja de estilos

let listado = document.createElement('ul'); //creo un elemento ul
document.getElementById('informaciones').appendChild(listado) //lo añado a continuacion del p creado antes

let propiedadAltura = document.createElement('li'); //creo un elemento li
propiedadAltura.textContent = 'Altura: ' + contenidoStyle.height; //le añado contenido de la altura de la hoja de estilos
listado.appendChild(propiedadAltura); //lo añado dentro de ul

let propiedadLongitud = document.createElement('li');//creo un elemento li
propiedadLongitud.textContent = 'Longitud: ' + contenidoStyle.width;//le añado contenido de la longitud de la hoja de estilos
listado.appendChild(propiedadLongitud);//lo añado dentro de ul


/*
var contenidoElt = document.getElementById("contenido");
var contenidoStyle = getComputedStyle(contenidoElt);

var ulElt = document.createElement("ul");

var liHightElt = document.createElement("li");
liHightElt.textContent = "Altura: " +contenidoStyle.height;
var liWidthElt = document.createElement("li");
liWidthElt.textContent = "Longitud: " + contenidoStyle.width;

ulElt.appendChild(liHightElt);
ulElt.appendChild(liWidthElt);

var infoElt = document.getElementById("informaciones");
infoElt.appendChild(document.createTextNode("Informaciones del contenido"));
infoElt.appendChild(ulElt);
*/