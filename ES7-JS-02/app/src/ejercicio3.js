//Obtener longitudes de palabras con map
//ObjeƟvo: usar map con strings.
//const palabras = ["sol", "luna", "mesa", "python"];
//Genera un arreglo con la longitud de cada palabra.
//Ejemplo esperado:
//[3, 4, 4, 6] 
const palabras= ["sol", "luna", "mesa", "python"];
const longitudes= palabras.map((word) => word.length);
console.log(longitudes); // Output: [3, 4, 4, 6]
