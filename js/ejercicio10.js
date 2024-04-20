/* 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
 */

class Aeropuerto {
  constructor(nombreAeropuerto) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaAviones = [];
  }

  agregarAvion(avion) {
    this.listaAviones.push(avion);
    alert(`Se agrego el avion al aeropuerto ${this.nombreAeropuerto}`);
  }

  buscarAvion(nombreAvion) {
    let avionPresente = 0;
    for (let i = 0; i < this.listaAviones.length; i++) {
      if (this.listaAviones[i].nombre === nombreAvion) {
        avionPresente = 1;
        break;
      }
    }

    if (avionPresente === 1) {
      alert("El avion se encuentra en el aeropuerto");
    } else {
      alert("El avion no se encuentra en el aeropuerto");
    }
  }
}

class Avion {
  constructor(nombre, capacidad, destino, listaPasajeros) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaPasajeros = listaPasajeros;
  }

  abordar(pasajerosIngreso) {
    if (this.listaPasajeros + pasajerosIngreso < this.capacidad) {
      this.listaPasajeros = this.listaPasajeros + pasajerosIngreso;
      alert(`Se agregaron ${pasajerosIngreso} pasajeros`);
    } else {
      alert(`No hay suficiente espacio para los ${pasajerosIngreso} pasajeros`);
    }
  }
}

const aeropuerto = new Aeropuerto("Internacional");

const avion1 = new Avion("Boeing 500", 100, "Miami", 80);
const avion2 = new Avion("Boeing 600", 120, "Buenos Aires", 110);
const avion3 = new Avion("Boeing 700", 80, "Tucuman", 80);

aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);

aeropuerto.buscarAvion("Boeing 600");
aeropuerto.buscarAvion("Boeing 1000");

avion3.abordar(1);
avion1.abordar(15);
avion1.abordar(10);
