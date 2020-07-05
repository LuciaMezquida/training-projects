function ajaxGet(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.addEventListener("load", function() {
      if (request.status >= 200 && request.status < 400) {
        // Llamada ala función callback pasándole la respuesta
        callback(request.responseText);
      } else {
        console.error(request.status + " " + request.statusText);
      }
    });
    request.addEventListener("error", function(){
      console.error("Error de red");
    });
    request.send(null);
  }