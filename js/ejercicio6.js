/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

 */

class Libro {
  constructor(isbn, titulo, autor, numeroDePaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numeroDePaginas = numeroDePaginas;
  }

  setISBN(codigoSet) {
    this.isbn = codigoSet;
  }

  getISBN() {
    console.log(`ISBN: ${this.isbn}`);
  }

  setTitulo(tituloSet) {
    this.titulo = tituloSet;
  }

  getTitulo() {
    console.log(`Titulo: ${this.titulo}`);
  }

  setAutor(autorSet) {
    this.autor = autorSet;
  }

  getAutor() {
    console.log(`Autor: ${this.autor}`);
  }

  setPaginas(paginaSet) {
    this.numeroDePaginas = paginaSet;
  }

  getPaginas() {
    console.log(`Numero de paginas: ${this.numeroDePaginas}`);
  }

  mostrarLibro() {
    console.log(
      `El libro ${this.nombre} con ISBN ${this.isbn} creado por el auto ${this.autor} tiene ${this.numeroDePaginas} paginas`
    );
  }
}

const harryPotter = new Libro(
  1,
  "Harry Potter y la Piedra Filosofal",
  "JK Rowling",
  100
);
const biblia = new Libro(1, "La Biblia", "Tobias Zarlenga", 5000);

if (harryPotter.numeroDePaginas > biblia.numeroDePaginas) {
  console.log(`Harry Potter tiene mas paginas`);
} else {
  console.log(`El libro de tobias tiene mas paginas`);
}
