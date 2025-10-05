// -------------------- BLOQUE 2: ARREGLOS --------------------
// 11. Mostrar los divisores de cada número en un arreglo
function ejercicio11(listaNumeros){
  let resultado = {};
  for (let numero of listaNumeros){
    resultado[numero] = obtenerDivisores(numero);
  }
  return resultado;
}
// Prueba
console.log(ejercicio11([6, 10]));


// 12. Sumar divisores de cada número en un arreglo
function ejercicio12(listaNumeros){
  let resultado = {};
  for (let numero of listaNumeros){
    resultado[numero] = sumarDivisores(numero);
  }
  return resultado;
}
// Prueba
console.log(ejercicio12([6, 12]));


// 13. Mostrar los números perfectos del arreglo
function ejercicio13(listaNumeros){
  let numerosPerfectos = [];

  for (let numero of listaNumeros){
    let sumaDivisoresPropios = 0;
    for (let i = 1; i < numero; i++){
      if (numero % i === 0){
        sumaDivisoresPropios += i;
      }
    }
    if (sumaDivisoresPropios === numero){
      numerosPerfectos.push(numero);
    }
  }
  return `Números perfectos: ${numerosPerfectos.join(", ")}`;
}
// Prueba
console.log(ejercicio13([6, 10, 28]));


// 14. Mostrar los números primos del arreglo
function ejercicio14(listaNumeros){
  let primos = [];
  for (let numero of listaNumeros){
    if (esNumeroPrimo(numero)){
      primos.push(numero);
    }
  }
  return `Números primos: ${primos.join(", ")}`;
}
// Prueba
console.log(ejercicio14([7, 8, 13]));


// 15. Calcular factorial de los números del arreglo
function ejercicio15(listaNumeros){
  let resultado = {};
  for (let numero of listaNumeros){
    resultado[numero] = calcularFactorial(numero);
  }
  return resultado;
}
// Prueba
console.log(ejercicio15([3, 5]));


// 16. Invertir los números del arreglo (sin usar String)
function ejercicio16(listaNumeros){
  let resultado = [];

  for (let numero of listaNumeros){
    let numeroInvertido = 0;
    let temporal = numero;

    while (temporal > 0){
      let digito = temporal % 10;
      numeroInvertido = numeroInvertido * 10 + digito;
      temporal = Math.floor(temporal / 10);
    }

    resultado.push(numeroInvertido);
  }

  return resultado;
}
// Prueba
console.log(ejercicio16([123, 450]));


// 17. Calcular promedio de un arreglo
function ejercicio17(listaNumeros){
  if (listaNumeros.length === 0) return "El arreglo está vacío.";
  let suma = 0;

  for (let numero of listaNumeros){
    suma += numero;
  }

  let promedio = suma / listaNumeros.length;
  return `El promedio es ${promedio}.`;
}
// Prueba
console.log(ejercicio17([5, 7, 9, 3, 6]));


// 18. Contar números impares en un arreglo
function ejercicio18(listaNumeros){
  let contadorImpares = 0;
  for (let numero of listaNumeros){
    if (numero % 2 !== 0){
      contadorImpares++;
    }
  }
  return `Cantidad de números impares: ${contadorImpares}`;
}
// Prueba
console.log(ejercicio18([2, 5, 7, 8, 10]));


// 19. Contar mayores de edad (≥ 18 años)
function ejercicio19(listaEdades){
  let contadorMayores = 0;
  for (let edad of listaEdades){
    if (edad >= 18){
      contadorMayores++;
    }
  }
  return `Cantidad de personas mayores de edad: ${contadorMayores}`;
}
// Prueba
console.log(ejercicio19([15, 22, 18, 30, 12]));


// 20. Buscar un valor dentro de un arreglo
function ejercicio20(lista, valorBuscado){
  for (let elemento of lista){
    if (elemento === valorBuscado){
      return `El valor ${valorBuscado} sí existe en el arreglo.`;
    }
  }
  return `El valor ${valorBuscado} no existe en el arreglo.`;
}
// Prueba
console.log(ejercicio20([4, 8, 15, 23], 15));


// 21. Unir todas las palabras de un arreglo (forma básica)
function ejercicio21(listaPalabras){
  let frase = "";
  for (let i = 0; i < listaPalabras.length; i++){
    frase += listaPalabras[i];
    if (i < listaPalabras.length - 1){
      frase += " ";
    }
  }
  return frase;
}
// Prueba
console.log(ejercicio21(["Me", "gusta", "programar"]));


// 22. Calcular el cubo de cada número del arreglo
function ejercicio22(listaNumeros){
  let cubos = [];
  for (let numero of listaNumeros){
    cubos.push(numero * numero * numero);
  }
  return cubos;
}
// Prueba
console.log(ejercicio22([2, 3, 4]));


// 23. Mostrar tabla de multiplicar (1 al 10) de cada número
function ejercicio23(listaNumeros){
  let tablas = {};
  for (let numero of listaNumeros){
    let tabla = [];
    for (let i = 1; i <= 10; i++){
      tabla.push(numero * i);
    }
    tablas[numero] = tabla;
  }
  return tablas;
}
// Prueba
console.log(ejercicio23([3, 5]));


// 24. Calcular el factorial de cada número del arreglo
function ejercicio24(listaNumeros){
  let resultados = [];
  for (let numero of listaNumeros){
    resultados.push(calcularFactorial(numero));
  }
  return resultados;
}
// Prueba
console.log(ejercicio24([4, 6]));


// 25. Copiar solo los números pares en otro arreglo
function ejercicio25(listaNumeros){
  let numerosPares = [];
  for (let numero of listaNumeros){
    if (numero % 2 === 0){
      numerosPares.push(numero);
    }
  }
  return numerosPares;
}
// Prueba
console.log(ejercicio25([3, 8, 11, 14, 25]));


// 26. Sumar dos arreglos (sin Math.min)
function ejercicio26(arregloA, arregloB){
  let tamaño;
  if (arregloA.length < arregloB.length){
    tamaño = arregloA.length;
  } else {
    tamaño = arregloB.length;
  }

  let arregloSuma = [];
  for (let i = 0; i < tamaño; i++){
    arregloSuma.push(arregloA[i] + arregloB[i]);
  }

  return arregloSuma;
}
// Prueba
console.log(ejercicio26([2, 4, 6], [1, 3, 5]));
