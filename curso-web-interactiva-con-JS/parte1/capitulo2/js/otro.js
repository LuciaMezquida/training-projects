// Si hay enlaces en la página muestra los atributos href del primero y del último
function infoEnlaces() {
    var enlacesElts = document.getElementsByTagName("a");
    var numeroEnlaces = enlacesElts.length;
    console.log("Hay " + numeroEnlaces + " enlaces en la página");

    if (numeroEnlaces > 0) {
        console.log("El primer enlace es: " + enlacesElts[0].getAttribute("href"));
        console.log("El segundo enlace es: " + enlacesElts[numeroEnlaces - 1].getAttribute("href"));
    }
}

// Muestra si un elemento posee una clase
function contieneClase(id, clase) {
    var instrumento = document.getElementById(id);
    if (instrumento !== null) {
        console.log(instrumento.classList.contains(clase));
    } else {
        console.log("Ningún elemento posee el id: " + id);
    }
}

infoEnlaces();

contieneClase("saxofon", "madera"); // Muestra true
contieneClase("saxofon", "metal"); // Muestra false
contieneClase("trompeta", "metal"); // Muestra true
contieneClase("contrabajo", "cuerda"); // Muestra "Ningún elemento posee el id contrabajo"
