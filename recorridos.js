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
