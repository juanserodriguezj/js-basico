/* utilizar Arrow Functions que permiten una nomenclatura más corta para escribir expresiones de funciones. Este tipo de funciones deben definirse antes de ser utilizadas.
Al escribir las Arrow Functions no es necesario escribir la palabra function, la palabra return, ni las llaves */

const MAYORIA_DE_EDAD = 18;
/* Funcion anonima */
const esMayorDeEdad = function (persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
};

/* Arrow Function */
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log("Acceso Denengado");
  }
}
