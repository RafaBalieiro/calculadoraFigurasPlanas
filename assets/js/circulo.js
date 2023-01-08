const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputRaio = e.target.querySelector("#raio");

  let raio = inputRaio.value;

  if (raio.search(",") !== -1) {
    raio = Number(raio.replace(/,/, "."));
    console.log(raio);
  } else {
    raio = Number(raio);
  }

  if (!raio || raio < 0) {
    setResultado("Valor para o raio é inválido!", false);
    return;
  }

  const area = getArea(raio);

  const msg = `Área do círculo: ${area} cm<sup>2</sup>`;

  setResultado(msg, true);
});

function getArea(raio) {
  const area = 3.14 * raio ** 2;
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
