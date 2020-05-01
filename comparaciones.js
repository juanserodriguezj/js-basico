/* Existen varias maneras de comparar variables u objetos dentro de javascript. En el primer ejemplo le asignamos a X un valor numérico y a Y un string. Para poder compararlos debemos agregar dos signos de igual (==). Esto los convierte al mismo tipo de valor y permite que se puedan comparar.
Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===). Esto permite que JavasScript no iguale las variables que son de distinto tipo. Te recomendamos que uses el triple igual siempre que estés comparando variables. */
var x = 4,
  y = "4";
/* Comparaciones */
x == y;
// true

/* Si quremos preguntar si X y Y tienen el mismo valor y ademas son del mismo tipo de variables usamos === */

x === y;
// false

/* Siempre que podamos usemos el ===, es mas en el trabajo debemos usarlo */

/* Vamos a ver como se comporta JS cuando comparamos objetos */

var juan = {
  nombre: "Juan",
};

var otraPersona = {
  nombre: "Juan",
};

juan == otraPersona;
//false
juan === otraPersona;
//false
/* debido a que la referencia es diferente a las variables que comparamos juan tiene una referencia diferente a la de otraPersona, referencia es un lugar en memoria */

var otraPersona = juan;
otraPersona == juan;
//true
otraPersona === juan;
//true
