// formateo numerico
let numero = Math.PI;
console.log(numero);

function formateo (arg){

    let cadena,
        punto,
        numeroFormato
    
        cadena = arg.toString(); // convertir a texto
        punto = cadena.indexOf("."); // buscar si existe un . 1
        cadena = cadena.slice(0, (punto + 4)); //recortamos el tex (0 , 4-1 )
        numeroFormato = Number(cadena); // covertirlo en numero 
        return(numeroFormato)

}
console.log(formateo(numero));

