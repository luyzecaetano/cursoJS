const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // recebendo valores
  const pesoInput = e.target.querySelector("#peso");
  const alturaInput = e.target.querySelector("#altura");

  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);
  
  // validação
  if (!peso) {
    setResultado("Peso Inválido", false);
    return;
  }
  if (!altura) {
    setResultado("Altura Inválida", false);
    return;
  }
  
  const imc = getIMC(peso, altura);
  const nivelIMC = getNivelImc(imc);
  const msg = `<p>Seu IMC é ${imc} (${nivelIMC})</p>`;

  setResultado(msg, true);
});

function setResultado(msg, isValid) {
  const resultado = document.querySelector(".result");
  const p = document.createElement('p');
  p.innerHTML = msg
  
  if (isValid) {
    p.classList.add("imc-valido");
  } else {
    p.classList.add("invalido");
  }

  resultado.appendChild(p);
}

function getIMC(peso, altura) {
  const imc = (peso / altura ** 2) * 10000;
  return imc.toFixed(2);
}

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso Normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 40) return nivel[5];
  if (imc >= 35) return nivel[4];
  if (imc >= 30) return nivel[3];
  if (imc >= 25) return nivel[2];
  if (imc > 18.5) return nivel[1];
  if (imc <= 18.5) return nivel[0];
}
