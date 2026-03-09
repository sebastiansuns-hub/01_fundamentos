// Función para validar número
function toNumberStrict(value) {
  const n = Number(value);

  if (!Number.isFinite(n)) {
    throw new Error("El valor no es un número válido");
  }

  return n;
}

// ==========================================
// CONVERSOR DE TEMPERATURA
// ==========================================

function convertirTemperatura(valorInput, origen, destino) {
  try {
    const valor = toNumberStrict(valorInput);
    let resultado;

    if (origen === "C" && destino === "F") {
      resultado = (valor * 9 / 5) + 32;
    } 
    else if (origen === "C" && destino === "K") {
      resultado = valor + 273.15;
    } 
    else if (origen === "F" && destino === "C") {
      resultado = (valor - 32) * 5 / 9;
    } 
    else if (origen === "F" && destino === "K") {
      resultado = (valor - 32) * 5 / 9 + 273.15;
    } 
    else if (origen === "K" && destino === "C") {
      resultado = valor - 273.15;
    } 
    else if (origen === "K" && destino === "F") {
      resultado = (valor - 273.15) * 9 / 5 + 32;
    } 
    else {
      throw new Error("Conversión no válida");
    }

    return `${valor} ${origen} = ${resultado.toFixed(2)} ${destino}`;

  } catch (error) {
    return `Error: ${error.message}`;
  }
}

// Pruebas
console.log(convertirTemperatura(50, "C", "F"));
console.log(convertirTemperatura(25, "F", "C"));


// ==========================================
// CONVERSOR DE LONGITUD Y PESO
// ==========================================

function validarNumero(valor) {
  const n = Number(valor);

  if (!Number.isFinite(n)) {
    throw new Error("Debe ingresar un número válido");
  }

  return n;
}

function convertirUnidad(valorInput, origen, destino) {
  try {
    const valor = validarNumero(valorInput);
    let resultado;

    switch (`${origen}-${destino}`) {

      case "m-cm":
        resultado = valor * 100;
        break;

      case "m-km":
        resultado = valor / 1000;
        break;

      case "cm-m":
        resultado = valor / 100;
        break;

      case "km-m":
        resultado = valor * 1000;
        break;

      case "kg-g":
        resultado = valor * 1000;
        break;

      case "kg-lb":
        resultado = valor * 2.20462;
        break;

      case "g-kg":
        resultado = valor / 1000;
        break;

      case "lb-kg":
        resultado = valor / 2.20462;
        break;

      default:
        throw new Error("Conversión no soportada");
    }

    return `${valor} ${origen} = ${resultado.toFixed(2)} ${destino}`;

  } catch (error) {
    return `Error: ${error.message}`;
  }
}

// Pruebas
console.log(convertirUnidad(5, "km", "m"));
console.log(convertirUnidad(10, "kg", "lb"));


// ==========================================
// CALCULADORA DE PRESUPUESTO MENSUAL
// ==========================================

function validarMonto(monto) {
  const n = Number(monto);

  if (!Number.isFinite(n) || n < 0) {
    throw new Error("El monto debe ser número mayor o igual a 0");
  }

  return n;
}

const ingresos = [
  { concepto: "Salario", monto: 1200000 },
  { concepto: "Freelance", monto: 300000 }
];

const gastos = [
  { concepto: "Alquiler", monto: 500000 },
  { concepto: "Comida", monto: 200000 },
  { concepto: "Internet", monto: 50000 }
];

function calcularTotal(lista) {
  let total = 0;

  for (const item of lista) {
    total += validarMonto(item.monto);
  }

  return total;
}

const totalIngresos = calcularTotal(ingresos);
const totalGastos = calcularTotal(gastos);
const balance = totalIngresos - totalGastos;

function clasificarBalance(balance) {
  if (balance > 0) {
    return "Superávit";
  } 
  else if (balance === 0) {
    return "Equilibrado";
  } 
  else {
    return "Déficit";
  }
}

function mostrarReporte() {

  console.group("REPORTE FINANCIERO");

  console.table(ingresos);
  console.table(gastos);

  console.log(`Total ingresos: ${totalIngresos}`);
  console.log(`Total gastos: ${totalGastos}`);
  console.log(`Balance: ${balance}`);
  console.log(`Estado: ${clasificarBalance(balance)}`);

  console.groupEnd();
}

mostrarReporte();