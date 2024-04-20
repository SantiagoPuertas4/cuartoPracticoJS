/* 7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

**aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
**existeContacto(Contacto): indica si el contacto pasado existe o no.
**listarContactos(): Lista toda la agenda
**buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
**eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
**agendaLlena(): indica si la agenda está llena.
**huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
 */
import { Agenda } from "../utilities/Agenda.js";
import { Contacto } from "../utilities/Contacto.js";

function crearAgenda() {
  let tamanioAgenda = 0;
  if (!agendaCreada) {
    do {
      tamanioAgenda = prompt("Ingresa el tamaño de la agenda");

      if (tamanioAgenda === null) {
        alert("No ingreso nada");
      } else if (isNaN(tamanioAgenda)) {
        alert("No ingreso un numero");
      } else {
        break;
      }
    } while (true);

    const agenda = new Agenda(tamanioAgenda);
    agendaCreada = true;
  } else {
    alert("Agenda ya creada");
  }
}

function agregarContactos() {
  do {
    let contactoAgredado = "";
    let numeroContacto = 0;
    let i = false;

    contactoAgredado = prompt(`Ingresa el nombre del contacto`);
    numeroContacto = prompt(`Ingresa el numero de ${contactoAgredado}`);

    agenda.agregarContactos(contactoAgredado, numeroContacto);
  } while (true);
}

let salir = false;
let agendaCreada = false;

do {
  let opcion = 0;

  opcion = Number(
    prompt(
      `1. Crear agenda \n2. Añadir contactos \n3. Existe contacto \n4. Listar agenda \n5. Buscar contacto \n6. Eliminar contacto \n7. Agenda llena \n8. Huecos libres \n9. Salir`
    )
  );

  switch (opcion) {
    case 1:
      crearAgenda();
      break;
    case 2:
      agregarContactos();
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      break;
    case 9:
      salir = true;
      break;
    default:
      alert("Opcion invalida");
      break;
  }
} while (salir === false);

// const persona1 = new Contacto("Santiago", 3816713466);
// const persona2 = new Contacto("Eze", 3815038570);

// const agenda = new Agenda(3);

// agenda.aniadirContacto(persona1);
// agenda.aniadirContacto(persona2);

// agenda.listarContactos();

// agenda.buscarContacto("Santiago");
// agenda.buscarContacto("Eze");
// agenda.buscarContacto("Santi");

// agenda.agendaLlena();
// agenda.huecosLibres();
// agenda.existeContacto("Eze");

// const persona3 = new Contacto("Tobias", 3815038570);
// agenda.aniadirContacto(persona3);
// agenda.agendaLlena();
// agenda.huecosLibres();
// agenda.existeContacto("Ezequiel");

// agenda.eliminarContacto("Tobias");
// agenda.existeContacto("Tobias");
