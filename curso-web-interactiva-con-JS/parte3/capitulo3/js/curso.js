// // Creación de la petición HTTP
// var req = new XMLHttpRequest();
// // Petición HTTP GET síncrona hacia el archivo fotos.json del servidor
// req.open("GET", "http://localhost:3000/imagenes", false);
// // Envío de la petición
// req.send(null);
// // Impresión por la consola de la respuesta recibida desde el servidor
// console.log(req.responseText);

// var imagenes = JSON.parse(req.response);
// console.log(imagenes);

// imagenes.forEach(function(e, index) {
//   var imgElt = document.createElement("img");
//   imgElt.src = imagenes[index].thumbnailUrl;
//   document.getElementById("imagenes").appendChild(imgElt);
// });

// // Creación de la petición HTTP
// var req = new XMLHttpRequest();
// // Petición HTTP GET asíncrona si el tercer parámetro es "true" o no se especifica
// req.open("GET", "http://localhost:3000/imagenes", true);
// // Gestor del evento que indica el final de la petición (la respuesta se ha recibido)
// req.addEventListener("load", function() {
//   // La petición ha tenido éxito
//   if (req.status >= 200 && req.status < 400) {
//       console.log(req.responseText);
//   } else {
//     // Se muestran informaciones sobre el problema ocasionado durante el tratamiento de la petición
//     console.error(req.status + " " + req.statusText);
//   }
// });
// // Gestor del evento que indica que la petición no ha podido llegar al servidor
// req.addEventListener("error", function(){
//   console.error("Error de red"); // Error de conexión
// });
// // Envío de la petición
// req.send(null);

ajaxGet("http://localhost:3000/imagenes", function(respuesta) {
  // Transformación de formato JSON a JavaScript
  var imagenes = JSON.parse(respuesta);

  imagenes.forEach(function(elemento) {
    var imgElt = document.createElement("img");
    imgElt.src = elemento.thumbnailUrl;
    document.getElementById("imagenes").appendChild(imgElt);
  });
});
