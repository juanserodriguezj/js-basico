// Forma 1
/* for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
} */
var estudiantes = ["Alejandro", "Karen", "Diana", "Kevin"];

function saludarEstudiantes(alumno) {
  console.log(`Hola, ${alumno}`);
}

for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}

// Forma 2
/* for (const iterator of object) {
  
} */
var estudiantes = ["Alejandro", "Karen", "Diana", "Kevin"];

function saludarEstudiantes(alumno) {
  console.log(`Hola, ${alumno}`);
}

for (var alumno of estudiantes) {
  saludarEstudiantes(alumno);
}
