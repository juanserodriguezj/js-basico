/* Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.
La palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase.
El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase. */
class Persona {
  constructor(nombre, apellido, edad, estatura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.estatura = estatura;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }

  soyAlto() {
    return this.estatura > 1.8;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    // llamando al constructor de la clase padre
    super(nombre, apellido, altura);
  }

  saludar() {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`
    );
  }
}

var juan = new Persona("juan", "rodriguez", 28, 1.82);
var erica = new Persona("erica", "vaca", 30, 1.5);
