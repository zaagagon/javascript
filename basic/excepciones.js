let entradaUsuario = "hola"; // simulamos que el usuario escribió texto
let numero = null;

try {
    // Intentamos convertir la entrada a número
    numero = Number(entradaUsuario);

    if (isNaN(numero)) {
        // Si no es un número, lanzamos un error
        throw new Error("El valor ingresado no es un número válido");
    }

    console.log("Número válido:", numero);
} catch (e) {
    console.error("Error capturado:", e.message);
    numero = null;
}

console.log("Resultado final:", numero);
