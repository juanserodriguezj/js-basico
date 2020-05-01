var santiago = {
  nombre: "Santiago",
  apellido: "Perez",
  edad: 19,
};

var dario = {
  nombre: "Dario",
  apellido: "Susnisky",
  edad: 27,
};

function imprimirNombreMayusculas(persona) {
  //Ejemplo de Destructuracion de objeto
  //var nombre = persona.nombre
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

function imprimirNombreYEdad(persona) {
  var { nombre } = persona,
    { edad } = persona;
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreMayusculas(santiago);
imprimirNombreMayusculas(dario);
imprimirNombreYEdad(santiago);
imprimirNombreYEdad(dario);
