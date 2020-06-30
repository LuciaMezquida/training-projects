document.querySelector('button').addEventListener('click', function() {
  let nombrePostre = prompt('Introduce un postre');

  let listaPostres = document.getElementById('postres');
  let postre = document.createElement('li');
  postre.textContent = nombrePostre;
  listaPostres.appendChild(postre);

  postre.addEventListener('click', function() {
    let nuevoNombrePostre = prompt('Por qué postre lo quieres cambiar?');
    postre.textContent = nuevoNombrePostre;
  });

});

/*
document.querySelector("button").addEventListener("click", function() {
  var nombrePostre = prompt("Introduce un postre");
  var postreElt = document.createElement("li");
  postreElt.textContent = nombrePostre;
  document.getElementById("postres").appendChild(postreElt);

  // bonus
  postreElt.addEventListener("click", function(e) {
    var nuevoNombre = prompt("Modifica el nombre del postre: " + e.target.textContent);
    e.target.textContent = nuevoNombre;
  });
});
*/