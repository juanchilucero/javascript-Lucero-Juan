

// funcion eleccion del jugador
function obtenerEleccionJugador() 
{
    let eleccion = prompt("Elige: piedra, papel o tijeras").toLowerCase();
    while (eleccion !== "piedra" && eleccion !== "papel" && eleccion !== "tijeras") 
    {
        alert("Eleccion no valida. Intentalo de nuevo.");
        eleccion = prompt("Elige: piedra, papel o tijeras").toLowerCase();
    }
    return eleccion;
}

  // funcion computadora
function obtenerEleccionComputadora() 
{
    const opciones = ["piedra", "papel", "tijeras"];
    const eleccionAleatoria = Math.floor(Math.random() * 3);
    return opciones[eleccionAleatoria];
}

  // funcion resultado
function determinarResultado(eleccionJugador, eleccionComputadora) 
{
    if (eleccionJugador === eleccionComputadora) 
    {
    return "¡Es un empate!";
    } else if (
        (eleccionJugador === "piedra" && eleccionComputadora === "tijeras") ||
        (eleccionJugador === "papel" && eleccionComputadora === "piedra") ||
        (eleccionJugador === "tijeras" && eleccionComputadora === "papel")
    ) {
        return "¡Ganaste!";
    } else {
        return "Lo siento, Perdiste. ¡Intentalo de nuevo!";
    }
}

  // funcion ejecutar juego
function jugarPiedraPapelTijeras() {
    let continuarJugando = true;

    while (continuarJugando) {
        const eleccionJugador = obtenerEleccionJugador();
        const eleccionComputadora = obtenerEleccionComputadora();
        const resultado = determinarResultado(eleccionJugador, eleccionComputadora);
        alert(`Tu eleccion: ${eleccionJugador}\nEleccion de la computadora: ${eleccionComputadora}\n${resultado}`);

        const respuesta = prompt("¿Quieres jugar de nuevo? (Si/No)").toLowerCase();

        if (respuesta === "no") {
            continuarJugando = false;
            alert("Gracias por jugar");
        } else if (respuesta !== "si") {
            alert("Respuesta no valida. Por favor, ingresa 'Si' o 'No'.");
        }
    }
}


  // iniciar funcion juego
jugarPiedraPapelTijeras();
