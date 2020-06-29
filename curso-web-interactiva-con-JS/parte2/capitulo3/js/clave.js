var formElt = document.querySelector("form");

formElt.addEventListener("submit", function(e) {
  var clave1 = formElt.elements.clave1.value;
  var clave2 = formElt.elements.clave2.value;
  var regexClave = /\d+/;
  var mensaje = "La contraseña es válida";

  if (clave1 === clave2) {
    if (clave1.length >= 6) {
      if (!regexClave.test(clave1)) {
        mensaje = "La contraseña no contiene ninguna cifra";
      }
    } else {
      mensaje = "La contraseña debe contener al menos 6 caracteres";
    }
  } else {
    mensaje = "Las contraseñas introducidas deben ser iguales";
  }

  document.getElementById("infoClave").textContent = mensaje;
  e.preventDefault();

});
