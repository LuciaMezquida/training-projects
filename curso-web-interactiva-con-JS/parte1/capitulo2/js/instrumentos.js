const totalEnlaces = (elemento) => {
   let enlaces = document.querySelectorAll(elemento).length;
   return console.log('Hay ' + enlaces + ' enlaces en esta página');
}
/*
function infoEnlaces() {
    var enlacesElts = document.getElementsByTagName("a");
    var numeroEnlaces = enlacesElts.length;
    console.log("Hay " + numeroEnlaces + " enlaces en la página");

    if (numeroEnlaces > 0) {
        console.log("El primer enlace es: " + enlacesElts[0].getAttribute("href"));
        console.log("El segundo enlace es: " + enlacesElts[numeroEnlaces - 1].getAttribute("href"));
    }
}
*/

totalEnlaces("a");
console.log(document.getElementsByTagName("a")[0].href);
console.log(document.getElementsByTagName("a")[3].href);

const contieneClase = (id, clase) => {
    let instrumento = document.getElementById(id);
    if (instrumento !== null) {
        console.log(instrumento.classList.contains(clase));
    } else {
        console.log('Ningun elemento posee el id ' + id);
    }
}

contieneClase("saxofon", "madera"); // Muestra true
contieneClase("saxofon", "metal"); // Muestra false
contieneClase("trompeta", "metal"); // Muestra true
contieneClase("contrabajo", "cuerda"); // Muestra "Ningún elemento posee el id contrabajo"
 