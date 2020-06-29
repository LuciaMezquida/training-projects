// capitulo 3 DOM

// Modificación del contenido HTML de la lista
// document.getElementById("lenguajes").innerHTML += '<li id="c">C</li>';

// Supresión del contenido HTML de la lista
// document.getElementById("lenguajes").innerHTML = '';

// Modificación del contenido de texto del primer título
// document.querySelector("h1").textContent += " más populares en la web";

// Definición del atributo "id" del primer título h1. El valor otorgado al atributo id es "titulo"
document.querySelector("h1").setAttribute("id", "titulo");
document.querySelector("h1").id = "titulo";

var tituloElt = document.querySelector("h1"); // Acceso al primer título h1
tituloElt.classList.remove("titulo"); // Supresión de la clase "titulo"
tituloElt.classList.add("encabezado"); // Adición de la clase "encabezado"
console.log(tituloElt);

var javaElt = document.createElement("li"); // Creación de un elemento li
javaElt.id = "java"; // Definición de su identificador
javaElt.textContent = "Java"; // Definición de su contenido textual
document.getElementById("lenguajes").appendChild(javaElt); // Inserción del nuevo elemento

var cElt = document.createElement("li"); // Creación de un elemento li
cElt.id = "c"; // Definición de su identificador
cElt.appendChild(document.createTextNode("C")); // Definición de su contenido de texto
document.getElementById("lenguajes").appendChild(cElt); // Inserción del nuevo elemento

var perlElt = document.createElement("li"); // Creación de un elemento li
perlElt.id = "perl"; // Definición de su identificador
perlElt.textContent = "Perl"; // Definición de su contenido de texto
// Adición del nuevo elemento antes del elemento con id "php"
document.getElementById("lenguajes").insertBefore(perlElt,
    document.getElementById("php"));

// Adición del nuevo elemento justo al principio de la lista
document.getElementById('lenguajes').insertAdjacentHTML("afterBegin",
    '<li id="pascal">Pascal</li>');

var vBasicElt = document.createElement("li"); // Creación de un elemento li
vBasicElt.id = "visual-basic"; // Definición de su identificador
vBasicElt.textContent = "Visual Basic"; // Definición de su contenido de texto
// Adición del nuevo elemento justo al principio de la lista
document.getElementById('lenguajes').insertAdjacentElement("afterBegin",
    vBasicElt);

let wiki = document.createElement('p');
wiki.id = 'wikitext'
wiki.textContent = 'Una lista más completa ';
document.getElementById('contenido').appendChild(wiki);

let link = document.createElement('a');
link.textContent = 'aqui';
link.setAttribute('href', 'https://es.wikipedia.org/wiki/Anexo:Lenguajes_de_programación');
document.getElementById('wikitext').appendChild(link);

// var swiftElt = document.createElement("li"); // Creación de un elemento li
// swiftElt.id = "swift"; // Definición de su identificador
// swiftElt.textContent = "Swift"; // Definición de su contenido de texto
// // Reemplazamiento del elemento con id "perl" por el nuevo elemento "swift"
// document.getElementById("lenguajes").replaceChild(swiftElt, document.getElementById("perl"));

// // Supresión del elemento identificado por "swift"
// document.getElementById("lenguajes").removeChild(document.getElementById("swift"));


// video

// var lenguajes = document.getElementById("lenguajes");

// var javaElt = document.createElement("li");

// javaElt.setAttribute("class", "nombre-clase");

// javaElt.id = "java"; // javaElt.className = "nombre-clase"

// javaElt.classList.add("nombre-clase2");

// javaElt.textContent = "Java";

// lenguajes.appendChild(javaElt);

// lenguajes.insertBefore(javaElt, document.getElementById("python"));

// lenguajes.insertAdjacentElement("afterBegin", javaElt);

// lenguajes.replaceChild(javaElt, document.getElementById("python"));

// lenguajes.removeChild(document.getElementById("php"));
