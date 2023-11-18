const obtenerNumeroAleatorio = () => Math.floor(Math.random() * 10) + 1;

const jugador = {
    nombre: prompt("¡Bienvenido! ¿Cual es tu nombre?"),
    intentosRealizados: [],
    puntaje: 0,
};

if (!jugador.nombre || jugador.nombre.trim() === "") {
    alert("¡Hasta luego!");
}else{


const juego = {
    numeroAleatorio: obtenerNumeroAleatorio(),
    intentos: 3,
};


const validarNumero = numero => !isNaN(numero) && numero >= 1 && numero <= 10;

const jugar = () => {
    while (juego.intentos > 0) {
        let intento = parseInt(prompt(`Hola ${jugador.nombre}, intenta adivinar el numero (entre 1 y 10). Intentos restantes: ${juego.intentos}`));

        if (!validarNumero(intento)) {
            alert("Ingresa un numero valido entre 1 y 10.");
            continue;
        }

        if (intento === juego.numeroAleatorio) {
            jugador.puntaje++;
            jugador.intentosRealizados.push(intento);
            alert(`¡Felicidades, ${jugador.nombre}! ¡Adivinaste el numero!`);
        break;
        } else {
            jugador.intentosRealizados.push(intento);
            juego.intentos--;
            alert(`Numero incorrecto. ¡Intenta de nuevo!`);
        }
    }

    if (juego.intentos === 0) {
        alert(`Se acabaron los intentos, ${jugador.nombre}. El numero era: ${juego.numeroAleatorio}.`);
    }

    mostrarResultado();
};

const mostrarResultado = () => {
    alert(`Fin del juego, ${jugador.nombre}. Puntaje: ${jugador.puntaje}. Intentos realizados: ${jugador.intentosRealizados}`);
    
    reiniciarJuego();
};

const reiniciarJuego = () => {
    const reiniciar = confirm("¿Quieres jugar de nuevo?");
    if (reiniciar) {
        juego.numeroAleatorio = obtenerNumeroAleatorio();
        juego.intentos = 3;
        jugador.intentosRealizados = [];
        jugar();
    } else {
        alert(`Gracias por jugar, ${jugador.nombre}!`);
    }
};
jugar()

}

