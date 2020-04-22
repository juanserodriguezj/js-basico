var estudiantes = ["Andres", "Francisco", "Luz", "Diana"];

function saludarEstudiantes(alumno) {
  console.log(`Hola, ${alumno}`);
}

// el while va a ejecutar las instrucción dentro de {} mientras lo que está entre () se cumpla

while (estudiantes.length > 0) {
  console.log(estudiantes);
  var alumno = estudiantes.shift();
  saludarEstudiantes(alumno);
}
