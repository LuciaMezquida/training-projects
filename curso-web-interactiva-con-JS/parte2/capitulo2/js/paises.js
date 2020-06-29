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

var paisElt = document.querySelector("input");
var sugerenciasElt = document.getElementById("sugerencias");

// Gestor del cambio de valor introducido
paisElt.addEventListener("input", function() {
  sugerenciasElt.innerHTML = ""; // Eliminación de la lista previa de sugerencias
  listaPaises.forEach(function(pais) {
    // Si el valor introducido corresponde al comienzo del nombre de algún país
    if (pais.toLowerCase().indexOf(paisElt.value) === 0) {
      var sugerenciaElt = document.createElement("div");
      sugerenciaElt.classList.add("sugerencia");
      sugerenciaElt.textContent = pais;
      // Gestiona el clic sobre un sugerencia
      sugerenciaElt.addEventListener("click", function (e) {
        // Reemplaza el valor introducido por una sugestión
        paisElt.value = e.target.textContent;
        // Vacía la lista de sugerencias
        sugerenciasElt.innerHTML = "";
      });
      sugerenciasElt.appendChild(sugerenciaElt);
    }
  });
});
