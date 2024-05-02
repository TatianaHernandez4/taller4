//Implementa una función que calcule el factorial de un número dado. Puedes usar cualquier tipo de función.
// Función para calcular el factorial de un número
function factorial(n) {
    if (n < 0) {
        throw new Error("El factorial no está definido para números negativos.");
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Ejemplos de uso de la función factorial
console.log(`Factorial de 5: ${factorial(5)}`); // Debe devolver 120
console.log(`Factorial de 7: ${factorial(7)}`); // Debe devolver 5040
console.log(`Factorial de 0: ${factorial(0)}`); // Debe devolver 1
