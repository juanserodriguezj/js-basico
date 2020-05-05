/* En JavaScript, los parámetros de funciones son por defecto undefined. De todos modos, en algunas situaciones puede ser útil colocar un valor por defecto diferente que lo evalúe como verdadero.
 */
class Persona {
  constructor(nombre, apellido, edad, estatura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.estatura = estatura;
  }

  saludar(fn) {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    if (fn) {
      fn(this.nombre, this.apellido);
    }
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

  saludar(fn) {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`
    );
    if (fn) {
      fn(this.nombre, this.apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Vea pues, no sabia que eras developer`);
  }
}
var juan = new Desarrollador("juan", "rodriguez", 28, 1.82);
var erica = new Persona("erica", "vaca", 30, 1.5);

juan.saludar(responderSaludo);
erica.saludar(responderSaludo);
