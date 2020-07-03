ajaxGet("http://api.weatherunlocked.com/api/current/38.34,-0.49?lang=es&app_id=f967f921&app_key=b2749ac6cc065cf006b1954c0ee232ad", function(respuesta) {
  // Transformación de formato JSON a JavaScript
  let meteo = JSON.parse(respuesta);
  console.log(meteo)
  // Extracción de información del objeto respuesta
  
  var temperaturaActual = meteo.temp_c;
  var iconoURL = meteo.wx_icon;
  var prediccionHoy = meteo.wx_desc;

  // Visualización de los resultados
  var tempActualElt = document.getElementById("temperaturaActual");
  tempActualElt.textContent = temperaturaActual + " ºC";
  var iconElt = document.createElement("img");
  iconElt.src = iconoURL;
  tempActualElt.appendChild(iconElt);

  var prediccionHoyElt = document.getElementById("prediccion");
  prediccionHoyElt.textContent = prediccionHoy;
});
