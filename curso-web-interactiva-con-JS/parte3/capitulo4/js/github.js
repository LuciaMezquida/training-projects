document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  var nombreUsuario = e.target.elements.usuario.value
  ajaxGet("https://api.github.com/users/" + nombreUsuario, function(respuesta) {
    var usuario = JSON.parse(respuesta);
    mostrarInformacion(usuario);
  });
});

function mostrarInformacion(usuario) {
  var informacionElt = document.getElementById("informacion");

  informacionElt.innerHTML = ""; // Eliminación de informaciones precedentes

  var avatarElt = document.createElement("img");
  avatarElt.src = usuario.avatar_url;
  avatarElt.style.height = "150px";
  avatarElt.style.width = "150px";
  informacionElt.appendChild(avatarElt);

  var nameElt = document.createElement("p");
  nameElt.textContent = usuario.name;
  informacionElt.appendChild(nameElt);

  var blogElt = document.createElement("a");
  blogElt.href = usuario.blog
  blogElt.textContent = blogElt.href;
  informacionElt.appendChild(blogElt);
}
