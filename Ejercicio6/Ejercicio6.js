//Crea una función que filtre los números pares de un array. Puedes utilizar funciones de expresión.

const filtrarPares = (arr) => {
    return arr.filter((num) => num % 2 === 0); // Devuelve solo números pares
};


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = filtrarPares(numeros);

console.log("Array original:", numeros);
console.log("Números pares:", pares); // Debería devolver [2, 4, 6, 8, 10]
