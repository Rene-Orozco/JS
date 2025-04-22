// tipós de datos primitivos 
// el tipo de valor que me almacena una variable


/*tipos de datos

tipos numericos (Number)
entero , o como decimal

cadenas de texto (string)

verdadero o falso (boolean)

indefinido (no les dieron un valor, se los dio el mismo sistema)

nulos (los que les dio un valor nulo el programador)
 */

// numerico
let numero = 5;
let numero2 = 5.5;
console.log(typeof(numero));
console.log(typeof(numero2));


// texto
let cadena = "hola";
let cadena2 = 'a';
console.log(typeof(cadena));
console.log(typeof(cadena2));

// verdadero o falso
let decision = true;
let decision2 = false;
console.log(typeof(decision));
console.log(typeof(decision2));


// indefinido
let valor;
console.log(typeof(valor));

// nulo
let dato = null;
console.log(typeof(dato));


// ejemplo de operadores de igualdad
console.log(5 == 5); // true
console.log(5 == '5'); // true
console.log('5' == '5'); // true
console.log('5' == 5); // false


console.log(5 === 5); // true
console.log(5 === '5'); // false
console.log('5' === '5'); // true
console.log('5' === 5); // false

