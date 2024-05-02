//Escribe una función para calcular el área de un círculo. Puedes utilizar funciones declarativas.

function calcularAreaCirculo(radio) {
    if (radio < 0) {
        throw new Error("El radio no puede ser negativo");
    }
    const pi = Math.PI; // Constante para el valor de π
    return pi * Math.pow(radio, 2); // Usar la fórmula para el área
}

// Ejemplos de uso
console.log(`Área de un círculo con radio 5: ${calcularAreaCirculo(5).toFixed(2)}`); // Debería ser aproximadamente 78.54
console.log(`Área de un círculo con radio 7: ${calcularAreaCirculo(7).toFixed(2)}`); // Debería ser aproximadamente 153.94
console.log(`Área de un círculo con radio 0: ${calcularAreaCirculo(0).toFixed(2)}`);  // Debería ser 0
