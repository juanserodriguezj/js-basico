const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const options = { crossDomain: true };

const onPeopleResponse = function (character) {
  console.log(`Hola, yo soy ${character.name}`);
};

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, options, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Sucedio un error al obtener personaje ${id}`);
}

obtenerPersonaje(1)
  .then(function (personaje) {
    console.log(`El personaje ${id} es ${personaje.nombre}`);
  })
  .cath(onError);
