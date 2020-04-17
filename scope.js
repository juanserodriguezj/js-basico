var miNombre = "Juan Sebastian"; /* scope global */

function nombre() {
  var miApellido = "Rodriguez"; /* scope local */
  console.log(miNombre + " " + miApellido);
}
nombre(); // arroja mi nombre completo

console.log(miNombre); // arroja mi nombre

console.log(miApellido); // arroja error
