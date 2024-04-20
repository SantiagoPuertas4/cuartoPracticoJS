/* 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.
 */

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    alert(`${this.nombre} emite sonido`);
  }
}

class Perro extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }

  emitirSonido() {
    super.emitirSonido();
    alert(`Guau Guau!!!`);
  }
}

class Gato extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }

  emitirSonido() {
    super.emitirSonido();
    alert(`Miau Miau!!!`);
  }
}

const animal1 = new Animal("Tobias", 20);
const animal2 = new Perro("Perrito", 20);
const animal3 = new Gato("Gatito", 20);

animal1.emitirSonido();
animal2.emitirSonido();
animal3.emitirSonido();
