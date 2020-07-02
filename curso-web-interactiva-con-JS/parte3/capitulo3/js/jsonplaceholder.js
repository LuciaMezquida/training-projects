ajaxGet("https://jsonplaceholder.typicode.com/users", function(respuesta) {
 // Transformación de formato JSON a JavaScript 
let listado = JSON.parse(respuesta);

  listado.forEach(function(usuario) {
    let pElement = document.createElement('p');
    pElement.textContent = usuario.name;
    document.getElementById('respuesta').appendChild(pElement);
  });
});

