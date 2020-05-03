var juan = {
  nombre: "juan",
  apellido: "rodriguez",
  edad: 27,
  peso: 80,
};

console.log(`Al inicio del año ${persona.nombre} pesa ${persona.peso}kg`);

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANIO = 365;

const aumentarDePeso = (persona) => {
  persona.peso += INCREMENTO_PESO;
};
// arrowFunction const aumentarPeso = persona => persona.peso += 200
const adelgazar = (persona) => {
  persona.peso -= INCREMENTO_PESO;
};
const comeMucho = () => Math.random() < 0.3;
const realizaDEporte = () => Math.random() < 0.4;

const META = juan.peso - 3;
var dias = 0;

while (juan.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(juan);
  }
  if (realizaDEporte) {
    adelgazar(juan);
  }
  dias += 1;
}

console.log(`Pasaron ${dias} dias hasta que ${juan.nombre} aldelgazo 3kg`);
