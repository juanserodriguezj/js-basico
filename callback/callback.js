const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const options = { crossDomain: true };
const onPeopleResponse = function (character) {
  console.log(`Hola yo soy, ${character.name}`);
};

$.get(lukeUrl, options, onPeopleResponse);
/* Un callback es una función que se pasa a otra función como un argumento. Esta función se invoca, después, dentro de la función externa para completar alguna acción. */
