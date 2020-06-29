// El DOM
var h1 = document.body.childNodes[1];

console.log(h1.parentNode);

console.log(document.parentNode); // null

const mostrarHijo = (nodo, indice) => {
    let hijo = nodo.childNodes[indice];
    if (indice < 0) {
        return console.error("Indice incorrecto. El íncice no puede ser negativo");
    }
    if (indice >= nodo.childNodes.length) {
        return console.error("Indice incorrecto. El nodo body tiene menos de 9 nodos hijos");
    }
    if (nodo.nodeType === document.TEXT_NODE){
        return console.error("Tipo de nodo incorrecto. El primer nodo hijo de body es un nodo de texto y no puede tener hijos");
    }
    return console.log(hijo);
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