/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.

Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

 */

class Persona {
  constructor(nombre, edad, dni = 0, sexo, peso, altura, nacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  }

  mostrarGeneracion() {
    let anio = this.nacimiento;

    if (anio <= 2010 && anio >= 1994) {
      console.log(`${this.nombre} pertenece a la Generacion Z`);
    } else if (anio <= 1993 && anio >= 1981) {
      console.log(`${this.nombre} pertenece a la Generacion Y`);
    } else if (anio <= 1980 && anio >= 1969) {
      console.log(`${this.nombre} pertenece a la Generacion X`);
    } else if (anio <= 1968 && anio >= 1949) {
      console.log(`${this.nombre} pertenece a los Baby Boomers`);
    } else {
      console.log(`${this.nombre} pertenece a la Generacion Silenciosa`);
    }
  }

  mayorDeEdad() {
    if (this.edad >= 18) {
      console.log(`${this.nombre} es mayor de edad`);
    } else {
      console.log(`${this.nombre} es menor de edad`);
    }
  }

  mostrarDatos() {
    console.log(
      `Nombre: ${this.nombre}\n
      Edad: ${this.edad} años\n
      DNI: ${this.dni}\n
      Sexo: ${this.sexo}\n
      Peso: ${this.peso}kg\n
      Altura: ${this.altura}cm\n
      Nacimiento: ${this.nacimiento}\n`
    );
  }

  generarDNI() {
    let numeroAleatorio = this.dni;
    const min = 10000000;
    const max = 99999999;

    if (numeroAleatorio === 0) {
      numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
      this.dni = numeroAleatorio;
      console.log(`DNI aleatorio generado: ${this.dni}`);
    } else {
      console.log(`${this.nombre} ya posee DNI`);
    }
  }
}

const santi = new Persona("Santiago", 19, 0, "H", 90, 179, 2004);
santi.mostrarDatos();
santi.generarDNI();
santi.mostrarDatos();
santi.generarDNI();
santi.mayorDeEdad();
santi.mostrarGeneracion();
