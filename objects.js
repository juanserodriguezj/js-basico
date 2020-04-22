var miCarro = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
};

// para acceder a los valores de nuestro objetos usamos .valor del objeto

miCarro.modelo;

miCarro.marca;

var miCarro = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  detalleDelCarro: function () {
    console.log(`Auto ${miCarro.modelo}${this.annio}`); // this. señala al objeto o padre para unirlo con .valor para traer otro objeto declarado
  },
};

miCarro.detalleDelCarro();
