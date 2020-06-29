// Formularios

var nombreElt = document.getElementById("nombre");
nombreElt.value = "Nombre de usuario";

nombreElt.addEventListener("focus", function() {
  document.getElementById("ayudaNombre").textContent = "Introduce un nombre de usuario";
});

nombreElt.addEventListener("blur", function() {
  document.getElementById("ayudaNombre").textContent = "";
});

document.getElementById("confirmacion").addEventListener("change", function(e) {
  console.log("Enviar email de confirmacion: " + e.target.checked);
});

document.getElementsByName("suscripcion").forEach(function(radio) {
  radio.addEventListener("change", function(e) {
    console.log("Suscripción elegida: " + e.target.value);
  });
});

document.querySelector("form").addEventListener("submit", function(e) {
  var nombreUsuario = document.getElementById("nombre");
  var password = document.getElementById("clave");

  var mensaje = "";

  if (nombreUsuario.value.length > 20) {
    mensaje = "El nombre de usuario no puede tener más de 20 caracteres";
  }

  if (password.value.length < 5) {
    mensaje += "\n La contraseña no puede tener menos de 5 caracteres";
  }

  if (mensaje === "") {
    console.log("Formulario enviado");
  } else {
    console.log("Verifica los siguientes campos: " + mensaje);
  }

  e.preventDefault();
});
