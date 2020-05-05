// prototipo de persona
function Persona(nombre, apellido, edad, estatura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.estatura = estatura;
}
// funciones del prototipo
Persona.prototype.saludar = function () {
  return console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};
//arrowfunction ↑ Persona.prototype.saludar = function ()=> console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
Perosona.prototype.soyAlto = function () {
  return this.estatura > 1.8;
};
//arrowfunction ↑ Persona.prototype.soyAlto = function ()=> this.estatura > 1.8;

var juan = new Persona("juan", "rodriguez", 28, 1.82);
var erica = new Persona("erica", "vaca", 30, 1.5);

erica.saludar();
juan.saludar();
erica.soyAlto();
juan.soyAlto();

/* ------------------- Herencia */

/* Javascript no soporta la herencia por que no hay clases, lo que hay son prototipos que son objetos, que les vamos agregando metodos que reciben funciones, no hay un sistema para indicar que un prototipo va a heredar de otro.  */

/* Los objetos en JavaScript son “contenedores” dinámicos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos. */

// herencia prototipal, decimos que una subclase puede responder a un metodo si no sabe, busca en el prototipo padre va a pasar a un nivel arriba hasta llegar a object.

// vamos a crear un prototipo desarrollados un subtipo de persona.

function Desarrollador(nombre, apellido) {
  this.nombre;
  this.apellido;
}

function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () {};
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn();
  prototipoHijo.prototype.constructor = prototipoHijo;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
  console.log(
    `Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`
  );
};
