const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputDiagonalMaior = e.target.querySelector("#diagonalMaior");
  const inputDiagonalMenor = e.target.querySelector("#diagonalMenor");

  let diagonalMaior = inputDiagonalMaior.value;
  let diagonalMenor = inputDiagonalMenor.value;

  if (diagonalMaior.search(",") !== -1) {
    diagonalMaior = Number(diagonalMaior.replace(/,/, "."));
  } else {
    diagonalMaior = Number(diagonalMaior);
  }

  if (diagonalMenor.search(",") !== -1) {
    diagonalMenor = Number(diagonalMenor.replace(/,/, "."));
  } else {
    diagonalMenor = Number(diagonalMenor);
  }

  if (
    (!diagonalMaior && !diagonalMenor) ||
    (diagonalMaior < 0 && diagonalMenor < 0)
  ) {
    setResultado(
      "Valor para diagonal maior e diagonal menor são inválidos!",
      false
    );
    return;
  } else if (!diagonalMaior || diagonalMaior < 0) {
    setResultado("Valor para diagonal maior é inválido!", false);
    return;
  } else if (!diagonalMenor || diagonalMenor < 0) {
    setResultado("Valor para diagonal menor é inválido!", false);
    return;
  }

  const area = getArea(diagonalMaior, diagonalMenor);

  const msg = `Área do losango: ${area} cm<sup>2</sup>`;

  setResultado(msg, true);
});

function getArea(diagonalMaior, diagonalMenor) {
  const area = (diagonalMaior * diagonalMenor) / 2;
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
