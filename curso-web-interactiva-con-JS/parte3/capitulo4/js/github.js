document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  let nombreUsuario = e.target.elements.usuario.value
  ajaxGet("https://api.github.com/users/" + nombreUsuario, function(respuesta) {
    var usuario = JSON.parse(respuesta);
    mostrarInformacion(usuario);
  });
});

function mostrarInformacion(usuario) {
  let informacionElt = document.getElementById("informacion");

  informacionElt.innerHTML = ""; // Eliminación de informaciones precedentes

  let avatarElt = document.createElement("img");
  avatarElt.src = usuario.avatar_url;
  avatarElt.style.height = "150px";
  avatarElt.style.width = "150px";
  informacionElt.appendChild(avatarElt);

  let nameElt = document.createElement("p");
  nameElt.textContent = usuario.name;
  informacionElt.appendChild(nameElt);

  let locationElt = document.createElement('p');
  locationElt.textContent = usuario.location;
  informacionElt.appendChild(locationElt);

  let twitterElt = document.createElement('p');
  twitterElt.textContent = usuario.twitter_username;
  informacionElt.appendChild(twitterElt);

  let blogElt = document.createElement("a");
  blogElt.href = usuario.repos_url
  blogElt.textContent = blogElt.href;
  informacionElt.appendChild(blogElt);
}
