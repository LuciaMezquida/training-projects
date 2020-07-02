function ajaxGet(url, callback) {
  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.addEventListener("load", function() {
    if (request.status >= 200 && request.status < 400) { //verificamos que la petición ha tenido éxito (ha llegado al servidor)
      callback(request.responseText); // en lugar de mostrar por consola la petición del servidor, usamos callback
    } else {// obtenemos una respuesta, que puede ser un error (como que el servidor no está disponible)
      console.error(request.status + ' ' + request.statusText)// se muestra información del problema ocasionado
    }
  });
  //puede darse el caso de que la petición no alcance el servidor (p.e., si se detiene la petición en la consola)
  //estos errores se gestionan añadiendo un evento tipo error
  request.addEventListener('error', function() {
    console.error('No es posible conectarse con el servidor')
  });
  request.send(null);
}
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
necesidades en ese momento*/