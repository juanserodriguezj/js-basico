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

// Funcion constructora
function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
  this.detallesDelAuto = function () {
    console.log(
      `Este vehiculo es un ${this.modelo}, de la marca ${this.marca}, año ${this.annio}`
    );
  };
}

var autos = [ ]

functionauto (marca, modelo, annio){ 
  this.marca = marca 
  this.modelo = modelo
  this.annio = annio
}

var marcas = ["Toyota", "BMW", "Honda", "Mercedez-Benz", "Ford"]
var modelo = ["Corolla", "X6", "FIT", "GLE", "Raptor"]
var annio = ["2017", "2020", "2016", "2020", "2015"]

for (var i = 0; i < marcas.length; i++) {
  autos.push(new auto(
    marcas[i],
    modelo[i],
    annio[i]))
}

console.log(autos);
