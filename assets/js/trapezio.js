const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputBaseMaior = document.querySelector("#baseMaior");
  const inputBaseMenor = document.querySelector("#baseMenor");
  const inputAltura = document.querySelector("#altura");

  let baseMaior = inputBaseMaior.value;
  let baseMenor = inputBaseMenor.value;
  let altura = inputAltura.value;

  if (baseMaior.search(",") !== -1) {
    baseMaior = Number(baseMaior.replace(/,/, "."));
  } else {
    baseMaior = Number(baseMaior);
  }

  if (baseMenor.search(",") !== -1) {
    baseMenor = Number(baseMenor.replace(/,/, "."));
  } else {
    baseMenor = Number(baseMenor);
  }

  if (altura.search(",") !== -1) {
    altura = Number(altura.replace(/,/, "."));
  } else {
    altura = Number(altura);
  }

  if (
    (!baseMaior && !baseMenor && !altura) ||
    (baseMaior < 0 && baseMenor < 0 && altura < 0)
  ) {
    setResultado(
      "Valores da base maior,base menor e altura são inválidos!",
      false
    );
    return;
  } else if ((!baseMaior && !baseMenor) || (baseMaior < 0 && baseMenor < 0)) {
    setResultado("Valores das bases são inválidos!", false);
    return;
  } else if ((!baseMaior && !altura) || (baseMaior < 0 && altura < 0)) {
    setResultado("Valores da base maior e altura são inválidos!", false);
    return;
  } else if ((!baseMenor && !altura) || (baseMenor < 0 && altura < 0)) {
    setResultado("Valores da base menor e altura são inválidos!", false);
    return;
  } else if (!baseMenor || baseMenor < 0) {
    setResultado("Valor da base menor inválido!", false);
    return;
  } else if (!baseMaior || baseMaior < 0) {
    setResultado("Valor da base maior inválido", false);
    return;
  } else if (!altura || altura < 0) {
    setResultado("Valor da altura inválido!", false);
    return;
  }

  const area = getArea(baseMaior, baseMenor, altura);

  const msg = `Área do trapézio: ${area} cm<sup>2</sup>`;

  setResultado(msg, true);
});

function getArea(baseMaior, baseMenor, altura) {
  const area = ((baseMaior + baseMenor) * altura) / 2;
  return area;
}

function criaParagrafo() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");

  resultado.innerHTML = "";
  const p = criaParagrafo();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = `<p><strong>Resultado:</br> ${msg}</strong></p>`;
  resultado.appendChild(p);
}
