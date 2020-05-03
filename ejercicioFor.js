var juan = {
  nombre: "juan",
  apellido: "rodriguez",
  edad: 27,
  peso: 80,
};

console.log(`Al inicio del año ${persona.nombre} pesa ${persona.peso}kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANIO = 365;

const aumentarDePeso = (persona) => {
  persona.peso += INCREMENTO_PESO;
};
// arrowFunction const aumentarPeso = persona => persona.peso += 200
const adelgazar = (persona) => {
  persona.peso -= INCREMENTO_PESO;
};

for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
  var random = Math.random();
  if (random < 0.25) {
    aumentarDePeso(juan);
  } else if (random < 0.5) {
    aldegazar(peso);
  }
}

console.log(
  `Al final del año ${persona.nombre} pesa ${persona.peso.toFixed(1)}kg`
);
