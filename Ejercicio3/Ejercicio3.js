//Crea una función que ordene un array de números de manera ascendente. Puedes utilizar funciones flecha.

const ordenarAscendente = (arr) => {
    return arr.sort((a, b) => a - b); // Comparación para ordenar de menor a mayor
};


const numeros = [5, 3, 8, 1, 2, 7, 4, 6];
const numerosOrdenados = ordenarAscendente(numeros);

console.log("Array original:", numeros);
console.log("Array ordenado ascendentemente:", numerosOrdenados);
