ajaxGet("https://jsonplaceholder.typicode.com/users", function(respuesta) {
  // Transformación de formato JSON a JavaScript
  var usuarios = JSON.parse(respuesta);

  usuarios.forEach(function(usuario) {
    var pElt = document.createElement("p");
    pElt.textContent = usuario.name;
    document.getElementById("respuesta").appendChild(pElt);
  });
});
