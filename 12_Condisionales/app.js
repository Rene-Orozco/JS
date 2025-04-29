// condicionales simples

/* 

if (condicion){
    ingresa si la condicion se cumple
}

*/

let valor = 8;
if (valor == 5){
    console.log("si es igual");

} else {
    console.log("no son iguales");
    
}

// condiciones anidadas

let edad = 50;

if (edad >= 18){

    if (edad < 50){
        console.log(" es menor a 50 y mayor a 18");

    } else {
        console.log("no es menor a 50");
        
    }

} else {
    console.log("es menor a 18");
}