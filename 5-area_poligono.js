/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */


let triangulo = {
    tipo: "triangulo",
    base: 10,
    altura: 5,
};

let cuadrado = {
    tipo: "cuadrado",
    lado: 4,
};

let rectangulo = {
    tipo: "rectangulo",
    base: 8,
    altura: 3,
};



// funcion 

//1 - recibe un objeto al que llamamos poligono

function calcularArea (poligono) {

    //2- la funcion revisa el tipo 
    switch (poligono.tipo) {
        case "triangulo":
            return (poligono.base*poligono.altura) / 2;
            break;
        case "cuadrado":
            return (poligono.lado*poligono.lado);
            break;
        case "rectangulo":
             return (poligono.base*poligono.altura);
            break;
        default:
            return ("Tipo de polígono no válido");
    }

}let circulo = {
    tipo: "circulo",
    radio: 3
};



console.log("Área del triángulo:", calcularArea(triangulo));   // Esperas: 25
console.log("Área del rectángulo:", calcularArea(rectangulo)); // Esperas: 24
console.log("Área del cuadrado:", calcularArea(cuadrado));     // Esperas: 16


// Para que no nos de error de "circulo is not defined" debemos crear la variable el objeto circulo 
// para que nos devuelve el case default dewbemos no incluir el poligono circulo en la funcion 
console.log("Área del círculo:", calcularArea(circulo)); //Esperas: Tipo de polígono no válido
