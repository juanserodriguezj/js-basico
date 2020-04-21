function game(player, computer) {
  switch (player) {
    case "piedra":
      if (computer === "tijera") {
        returnconsole.log(
          `Haz seleccionado ${player} y yo tengo ${computer}, has ganado!!!`
        );
      } else if (player === computer) {
        returnconsole.log("Es un empate!!!");
      } else {
        returnconsole.log("Perdiste!!!");
      }
      break;
    case "papel":
      if (computer === "piedra") {
        returnconsole.log(
          `Haz seleccionado ${player} y yo tengo ${computer}, has ganado!!!`
        );
      } else if (player === computer) {
        returnconsole.log("Es un empate!!!");
      } else {
        returnconsole.log("Perdiste!!!");
      }
      break;
    case "tijera":
      if (computer === "papel") {
        returnconsole.log(
          `Haz seleccionado ${player} y yo tengo ${computer}, has ganado!!!`
        );
      } else if (player === computer) {
        returnconsole.log("Es un empate!!!");
      } else {
        returnconsole.log("Perdiste!!!");
      }
      break;
    default:
      console.log("Opciones invalidas!!!");
  }
}
