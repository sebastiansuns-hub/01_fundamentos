const productos = [
 { id: 1, nombre: "Mouse", categoria: "Periférico", precio: 50000, stock: 10, ventas: 12 },
 { id: 2, nombre: "Teclado", categoria: "Periférico", precio: 120000, stock: 5, ventas: 7 },
 { id: 3, nombre: "Monitor", categoria: "Pantalla", precio: 800000, stock: 2, ventas: 4 },
 { id: 4, nombre: "USB", categoria: "Accesorio", precio: 30000, stock: 0, ventas: 15 },
 { id: 5, nombre: "Diadema", categoria: "Audio", precio: 90000, stock: 8, ventas: 6 }
];




function mostrarProductos() {
  console.log("\n Lista de productos:");
  productos.forEach(p => {
    console.log(`${p.nombre} | $${p.precio} | Stock: ${p.stock} | Ventas: ${p.ventas}`);
  });
}

function verStockBajo() {
  const bajos = productos.filter(p => p.stock < 5);
  console.log("\n Stock bajo:");
  bajos.forEach(p => console.log(p.nombre, p.stock));
}


function verAgotados() {
  const agotados = productos.filter(p => p.stock === 0);
  console.log("\n Agotados:");
  agotados.forEach(p => console.log(p.nombre));
}


function listaNombrePrecio() {
  const lista = productos.map(p => `${p.nombre} - $${p.precio}`);
  console.log("\n Lista:");
  console.log(lista);
}


function valorInventario() {
  const total = productos.reduce((acc, p) => acc + (p.precio * p.stock), 0);
  console.log("\n Valor inventario:", total);
}


function totalVentas() {
  const total = productos.reduce((acc, p) => acc + p.ventas, 0);
  console.log("\n Total ventas:", total);
}


function ordenarPorPrecio() {
  const orden = [...productos].sort((a, b) => b.precio - a.precio);
  console.log("\n Orden por precio:");
  orden.forEach(p => console.log(p.nombre, p.precio));
}

function ordenarPorVentas() {
  const orden = [...productos].sort((a, b) => b.ventas - a.ventas);
  console.log("\n Orden por ventas:");
  orden.forEach(p => console.log(p.nombre, p.ventas));
}


function buscarProducto(nombre) {
  const prod = productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
  console.log(prod ? prod : " No encontrado");
}


function validarEstado() {
  const hayAgotados = productos.some(p => p.stock === 0);
  const todosStock = productos.every(p => p.stock > 0);

  console.log("\n Hay agotados:", hayAgotados);
  console.log("Todos tienen stock:", todosStock);
}


function clasificarPrecio(precio) {
  let categoria;

  switch (true) {
    case (precio < 50000):
      categoria = "Económico";
      break;
    case (precio < 200000):
      categoria = "Medio";
      break;
    case (precio < 700000):
      categoria = "Alto";
      break;
    default:
      categoria = "Premium";
  }

  console.log(" Clasificación:", categoria);
}




function disponiblesOrdenados() {
  const lista = productos
    .filter(p => p.stock > 0)
    .sort((a, b) => b.precio - a.precio);

  console.log("\n Disponibles ordenados:");
  lista.forEach(p => console.log(p.nombre, p.precio));
}


function mensajesReabastecimiento() {
  const mensajes = productos
    .filter(p => p.stock === 0)
    .map(p => `Reabastecer ${p.nombre}`);

  console.log("\n Reabastecimiento:");
  console.log(mensajes);
}


function reporteFinal() {
  const masCaro = [...productos].sort((a,b)=>b.precio-a.precio)[0];
  const masBarato = [...productos].sort((a,b)=>a.precio-b.precio)[0];
  const masVendido = [...productos].sort((a,b)=>b.ventas-a.ventas)[0];
  const totalInventario = productos.reduce((acc,p)=>acc+(p.precio*p.stock),0);
  const totalVendidas = productos.reduce((acc,p)=>acc+p.ventas,0);
  const agotados = productos.filter(p=>p.stock===0).length;

  console.log("\n ===== REPORTE FINAL =====");
  console.log("Más caro:", masCaro.nombre);
  console.log("Más barato:", masBarato.nombre);
  console.log("Más vendido:", masVendido.nombre);
  console.log("Inventario total:", totalInventario);
  console.log("Unidades vendidas:", totalVendidas);
  console.log("Productos agotados:", agotados);
}


let opcion;

while (opcion !== 0) {
  opcion = Number(prompt(`
1. Ver productos
2. Stock bajo
3. Agotados
4. Lista nombre-precio
5. Valor inventario
6. Total ventas
7. Ordenar por precio
8. Ordenar por ventas
9. Buscar producto
10. Validar estado
11. Clasificar precio
12. Disponibles ordenados
13. Reabastecimiento
14. Reporte final
0. Salir
`));

  switch (opcion) {
    case 1: mostrarProductos(); break;
    case 2: verStockBajo(); break;
    case 3: verAgotados(); break;
    case 4: listaNombrePrecio(); break;
    case 5: valorInventario(); break;
    case 6: totalVentas(); break;
    case 7: ordenarPorPrecio(); break;
    case 8: ordenarPorVentas(); break;
    case 9:
      let nombre = prompt("Nombre:");
      buscarProducto(nombre);
      break;
    case 10: validarEstado(); break;
    case 11:
      let precio = Number(prompt("Precio:"));
      clasificarPrecio(precio);
      break;
    case 12: disponiblesOrdenados(); break;
    case 13: mensajesReabastecimiento(); break;
    case 14: reporteFinal(); break;
    case 0: console.log(" Saliendo..."); break;
    default: console.log(" Opción inválida");
  }
}
