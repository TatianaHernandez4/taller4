//Desarrolla una función que calcule el monto de impuestos a pagar según un porcentaje dado. Puedes usar funciones autoejecutables.

(function() {
    // Función para calcular el impuesto
    const calcularImpuesto = (monto, porcentaje) => {
        if (monto < 0 || porcentaje < 0) {
            throw new Error("El monto y el porcentaje deben ser valores positivos.");
        }
        return monto * (porcentaje / 100);
    };

    // Ejemplos de uso
    const monto = 1000;
    const porcentajeImpuesto = 15; // 15%

    const impuesto = calcularImpuesto(monto, porcentajeImpuesto);

    console.log(`Monto original: $${monto}`);
    console.log(`Porcentaje de impuesto: ${porcentajeImpuesto}%`);
    console.log(`Impuesto a pagar: $${impuesto.toFixed(2)}`); // Debería ser 150.00
})();
