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
/*ajaxGet nos permite realizar peticiones asíncronas a cualquier url que le pasemos como parámetro. Si la respuesta
tiene éxito, nos mostrará la respuesta por la consola. Sin embargo esta función la podemos utilizar para realizar
peticiones asíncronas a diferentes servidores cuya respuesta será tambien diferente. 
Por lo tanto, normalmente, actuaremos diferente en función de la respuesta. No vamos a querer siempre mostrar la
 respuesta por la consola del navegador. Para ello introducimos un nuevo concepto: el callback: una función que se
 pasa como parámetro de otra y será ejecutada posteriormente
*/
/*pasamos como segundo parámetro una función, que tiene como parámetro la respuesta del servidor y añadimos el
código personalizado que queramos que se ejecute cuando la petición tiene éxito*/
ajaxGet("http://localhost:3000/imagenes", function(respuesta) {
  let images = JSON.parse(respuesta); //pasa un formato JSON a tipo objeto de JavaScript

  images.forEach(function(elemento) { // para extraer las imágenes en miniatura en nuestro html. Por cada imagen que se encuentre en JSON, se creará un elemento img con enlace a esa imagen
    let imgElement = document.createElement('img');
    imgElement.src = elemento.thumbnailUrl;
    document.getElementById('imagenes').appendChild(imgElement);
  });
});
/*Cada vez que llamemos a la funcion ajaxGet, le pasamos una función callback diferente que se ejecutará una vez
tengamos la respuesta del servidor y podemos con ello realizar diferentes acciones. La adaptamos según nuestras 
necesidades en ese momento.
Definimos la función en otro archivo que esté disponible para el resto de archivos de JavaScript.*/