export function trimInterno(texto) {
  let palabras = texto.split(" ");
  let palabrasSinEspacios = palabras.filter((palabra) => palabra.trim() !== "");
  return palabrasSinEspacios;
}
