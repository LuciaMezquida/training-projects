let formElemento = document.querySelector("form");//seleccionamos el elemento formulario

formElemento.addEventListener("submit", function(e) { //añadimos un evento al hacer submit
  let password1 = formElemento.elements.clave1.value; //seleccionamos el valor de clave1
  let password2 = formElemento.elements.clave2.value; //seleccionamos el valor de clave2
  let regexClave = /[0-9]/; //usamos las Expresiones Regulares para definir que queremos un numero
  let mensaje = "La contraseña es válida";

  if (password1 === password2) {
    if (password1.length >= 6) { //si el password1 es menor a 6 caracteres
      if (!regexClave.test(password1)) { //si no hay un numero en el password1
        mensaje = "La contraseña no contiene ninguna cifra";
      }
    } else {
      mensaje = "La contraseña debe contener al menos 6 caracteres";
    }
  } else {
    mensaje = "Las contraseñas introducidas deben ser iguales";
  }

  document.getElementById("infoClave").textContent = mensaje; //seleccionamos el elemento p con la id infoclave para mostrar los mensajes por pantalla
  e.preventDefault();//anulamos el comportamiento por defecto ligado al evento del nodo
});
