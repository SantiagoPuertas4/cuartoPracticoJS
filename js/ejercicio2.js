/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
 */

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  ingresarDinero(saldoIngresado) {
    this.saldo = this.saldo + saldoIngresado;
  }

  extraerDinero(saldoExtraido) {
    if (saldoExtraido > this.saldo) {
      console.log(
        `La cuenta no dispone del dinero suficiente para extraer esa cantidad`
      );
    } else {
      this.saldo = this.saldo - saldoExtraido;
    }
  }

  informarEstado() {
    console.log(
      `El estado de la cuenta de ${this.titular} es de: $${this.saldo}`
    );
  }
}

const cuentaAlex = new Cuenta("Alex");

cuentaAlex.informarEstado();
cuentaAlex.ingresarDinero(10000);
cuentaAlex.extraerDinero(2000);
cuentaAlex.extraerDinero(10000);
cuentaAlex.informarEstado();
