/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * 
 * - Un Anagrama consiste en  el cambio en el orden de las letras de una palabra o frase que da lugar a 
otra palabra o frase distinta.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
*/


/*✅ PASOS PARA SABER SI DOS PALABRAS SON ANAGRAMAS:

Comprobar que las dos palabras no sean exactamente iguales.
➤ Si lo son, no pueden ser anagramas (según el enunciado).

Comprobar que tengan la misma longitud.
➤ Si no tienen el mismo número de letras, no pueden ser anagramas.

Convertir ambas palabras en arrays de letras.
➤ Esto te permite ordenarlas fácilmente.

Ordenar las letras de ambas palabras alfabéticamente.
➤ Así, si son anagramas, ambas quedarán idénticas después de ordenar.

Comparar los dos arrays (ya ordenados).
➤ Si son iguales, son anagramas. Si no, no lo son.

Retornar true o false según el resultado.*/ 




function  sonAnagramas (palabra1, palabra2) {
    if (palabra1 === palabra2 || palabra1.length !== palabra2.length) {
        return "No es un anagrama";
    } else {

        //palabra1 es un parametro no una variable por lo que debemos crear una variable donde guardar los arrays de letras de palabra 1 y 2
        let letras1 = palabra1.split('').sort();
        let  letras2 = palabra2.split('').sort();

        /*En JavaScript, cuando comparas arrays con === (como en letras1 === letras2), no compara el contenido, sino si son el mismo objeto
         en memoria, y siempre será false para arrays diferentes, aunque tengan las mismas letras.
        ¿Qué puedes hacer para comparar los arrays correctamente?  convertir los arrays ordenados a strings con .join('') 
        y luego comparar esos strings:*/ 
        if (letras1.join('') === letras2.join('')) {
            return "¡SIIIIIII!, LAS PALABRAS " + palabra1 + " Y " + palabra2 + " SON ANAGRAMAS ";    
        } else {
            return "No es un anagrama"
        }

    }

}

console.log(sonAnagramas("roma","amor"));
console.log(sonAnagramas("roma", "romas")); // no es un anagrama
console.log(sonAnagramas("roma", "roma")); // no es un anagrama


// FORMA MAS CORTA Y ELEGANTE


function sonAnagramas(palabra1, palabra2) {
    if (palabra1 === palabra2 || palabra1.length !== palabra2.length) {
        return "No es un anagrama";
    }

    const sorted1 = palabra1.split('').sort().join('');
    const sorted2 = palabra2.split('').sort().join('');

    return (sorted1 === sorted2)
        ? `¡SIIIIIII!, LAS PALABRAS ${palabra1} Y ${palabra2} SON ANAGRAMAS`
        : "No es un anagrama";
}

