/* 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse". */

class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  saludar() {
    alert(`${this.nombre} te saluda`);
  }

  despedir() {
    alert(`${this.nombre} se despide`);
  }
}

const persona1 = new Persona("Santi", 19, "Estudiante");
const persona2 = new Persona("Tobias", 20, "Estudiante");

persona1.saludar();
persona1.despedir();
persona2.saludar();
persona2.despedir();
