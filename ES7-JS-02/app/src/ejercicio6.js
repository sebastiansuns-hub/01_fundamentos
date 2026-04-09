 //Filtrar estudiantes aprobados con filter
//ObjeƟvo: aplicar condiciones sobre objetos.
//const estudiantes = [
 //{ nombre: "Suns", nota: 4.6 },
 //{ nombre: "Luis", nota: 2.8 },
 //{ nombre: "Marta", nota: 3.7 },
 //{ nombre: "Carlos", nota: 2.5 }];
const estudiantes =[{ nombre: "Suns", nota: 4.5 },
{ nombre: "Luis", nota: 2.8 },
{ nombre: "Marta", nota: 3.7 },
{ nombre: "Carlos", nota: 2.5 }];
 const aprobados = estudiantes.filter((estudiante) => estudiante.nota >= 3.5);
console.log(aprobados);
