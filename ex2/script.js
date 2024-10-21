function calcularPesoIdeal() {
  let campoAltura = document.getElementById("altura");
  let altura = parseInt(campoAltura.value);
  let sexo = document.querySelector('input[name="sexo"]:checked').value;

  if (isNaN(altura) || altura <= 0) {
    alert("Por favor, insira uma altura válida.");
    return;
  }

  let pesoIdeal = 0;
  if (sexo === "masculino") {
    pesoIdeal = 52 + 0.75 * (altura - 152.4);
  } else if (sexo === "feminino") {
    pesoIdeal = 52 + 0.67 * (altura - 152.4);
  }

  document.getElementById(
    "resultado"
  ).innerHTML = `Seu peso ideal é ${pesoIdeal.toFixed(2)} kg.`;
}
