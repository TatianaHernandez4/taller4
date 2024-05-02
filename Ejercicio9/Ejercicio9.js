//Escribe una función que genere la tabla de multiplicar de un número específico.

function tablaDeMultiplicar(numero, hasta = 10) {
    // Comprobar que el número sea un valor positivo
    if (numero < 0) {
        throw new Error("El número debe ser positivo.");
    }

    const resultados = []; // Array para almacenar la tabla de multiplicar

    // Generar la tabla de multiplicar del 1 al 'hasta'
    for (let i = 1; i <= hasta; i++) {
        resultados.push(`${numero} x ${i} = ${numero * i}`);
    }

    return resultados; // Devolver el array con la tabla de multiplicar
}

// Ejemplos de uso
const numero = 5;
const tabla = tablaDeMultiplicar(numero);

console.log(`Tabla de multiplicar del ${numero}:`);
tabla.forEach((linea) => console.log(linea));
