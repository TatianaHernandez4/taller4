//Desarrolla una función que cuente la cantidad de palabras en una cadena dada. Puedes usar funciones anónimas.

const contarPalabras = (cadena) => {
    // Dividir la cadena por espacios y filtrar elementos vacíos
    const palabras = cadena.trim().split(/\s+/); // trim() para eliminar espacios al inicio y al final
    return palabras.length; // Devolver la cantidad de palabras
};


const texto1 = "Holi profe, esta es una prueba.";
const texto2 = "   Solo   una palabra    ";
const texto3 = "";

console.log(`Texto: "${texto1}", Número de palabras: ${contarPalabras(texto1)}`); // Debería devolver 6
console.log(`Texto: "${texto2}", Número de palabras: ${contarPalabras(texto2)}`); // Debería devolver 1
console.log(`Texto: "${texto3}", Número de palabras: ${contarPalabras(texto3)}`); // Debería devolver 0
