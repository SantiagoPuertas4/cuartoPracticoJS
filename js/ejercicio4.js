/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    console.log(
      `Codigo: ${this.codigo}\nNombre: ${this.nombre}\nPrecio: ${this.precio}\n`
    );
  }
}

const queso = new Producto(1, "Queso", 100);
const jamon = new Producto(2, "Jamon", 120);
const ternera = new Producto(3, "Ternera", 150);

let productos = [queso, jamon, ternera];

for (i = 0; i < productos.length; i++) {
  productos[i].imprimeDatos();
}
