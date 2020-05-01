var personita = {
  nombre: "cristina",
  apellido: "berrio",
  edad: 27,
};

var hombre = {
  nombre: "federico",
  apellido: "gonzalez",
  edad: 35,
};

function imprimirnombreenmayusculas(persona) {
  //var nombre = persona.nombre y desestruturado se escribe asi
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}
imprimirnombreenmayusculas(personita);
imprimirnombreenmayusculas(hombre);

//cuando ponemos como parametro edad el valor de personita y hombre no se va ver afectado
/*function cumpleanos(edad){
    edad += 1*/
//}

//cuando ponemos en el pparametro persona y persona.edad se va a ver y se va incrementar el valor de personita se va sumar la edad
/*function cumpleaños(persona){
    persona.edad += 1
}*/

//entonces que podemos hacer con esto 1 opcion o dejarlo asi que el objecto que le pasamos sea modificado 0 tambien podemos devolver un nuevo objecto y que tenga todo lo mismo de esa persona excepto la edad hacemos un return ejemplo con este return nos devuelve una persona mas vieja se va sumar la edad
//la edad se suma una vez no varias veces como el otro ejemplo

function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1,
  };
}
/* Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función. Para solucionar esto se puede crear un objeto diferente. Esto lo podemos hacer colocando tres puntos antes del nombre. Ej …persona.
 */
/* De esta manera tenemos que tener encuenta como se comporta JS al recibir objots como parametro, Queremos que se modifiquen esos objetos que pasamos por parametros puede ser que si pero tambien queremos conservar ese objeto y creamos un nuevo objeto modificado. */
