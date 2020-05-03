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
