/* 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. 
Crea los métodos necesarios para permitir encender y apagar el auto.
 */
class Auto {
  constructor(
    color = "Gris",
    marca = "Renault",
    modelo = "Sandero RS",
    estadoMotor = false
  ) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.estadoMotor = estadoMotor;
  }

  encenderAuto() {
    if (this.estadoMotor === false) {
      console.log(`Se encendio el auto ${this.modelo}`);
      this.estadoMotor = true;
    } else {
      console.log(`El auto ${this.modelo} ya esta encendido`);
    }
  }

  apagarAuto() {
    if (this.estadoMotor === true) {
      console.log(`Se apago el auto ${this.modelo}`);
      this.estadoMotor = false;
    } else {
      console.log(`El auto ${this.modelo} ya esta apagado`);
    }
  }
}

const auto1 = new Auto();
const auto2 = new Auto("Blanco", "Toyota", "Etios XLS", true);

auto1.apagarAuto();
auto1.encenderAuto();

auto2.encenderAuto();
auto2.apagarAuto();
