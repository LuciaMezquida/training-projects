// 1. Muestra un nodo hijo de un nodo del DOM

// Muestra un hijo de un objeto del DOM
// El parámetro nodo es un objeto del DOM
// El parámetro indice es el índice del hijo a mostrar
function mostrarHijo(nodo, indice) {
  if (nodo.nodeType === document.ELEMENT_NODE) {
    if (indice >= 0 && indice < nodo.childNodes.length) {
      console.log(nodo.childNodes[indice]);
    } else {
      console.error("Índice incorrecto");
    }
  } else {
    console.error("Tipo de nodo incorrecto");
  }
}

// Debe mostrar un nodo de texto
mostrarHijo(document.body, 0);

// Debe mostrar el nodo h1
mostrarHijo(document.body, 1);

// Debe mostrar el error "Índice incorrecto"
// El índice elegido no puede ser negativo
mostrarHijo(document.body, -1);

// Debe mostrar el error "Índice incorrecto"
// El nodo body tiene menos de 9 nodos hijos
mostrarHijo(document.body, 8);

// Debe mostrar el error "Tipo de nodo incorrecto"
// El primer nodo hijo de body es un nodo de texto y no puede tener hijos
mostrarHijo(document.body.childNodes[0], 0);
