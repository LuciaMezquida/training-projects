let parrafo = document.getElementsByTagName('p');

function getColor(key) {
  let color;
  switch(key) {
    case "r":
      color = 'red';
      break;
    case 'v':
      color = 'green';
      break;
    case 'a':
      color = 'blue';
      break;
  }
  return color;
}

document.addEventListener('keypress', function(event) {
  let color = getColor(event.key.toLowerCase());

  for (let i = 0; i < parrafo.length; i++) {
    parrafo[i].style.color = color;
    
  }
})

