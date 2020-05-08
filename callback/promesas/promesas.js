const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const options = { crossDomain: true };

const onPeopleResponse = function (character) {
  console.log(`Hola, yo soy ${character.name}`);
};

function obtenercharacter(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, options, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Sucedio un error al obtener character ${id}`);
}

/* A diferencia de los callbacks en el CallbackHell, que terminan estando anidados unos dentro de otros, cuando se usan Promesas la ejecución de las llamadas no se hacen de manera anidada sino de manera encadenada, al mismo nivel una debajo de la otra, lo que hace que el código sea mucho más legible y mantenible. */

obtenercharacter(1)
  .then((character) => {
    console.log(`El character 1 es ${character.name}`);
    return obtenercharacter(2);
  })
  .then((character) => {
    console.log(`El character 2 es ${character.name}`);
    return obtenercharacter(3);
  })
  .then((character) => {
    console.log(`El character 3 es ${character.name}`);
    return obtenercharacter(4);
  })
  .then((character) => {
    console.log(`El character 4 es ${character.name}`);
    return obtenercharacter(5);
  })
  .then((character) => {
    console.log(`El character 5 es ${character.name}`);
    return obtenercharacter(6);
  })
  .then((character) => {
    console.log(`El character 6 es ${character.name}`);
  })
  .catch(onError);
// estos requests se estan haciendo en serie y no en paralelo.
