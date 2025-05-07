// ultimo tema de JS bascio

// parseo de datos, conversion de datos, refundicion de datos
let valor =  "124.5";
console.log(typeof(valor));


// forma manual 
let datoConvertido = parseInt(valor);
console.log(datoConvertido);
console.log(typeof(datoConvertido));

let datoFloat = parseFloat(valor);
console.log(datoFloat);
console.log(typeof(datoFloat));


// forma dinamica
let datoNumber = Number(valor);
console.log(datoNumber);
console.log(typeof(datoNumber));

let datoPlus = +valor;
console.log(datoPlus);
console.log(typeof(datoPlus));


// de numero a texto 
let numeroTexto = 32545;
console.log(typeof(numeroTexto));
console.log(typeof(numeroTexto.toString()));





