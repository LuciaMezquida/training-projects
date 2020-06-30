// Lista de países
var listaPaises = [
  "Afganistán",
  "Albania",
  "Argelia",
  "Alemania",
  "Andorra",
  "Angola",
  "Arabia Saudita",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaiyán",
  "Bahamas",
  "Bahréin",
  "Bélgica",
  "Belice",
  "Bielorrusia",
  "Bolivia",
  "Brasil",
  "Bulgaria"
];

let paisElement = document.querySelector('input') //accedemos al input 'apis'
let sugerenciasElement = document.getElementById('sugerencias') //accedemos al div 'sugerencias'

paisElement.addEventListener('input', function() {
    sugerenciasElement.innerHTML = ''; //se elimina la lista de sugerencias
    listaPaises.forEach(function(pais) {//pais--> el que introducimos nosotros
      if (pais.toLowerCase().indexOf(paisElement.value) === 0) { //si la primera letra introducida corresponde con el comienzo de la lista de sugerencias
        let sugerencia = document.createElement('div');//creamos un div para la sugerencia elegida
        sugerencia.classList.add('sugerencia');//le damos una clase al div
        sugerencia.textContent = pais;//le damos el valor al div de la sugerencia elegida
        sugerencia.addEventListener('click', function(e) {//para gestionar por click sobre una sugerencia
          paisElement.value = e.target.textContent; //reemplaza el valor introducido por el de una sugerencia
          sugerenciasElement.innerHTML = ''; //vacía la lista de sugerencias
        });
        sugerenciasElement.appendChild(sugerencia);
      }
    });
});
