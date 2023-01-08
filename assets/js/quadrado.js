const form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputLado = e.target.querySelector("#lado");

  let lado = inputLado.value;
  console.log(lado);

  if (lado.search(",") !== -1) {
    lado = Number(lado.replace(/,/, "."));
    console.log(lado);
  } else {
    lado = Number(lado);
  }

  if (!lado || lado < 0) {
    setResultado("Valor para Lado inválido!", false);
    return;
  }

  const area = getArea(lado);

  const msg = `Área do quadrado: ${area} cm<sup>2</sup>`;

  setResultado(msg, true);
});

function getArea(lado) {
  const area = lado ** 2;
  return area.toFixed(2);
}

function criaParagrafo() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector(".resultado");
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
