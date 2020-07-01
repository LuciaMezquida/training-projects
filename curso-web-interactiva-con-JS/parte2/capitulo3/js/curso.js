// Validación durante la entrada de datos y Expresiones Regulares

var clave = document.getElementById("clave");//seleccionamos el elemento con el id clave, que corresponde al campo password

clave.addEventListener("input", function(e) {//añadimos un evento que analizará la longitud del password
  var palabraClave = e.target.value;//seleccionamos el valor introducido en el input de password
  var ayudaClave = document.getElementById("ayudaClave");//seleccionamos el elemento span
  ayudaClave.textContent = "Débil";//que tendrá un valor de 'debil
  ayudaClave.style.color = "red";//y en color rojo si la contraseña introducida es menor a 4

  if (palabraClave.length >= 8) {//cambiará a fuerte y verde si es mayor o igual a 8
    ayudaClave.textContent = "Fuerte";
    ayudaClave.style.color = "green";
  } else if (palabraClave.length >= 4) {//cambiará a normal y naranja si es mayor o igual a 4
    ayudaClave.textContent = "Normal";
    ayudaClave.style.color = "orange";
  }

});
//seleccionamos el elemento con id email y le añadimos un evento que se active cuando el usuario cliquee fuera de ese campo
document.getElementById("email").addEventListener("blur", function(e){
  var email = e.target.value; // seleccionamos el valor introducido en el campo email
  var ayudaEmail = "";
  var regexEmail = /.+@.+\..+/;//usamos expresiones regulares para verificar el email
/*.+ comienza con uno o varios caracteres
   @ seguido de un arroba
   .+ seguido de uno o varios caracteres
   \. seguido de un punto
   .+ seguido de uno o varios caracteres
*/
  if (!regexEmail.test(email)) {//si no cumple las expresiones regulares que hemos establecido, aparece un mensage
    ayudaEmail = "Debes añadir un símbolo @";
  }

  document.getElementById("ayudaEmail").textContent = ayudaEmail;
});
