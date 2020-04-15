// De declaracion
function mifuncion(){
  return 3;
}
// llamar a la funcion
mifuncion();

// De expresión
var miFuncion = function(a,b){
  return a+b
}
// llamar a la funcion
miFuncion(a,b);

/* --------------------------- */

function nombresdemascotas (mascotas) {
  console.log(mascotas);
  }

  nombresdemascotas("ringo");

  nombresdemascotas("coca");

  nombresdemascotas("mateo");

function saludarEstudiante(estudiante){
  console.log(`Hola ${estudiante}`);
}

/* --------------------------- */

  var persona1 = {
    nombre: "isabel",
    apellido: "berrio",
    edad: 27
  }

  function datosdelusuario (persona) {
  console.log(`hola soy ${persona1.nombre} ${persona1.apellido} y tengo ${persona1.edad} años`);
  }
  datosdelusuario(persona1);
  