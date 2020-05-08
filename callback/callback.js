const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const options = { crossDomain: true };

const onPeopleResponse = function (character) {
  console.log(`Hola, yo soy ${character.name}`);
};

/* Un callback es una función que se pasa a otra función como un argumento. Esta función se invoca, después, dentro de la función externa para completar alguna acción. */

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, options, onPeopleResponse);
}

//obtenerPersonaje(1);
//obtenerPersonaje(2);
//obtenerPersonaje(3);

/* Es el asincronismo en su maximo expresion, basicamente no sabemos en que orden nos van a llegar las repuestas, entender que vamos a llamar un metodo asincronico que no sabemos en orden nos van a llegar las respuestas, eso depende del servidor y de cuanto va a demorar en responder los request, solo sabemos el orden en que iniciamos los requests pero no sabemos en que orden nos va a llegar  */
//-------------------------------------------------
/* Una manera de asegurar que se respete la secuencia en que hemos realizado múltiples tareas es utilizando callbacks, con lo que se ejecutará luego, en cada llamada. Lo importante es que el llamado al callback se haga a través de una función anónima. Sin embargo, al hacerlo de esta manera generamos una situación poco deseada llamada CallbackHell. */

function obtenerPersonaje2(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  $.get(url, options, callback).fail(() => {
    console.log(`Sucedio un error. No se pudo obtener al personaje ${id}`);
  });
}
// -----CallbackHell -----
obtenerPersonaje2(1, function (character) {
  console.log(`Hola, yo soy ${character.name}`);
  obtenerPersonaje2(2, function (character) {
    console.log(`Hola, yo soy ${character.name}`);
    obtenerPersonaje2(3, function (character) {
      console.log(`Hola, yo soy ${character.name}`);
    });
  });
});
