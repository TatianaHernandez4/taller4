//Crea una función que valide si una contraseña cumple con ciertos criterios (longitud, caracteres especiales, etc.). Puedes utilizar métodos de funciones.

function validarContrasena(contrasena) {
    const MIN_LENGTH = 8; // Longitud mínima de la contraseña

    // Verificar la longitud de la contraseña
    if (contrasena.length < MIN_LENGTH) {
        return { valida: false, error: `La contraseña debe tener al menos ${MIN_LENGTH} caracteres.` };
    }

    // Verificar la presencia de al menos un carácter especial
    const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(contrasena);
    if (!tieneCaracterEspecial) {
        return { valida: false, error: "La contraseña debe contener al menos un carácter especial." };
    }

    // Verificar la presencia de al menos un número
    const tieneNumero = /\d/.test(contrasena);
    if (!tieneNumero) {
        return { valida: false, error: "La contraseña debe contener al menos un número." };
    }

    // Verificar la presencia de al menos una letra mayúscula
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    if (!tieneMayuscula) {
        return { valida: false, error: "La contraseña debe contener al menos una letra mayúscula." };
    }

    // Verificar la presencia de al menos una letra minúscula
    const tieneMinuscula = /[a-z]/.test(contrasena);
    if (!tieneMinuscula) {
        return { valida: false, error: "La contraseña debe contener al menos una letra minúscula." };
    }

    // Si pasa todas las verificaciones
    return { valida: true, error: null };
}


const contrasenas = [
    "Password123!",
    "password",
    "12345678",
    "PASSWORD!",
    "Pas123!",
];

contrasenas.forEach((contrasena) => {
    const resultado = validarContrasena(contrasena);
    console.log(`Contraseña: "${contrasena}"`);
    console.log(`¿Es válida? ${resultado.valida}`);
    if (!resultado.valida) {
        console.log(`Error: ${resultado.error}`);
    }
    console.log("----------");
});
