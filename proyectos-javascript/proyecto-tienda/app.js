
  { nombre: "Ana", nota: 4.5, programa: "ADSO" },
  { nombre: "Luis", nota: 2.8, programa: "ADSO" },
  { nombre: "Marta", nota: 3.7, programa: "Diseño Web" },
  { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
  { nombre: "Sofía", nota: 5.0, programa: "Diseño Web" }
];

function preguntar(texto) {
  return new Promise(resolve => rl.question(texto, resolve));
}

// ==================== FUNCIONES ====================
async function mostrarTodos() {
  console.log("\n Todos los aprendices:");
  aprendices.forEach(a => console.log(`   ${a.nombre} | Nota: ${a.nota} | ${a.programa}`));
}

async function mostrarAprobados() {
  const aprobados = aprendices.filter(a => a.nota >= 3.0);
  console.log("\n Aprobados:");
  aprobados.length ? aprobados.forEach(a => console.log(`   ${a.nombre} - ${a.nota}`)) : console.log("   Ninguno");
}

async function mostrarReprobados() {
  const reprobados = aprendices.filter(a => a.nota < 3.0);
  console.log("\n Reprobados:");
  reprobados.length ? reprobados.forEach(a => console.log(`   ${a.nombre} - ${a.nota}`)) : console.log("   Ninguno");
}

async function nombresMayusculas() {
  const nombres = aprendices.map(a => a.nombre.toUpperCase());
  console.log("\n Nombres en mayúsculas (map):");
  console.log(nombres);
}

async function calcularPromedio() {
  const suma = aprendices.reduce((acc, a) => acc + a.nota, 0);
  console.log(`\n Promedio general: ${(suma / aprendices.length).toFixed(2)}`);
}

async function ordenarPorNota() {
  const ordenados = [...aprendices].sort((a, b) => b.nota - a.nota);
  console.log("\n Ordenados por nota (desc):");
  ordenados.forEach(a => console.log(`   ${a.nombre} → ${a.nota}`));
}

async function clasificarNota() {
  const notaStr = await preguntar("Ingresa una nota para clasificar: ");
  const nota = parseFloat(notaStr);
  if (isNaN(nota)) return console.log(" Nota inválida");

  let clasif;
  switch (true) {
    case (nota >= 1 && nota < 3): clasif = "Bajo"; break;
    case (nota >= 3 && nota < 4): clasif = "Básico"; break;
    case (nota >= 4 && nota < 5): clasif = "Alto"; break;
    case (nota === 5): clasif = "Superior"; break;
    default: clasif = "Fuera de rango";
  }
  console.log(` Nota ${nota} → ${clasif}`);
}

async function buscarAprendiz() {
  const nombre = (await preguntar("Nombre a buscar: ")).toLowerCase();
  const encontrado = aprendices.find(a => a.nombre.toLowerCase() === nombre);
  encontrado ? console.log(" Encontrado:", encontrado) : console.log(" No encontrado");
}

async function hayReprobados() {
  console.log(aprendices.some(a => a.nota < 3) ? " Sí hay reprobados" : " No hay reprobados");
}

async function todosAprobaron() {
  console.log(aprendices.every(a => a.nota >= 3) ? " Todos aprobaron" : " No todos aprobaron");
}

// ==================== MENÚ ====================
async function menu() {
  console.log("\n Proyecto 1 cargado - Nivel básico\n");

  while (true) {
    const opcion = await preguntar(`
GESTIÓN DE NOTAS
1. Mostrar todos
2. Aprobados (filter)
3. Reprobados (filter)
4. Nombres en mayúsculas (map)
5. Promedio (reduce)
6. Ordenar por nota (sort)
7. Clasificar nota (switch)
8. Buscar por nombre (find)
9. ¿Hay reprobados? (some)
10. ¿Todos aprobaron? (every)
0. Salir

Elige una opción: `);

    switch (opcion.trim()) {
      case "1": await mostrarTodos(); break;
      case "2": await mostrarAprobados(); break;
      case "3": await mostrarReprobados(); break;
      case "4": await nombresMayusculas(); break;
      case "5": await calcularPromedio(); break;
      case "6": await ordenarPorNota(); break;
      case "7": await clasificarNota(); break;
      case "8": await buscarAprendiz(); break;
      case "9": await hayReprobados(); break;
      case "10": await todosAprobaron(); break;
      case "0":
        console.log("\n Saliendo del sistema...");
        rl.close();
        return;
      default:
        console.log(" Opción inválida");
    }
    console.log("─".repeat(60));   // ←←← Corregido
  }
}

menu();
