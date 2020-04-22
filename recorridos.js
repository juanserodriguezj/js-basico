var articulos = [
  { nombre: "Bici", costo: 3200 },
  { nombre: "Televisor", costo: 12800 },
  { nombre: "Libro", costo: 80 },
  { nombre: "Celular", costo: 1230 },
  { nombre: "Portatil", costo: 123024 },
  { nombre: "Teclado", costo: 400 },
  { nombre: "PS4", costo: 2400 },
];

// utilizamos filter y le enviamos una función en donde definimos el filtro recibiendo el parámetro a filtrar

var articulosFiltrados = articulos.filter(function (elemento) {
  return elemento.costo <= 500;
});

console.log(articulosFiltrados);

// utilizamos map con el fin de traer toda una nueva serie de filtros en un nuevo arreglo, map lee todo el contenido del arreglo

var nombreArticulos = articulos.map(function (elemento) {
  return elemento.nombre;
});

var costoArticulos = articulos.map(function (elemento) {
  return elemento.costo;
});

console.log(nombreArticulos);
console.log(costoArticulos);

/* Mas recorridos en el array */

//Javascript te permite crear arrays de objetos
var cumpleannos = [
  { persona: "Luna", dia: 13 },
  { persona: "Mia", dia: 8 },
  { persona: "Valery", dia: 19 },
  { persona: "Arturo", dia: 3 },
  { persona: "Marisol", dia: 3 },
  { persona: "Leo", dia: 18 },
  { persona: "Leslie", dia: 24 },
  { persona: "Mia", dia: 22 },
  { persona: "Jose", dia: 31 },
  { persona: "Mia", dia: 4 },
];
/* METODO FILTER Crea un nuevo arreglo y con la funcion pasando como parametro cada objeto, regresa al arreglo que se esta creando
los objetos que cumplen con la condicion en el return*/
var cumpleannosPosterioresA10 = cumpleannos.filter(function (cumpleanno) {
  return cumpleanno.dia >= 10;
});
/* METODO MAP Crea un nuevo arreglo ya no con objetos, sino con los valores del valor que necesitamos */
var nombresCumpleanneros = cumpleannos.map(function (nombreCumpleannero) {
  return nombreCumpleannero.persona;
});
/*METODO FIND Sirve para buscar dentro de un arreglo en este caso dentro de varios objetos el valor buscado y 
crea un nuevo arreglo con la busqueda, el detalle es que al parecer solo retorna el primer valor encontrado, en caso
que este se encuentre duplicado */
var buscarCumpleannero = cumpleannos.find(function (cumpleannero) {
  return cumpleannero.persona === "Mia";
});
/*METODO FOREACH A diferencia de los anteriores no genenra un arreglo solo obtiene los valores indicados en el arreglo*/
cumpleannos.forEach(function (cumpleanno) {
  console.log(cumpleanno.persona);
});

/* METODO SOME Te permite validar mediante un true o false si se cumple una condicion dentro de tus arreglos */
var nombreMia = cumpleannos.some(function (nombre) {
  return nombre.persona === "Mia";
});
