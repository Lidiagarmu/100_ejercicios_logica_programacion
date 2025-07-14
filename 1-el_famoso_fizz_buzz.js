/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */



// 1- escribimos bucle que imprima numeros del 1 al 100
// 2- modificar el programa para que , por ejemplo, si el num es multiplo de 3, en lugar de imprimir el numero, imprima fizz


/* 
 IMPORTANTE 

Orden del condicional
Este bloque:

if (x % 3 === 0) { ... }
else if (x % 5 === 0) { ... }
else if (x % 3 === 0 && x % 5 === 0) { ... }
tiene un problema de orden.

Si x = 15, por ejemplo:

Es divisible por 3 y 5, pero como el primer if se cumple (x % 3 === 0), ya no se llega al else if donde pondrías "fizzbuzz".

✅ Lo correcto es verificar primero si es múltiplo de ambos (3 y 5).


*/




for (let x = 1; x<= 100;  x++) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("fizzbuzz");
    } else if (x % 3 === 0) {
        console.log("fizz");
    } else if  ( x % 5 === 0 ) {
        console.log("buzz"); 
    } else {console.log(x); }
}