const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputComprimento = e.target.querySelector("#comprimento");
  const inputLargura = e.target.querySelector("#largura");

  let comprimento = inputComprimento.value;
  let largura = inputLargura.value;

  if (comprimento.search(",") !== -1) {
    comprimento = Number(comprimento.replace(/,/, "."));
  } else {
    comprimento = Number(comprimento);
  }

  if (largura.search(",") !== -1) {
    largura = Number(largura.replace(/,/, "."));
  } else {
    largura = Number(largura);
  }

  if ((!largura && !comprimento) || (largura < 0 && comprimento < 0)) {
    setResultado("Largura e comprimento inválidos!", false);
    return;
  } else if (!largura || largura < 0) {
    setResultado("Largura inválida!", false);
    return;
  } else if (!comprimento || comprimento < 0) {
    setResultado("Comprimento inválido", false);
    return;
  }

  const area = getArea(comprimento, largura);

  const msg = `Área do retângulo: ${area} cm<sup>2</sup>`;

  setResultado(msg, true);
});

function getArea(comprimento, largura) {
  const area = comprimento * largura;
  return area.toFixed(2);
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
