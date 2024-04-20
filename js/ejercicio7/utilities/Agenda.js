import { Contacto } from "../utilities/Contacto.js";

export class Agenda {
  constructor(tamanio = 10) {
    this.tamanio = tamanio;
    this.contactos = [];
  }

  aniadirContacto(contacto, numero) {
    if (this.contactos.length < this.tamanio) {
      const contact = new Contacto(contacto, numero);
      this.contactos.push(contact);
      alert(`Se añadio a ${this.contactos[this.contactos.length - 1].nombre}`);
    } else {
      alert(`La agenda no puede almacenas mas contactos`);
    }
  }

  listarContactos() {
    for (let i = 0; i < this.contactos.length; i++) {
      alert(
        `Contacto ${i + 1}\nNombre: ${this.contactos[i].nombre}\nTelefono: ${
          this.contactos[i].telefono
        }\n\n`
      );
    }
  }

  agendaLlena() {
    if (this.contactos.length >= this.tamanio) {
      alert(`La agenda esta llena`);
    } else {
      alert(`La agenda no esta llena`);
    }
  }

  huecosLibres() {
    if (this.contactos.length >= this.tamanio) {
      alert(`No se pueden agregar mas contactos`);
    } else {
      let lugares = this.tamanio - this.contactos.length;
      alert(`Se pueden agregar ${lugares} contactos mas`);
    }
  }

  buscarContacto(contactoBuscado) {
    let existe = false;
    let puntero = 0;
    let i = 0;
    for (i = 0; i < this.contactos.length; i++) {
      if (
        this.contactos[i].nombre.toLowerCase() === contactoBuscado.toLowerCase()
      ) {
        existe = true;
        puntero = i;
        break;
      }
    }

    if (existe) {
      alert(
        `Contacto buscado: ${this.contactos[i].nombre}\nTelefono: ${this.contactos[i].telefono}`
      );
    } else {
      alert(`El contacto ${contactoBuscado} no existe`);
    }
  }

  existeContacto(contactoBuscado) {
    let existe = false;
    let puntero = 0;
    let i = 0;
    for (i = 0; i < this.contactos.length; i++) {
      if (
        this.contactos[i].nombre.toLowerCase() === contactoBuscado.toLowerCase()
      ) {
        existe = true;
        puntero = i;
        break;
      }
    }

    if (existe) {
      alert(`El contacto ${contactoBuscado} si existe`);
    } else {
      alert(`El contacto ${contactoBuscado} no existe`);
    }
  }

  eliminarContacto(contactoEliminar) {
    let existe = false;
    let puntero = 0;
    let i = 0;
    for (i = 0; i < this.contactos.length; i++) {
      if (
        this.contactos[i].nombre.toLowerCase() ===
        contactoEliminar.toLowerCase()
      ) {
        existe = true;
        puntero = i;
        break;
      }
    }

    if (existe) {
      alert(`El contacto ${this.contactos[i].nombre} se elimino`);
      this.contactos.splice(i, 1);
    } else {
      alert(`El contacto ${contactoEliminar} no existe`);
    }
  }
}
