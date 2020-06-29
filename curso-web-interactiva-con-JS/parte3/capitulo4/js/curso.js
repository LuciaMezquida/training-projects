ajaxGet("http://api.wunderground.com/api/de0e523hy76ou876/conditions/forecast/lang:SP/q/SP/Madrid.json", function(respuesta) {
  // Transformación de formato JSON a JavaScript
  var meteo = JSON.parse(respuesta);
  // Extracción de información del objeto respuesta
  var temperaturaActual = meteo.current_observation.temp_c;
  var iconoURL = meteo.current_observation.icon_url;
  var prediccionHoy = meteo.forecast.txt_forecast.forecastday[0].fcttext_metric;

  // Visualización de los resultados
  var tempActualElt = document.getElementById("temperaturaActual");
  tempActualElt.textContent = temperaturaActual + " ºC";
  var iconElt = document.createElement("img");
  iconElt.src = iconoURL;
  tempActualElt.appendChild(iconElt);

  var prediccionHoyElt = document.getElementById("preccion");
  prediccionHoyElt.textContent = prediccionHoy;
});
