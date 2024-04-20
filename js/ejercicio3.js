/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, 
mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área */

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  setAlto(altoIngresado) {
    this.alto = altoIngresado;
  }

  getAlto() {
    console.log(`El alto del rectangulo es de ${this.alto}`);
  }

  setAncho(anchoIngresado) {
    this.ancho = anchoIngresado;
  }

  getAncho() {
    console.log(`El ancho del rectangulo es de ${this.ancho}`);
  }

  perimetro() {
    let perimetro = this.alto * 2 + this.ancho * 2;
    console.log(`El perimetro del rectangulo es de ${perimetro}`);
  }

  area() {
    let area = this.alto * this.ancho;
    console.log(`El area del rectangulo es de ${area}`);
  }
}

const rectangulo = new Rectangulo();
rectangulo.setAlto(20);
rectangulo.setAncho(15);
rectangulo.perimetro();
rectangulo.area();
