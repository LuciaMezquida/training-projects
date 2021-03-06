const getConclusionByImc = (imc) => {
  let advice = "";
  if (imc < 16) {
    advice = "Necesitas comer más";
  } else if (imc >= 16 && imc < 25) {
    advice = "Estás fenomenal";
  } else if (imc >= 25 && imc < 30) {
    advice = "Tienes sobrepeso";
  } else if (imc >= 30) {
    advice = "¡Tienes obesidad!";
  }
  return advice;
};

const onClickOnButton = () => {
  const inputWeight = document.querySelector("#weight");
  const inputHeight = document.querySelector("#height");

  const weight = parseFloat(inputWeight.value);
  const height = parseFloat(inputHeight.value);

  const imc = weight / Math.pow(height, 2);

  const resultBox = document.querySelector("#result");
  resultBox.innerText = Math.round(imc);

  const messageBox = document.querySelector("#message");
  messageBox.innerText = getConclusionByImc(imc);
};

const button = document.querySelector("#calc_button");
button.onclick = onClickOnButton;
