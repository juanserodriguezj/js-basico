var signoUsuario = prompt("Cual es tu signo?");

console.log(`Tu signo es ${signoUsuario}`);

switch (signoUsuario.toUpperCase()) {
  case "ARIES":
    document.write(
      "Mañana propicia para queconfíeensu visión y así pueda tomar esa determinaciónque hace rato lo tiene preocupado. Relájese, todo saldrá de manera correcta."
    );
    break;
  case "TAURO":
    document.write(
      "Aunque quiera cumplir con todos sus compromisos, hoy todo parecerá derrumbarse. No es momento para quese desespere, ya quede a poco todo se acomodará."
    );
    break;
  case "GEMINIS":
    document.write(
      "Sepa quela lucidez mental le permitirá encontrar las soluciones a los problemas. Tendrá que moverse de un lado a otro para resolver esos temas difíciles einsólitos."
    );
    break;
  case "CANCER":
    document.write(
      "Intente ser un poco más reservado en la vida. Disfrute de esta conducta y nose esfuerce en conformar siempre a su entorno, empiece a ser tal cual es."
    );
    break;
  case "LEO":
    document.write(
      "Esté atento, ya que podrá recibir en este día diferentes criticas en torno a sus reacciones emocionales. Debería escucharlas y así podrá mejorar en las relaciones."
    );
    break;
  case "VIRGO":
    document.write(
      "Si tiene algo que cambiar, hágalo hoy. Este día le ofrece las mejores posibilidades para enfrentar las transformaciones y los cambios ensu vida."
    );
    break;
  case "LIBRA":
    document.write(
      "En esta jornada, después de tanto logrará recuperar el tiempo perdido y podrá concretar todas las tareas que le quedaron pendientes ensu vida profesional."
    );
    break;
  case "ESCORPIO":
    document.write(
      "Entienda que ya es hora para tomar esa determinación sin demorarse más tiempo. Sepa queno será conveniente que deje para mañana lo que desea hacer."
    );
    break;
  case "SAGITARIO":
    document.write(
      "Un cierto estado de indiferencia lo acompañará en el día. Evite cualquier esfuerzo y tómese el tiempo que crea necesario para cumplir con todas sus obligaciones."
    );
    break;
  case "CAPRICORNIO":
    document.write(
      "Durante esta jornada, su vida social tomará otro rumbo ya que tendrá nuevos compromisos. Aproveche ya quesu entusiasmo se potenciará."
    );
    break;
  case "ACUARIO":
    document.write(
      "Intente ser más responsable con sus decisiones y no acuse a los demás de sus propios errores. Comience a trabajar para solucionarlos y no recaer en ellos."
    );
    break;
  case "PISCIS":
    document.write(
      "Será un buen momento para el inicio de sus proyectos. Tener la Luna ensu signo lo beneficiará en las decisiones que deba tomar durante esta jornada."
    );
    break;
  default:
    document.write("por favor, ingrese su signo correctamente");
}
