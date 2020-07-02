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
