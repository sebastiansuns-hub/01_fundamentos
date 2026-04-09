//ConverƟr nombres a mayúsculas con map
//ObjeƟvo: transformar cadenas de texto.
//const nombres = ["juan", "luis", "pepito", "pedro"];
//Crea un nuevo arreglo con todos los nombres en mayúsculas. 
const values = ["juan", "luis", "pepito", "pedro"];
const mayusculas = values.map((name) => name.toUpperCase());
console.log(mayusculas); // Output: ["JUAN", "LUIS", "PEPITO", "PEDRO"]
