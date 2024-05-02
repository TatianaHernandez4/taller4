//mplementa una función que verifique si una palabra es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda).I

function esPalindromo(palabra) {
    // Convertir la palabra a minúsculas y eliminar espacios en blanco para evitar errores
    const normalizada = palabra.toLowerCase().replace(/\s+/g, '');

    // Invertir la palabra
    const invertida = normalizada.split('').reverse().join('');

    // Comparar la palabra original con su versión invertida
    return normalizada === invertida;
}

// Ejemplos de uso
console.log(`"anilina" es un palíndromo: ${esPalindromo("anilina")}`); // Debería ser verdadero (true)
console.log(`"reconocer" es un palíndromo: ${esPalindromo("reconocer")}`); // Debería ser verdadero (true)
console.log(`"java" es un palíndromo: ${esPalindromo("java")}`); // Debería ser falso (false)
console.log(`"Anita lava la tina" es un palíndromo: ${esPalindromo("Anita lava la tina")}`); // Debería ser verdadero (true)
