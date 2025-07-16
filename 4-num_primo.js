/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */




// FUNCION QUE VERIFICA SI EL NUMERO ES PRIMO O NO 

function esPrimo (num)  {
    //recorre desde 2 hasta num - 1
    for (let i=2; i<num; i++){
        //si es divisible por algún número, no es primo
        if (num % i ===0){
            return  num + " NO";
        }
    }
    // si no encontró ningún divisor, entonces si es primo
    return num + "  SI ES PRIMO ";

}


// BUCLE FUERA DE LA FUNCION, QUE LA LLAMA DEL 1 AL 100

    for (let i = 1; i<=100; i++){
        let resultado = esPrimo(i);
        console.log(resultado);
        
}