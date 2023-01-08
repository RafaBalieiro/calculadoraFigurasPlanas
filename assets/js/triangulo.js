const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputBase = document.querySelector("#base");
  const inputAltura = document.querySelector("#altura");

  let base = inputBase.value;
  let altura = inputAltura.value;

  if (base.search(",") !== -1) {
    base = Number(base.replace(/,/, "."));
  } else {
    base = Number(base);
  }

  if (altura.search(",") !== -1) {
    altura = Number(altura.replace(/,/, "."));
  } else {
    altura = Number(altura);
  }

  if ((!base && !altura) || (base < 0 && altura < 0)) {
    setResultado("Valores da base e altura inválidos!", false);
    return;
  } else if (!base || base < 0) {
    setResultado("Valor da base inválido!", false);
    return;
  } else if (!altura || altura < 0) {
    setResultado("Valor da altura inválido!", false);
    return;
  }

  const area = getArea(base, altura);

  const msg = `Área do triângulo: ${area} cm<sup>2</sup>`;
  setResultado(msg, true);
});

function getArea(base, altura) {
  const area = (base * altura) / 2;
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
