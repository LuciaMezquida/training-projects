// Validación durante la entrada de datos y Expresiones Regulares

var clave = document.getElementById("clave");

clave.addEventListener("input", function(e) {
  var palabraClave = e.target.value;
  var ayudaClave = document.getElementById("ayudaClave");
  ayudaClave.textContent = "Débil";
  ayudaClave.style.color = "red";

  if (palabraClave.length >= 8) {
    ayudaClave.textContent = "Fuerte";
    ayudaClave.style.color = "green";
  } else if (palabraClave.length >= 4) {
    ayudaClave.textContent = "Normal";
    ayudaClave.style.color = "orange";
  }

});

document.getElementById("email").addEventListener("blur", function(e){
  var email = e.target.value;
  var ayudaEmail = "";
  var regexEmail = /.+@.+\..+/;

  if (!regexEmail.test(email)) {
    ayudaEmail = "Debes añadir un símbolo @";
  }

  document.getElementById("ayudaEmail").textContent = ayudaEmail;
});
