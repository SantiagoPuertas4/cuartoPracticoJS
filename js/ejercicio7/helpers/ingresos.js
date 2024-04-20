import { trimInterno } from "../helpers/trimInterno.js";

export function ingresoNumero(msg, i = 0, op1, op2) {
  let numero = 0;

  if (i === 0) {
    do {
      numero = prompt(msg);

      if (numero === null) {
        alert("No ingreso nada");
      } else if (isNaN(numero) || numero.trim() === "") {
        alert("No ingreso un numero");
      } else {
        break;
      }
    } while (true);
  } else {
    do {
      numero = prompt(msg);

      if (numero === null) {
        alert("No ingreso nada");
      } else if (isNaN(numero)) {
        alert("No ingreso un numero");
      } else {
        numero = Number(numero);
        if (numero === op1) {
          return op1;
        } else if (numero === op2) {
          return op2;
        } else {
          alert("Numero fuera de rango");
        }
      }
    } while (true);
  }

  numero = Math.round(numero);

  return numero;
}

export function ingresoTexto(msg) {
  let texto;
  do {
    texto = prompt(msg);

    if (texto === null || texto.trim() === "") {
      alert("No ingreso nada");
    } else {
      break;
    }
  } while (true);

  texto = texto.trim();

  return texto;
}
