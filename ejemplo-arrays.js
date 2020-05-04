var juan = {
  nombre: "Juan",
  apellido: "Rodriguez",
  altura: 1.82,
};
var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86,
};
var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85,
};
var paula = {
  nombre: "Paula",
  apellido: "Barrios",
  altura: 1.75,
};
var vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.55,
};
var dario = {
  nombre: "Dario",
  apellido: "Juarez",
  altura: 1.75,
};

//crear un arreglo
var personas = [juan, alan, martin, paula, vicky, dario];
// El valor que esta entre [] se le coconce como indice

// acceder al primer elemento
personas[0];

// acceder a un valor del elemento en el arreglo
personas[0].altura;
personas[0]["nombre"];

// recorrer el array personas
for (var i = 0; i < personas.length; i++) {
  var persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.altura}`);
}
/* ------- flirtar elementos de un array ------- */
// para filtrar necesitamos 2 cosas un array y una condicion

const esAlta = (persona) => {
  return persona.altura > 1.8;
};
//arrowfunction const esAlta = persona => persona.altura > 1.8

// otra forma mas prolija es: const esAlta = ({altura}) => altura > 1.8

var personasAltas = personas.filter(/*Condicion*/ esAlta);
// var personaAltas = personas.filter(funtion(persona{return persona.altura > 1.8}))
console.log(personasAltas);
/* filter devuelve un nuevo array */

const esBaja = (persona) => {
  return persona.altura > 1.8;
};

var personasBajas = personas.filter(/*Condicion*/ esBaja);
console.log(personasBajas);

/* -------------- Transformar un array -------------- */
// map nos devuelve un nuevo array,
const pasarAlturaACm = (persona) => ({
  ...persona, // un nuevo objeto con la persona desglosada
  altura: (persona.altura *= 100),
});

var personasCm = personas.map(pasarAlturaACm);
console.log(personasCm);

/* -------------- Reducir un array -------------- */
const REDUCER = (acum, persona) => {
  return acum + persona.altura;
};
// arrowFunction simplificada const reducer = (acum, persona) => acum + persona.altura;
// arrowFunction desestructuramos const reducer = (acum, {persona.altura}) => acum + persona.altura;
var totalDeAltura = personas.reduce(reducer, 0);
