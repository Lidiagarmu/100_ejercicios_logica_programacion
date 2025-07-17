/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 * 
 * 
 * Es la proporción entre el ancho y el alto de una imagen, reducida a los términos más simples.
Por ejemplo:
Una imagen de 1920x1080 píxeles tiene un aspect ratio de 16:9, porque:
1920 ÷ 120 = 16
1080 ÷ 120 = 9
El 120 es el máximo común divisor (MCD) de 1920 y 1080.
 */



// Paso 1: creamos la función para calcular el MCD (Maximo Comun Divisor)
// usamos el algoritmo de Euclides

function calcularMCD (a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


// Paso 2: creamos una funcion que reciba ancho y alto y calcule el aspect ratio reducido
function obtenerApectRatio (width, height) {
    let mcd = calcularMCD(width, height);
    let anchoReducido = width / mcd;
    let altoReducido =  height / mcd;
    return `${anchoReducido}:${altoReducido}`;
}


// Paso 3: cargar la imagen desde la URL 
let imagen = new Image();

// establecemos la URL de la imagen 
imagen.src = "https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png";


// Paso 4:  esperamos a que cargue la imagen para poder leer sus dimensiones
imagen.onload = function(){
    let width = imagen.width; //ancho de la imagen
    let height = imagen.height; //alto de la imagen 

    console.log("Ancho: ", width);
    console.log("Alto: ", height);
    
// Paso 5: calculamos el aspect ratio con la funcion que hicims
let ratio = obtenerApectRatio(width, height);
console.log("Aspect Ratio: ", ratio); // mostramos el resultado
}; 

// Paso 6: (opcional) Manejo de errores si la imagen no carga
imagen.onerror = function () {
    console.log("No se pudo cargar la imagen desde la URL.");
};