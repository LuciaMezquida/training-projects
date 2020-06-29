var pElts = document.getElementsByTagName("p");

document.addEventListener("keypress", function(event) {
  var color = getColor(event.key.toLowerCase());

  for (var i = 0; i < pElts.length; i++) {
    pElts[i].style.color = color;
  }
});

function getColor(key) {
  var color;
  switch (key) {
    case "r":
      color = "red";
      break;
    case "v":
      color = "green";
      break;
    case "a":
      color = "blue";
      break;
  }
  return color;
}
