/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

// Paso 1: inicializa las variables con los dos primeros números de Fibonacci

let a = 0;
let b = 1;

// Paso 2: imprime el primer número (0)

console.log(a);

// Paso 3: crea un ciclo que se repita para imprimir los siguientes 49 números

for ( let i=0; i<49; i++) {
      // Paso 4: calcula el siguiente número de Fibonacci sumando los dos anteriores
        let siguiente = a + b;

        // Paso 5: imprime el número siguiente
        console.log(siguiente);

         // Paso 6: actualiza las variables para la siguiente iteración
         a=b;
         b= siguiente;       

}

         // VERSION MEJORADA - LOS IMPRIME EN UNA SOLA LINEA SEPARADOS POR COMAS

let x = 0;
let y = 1;
let serie = [];

// Agregar el primer número
serie.push(x);

// Generar los siguientes 49 números
for (let i = 0; i < 49; i++) {
  let siguiente = x + y;
  serie.push(siguiente);
  x = y;
  y = siguiente;
}

// Imprimir toda la serie separada por comas
console.log(serie.join(", "));
