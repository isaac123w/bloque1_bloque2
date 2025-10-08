// -------------------- BLOQUE 2: ARREGLOS --------------------
// Ejercicio 11: Divisores de varios números

// PSEUDOCODIGO
// INICIO
// CREAR arreglo numeros vacío
// LEER cantidad ← pedir al usuario "¿Cuántos números quieres ingresar?"
// PARA i DESDE 0 HASTA cantidad - 1 HACER
//     LEER num ← pedir al usuario "Ingresa el número i+1"
//     AGREGAR num AL arreglo numeros
// FIN PARA
// PARA i DESDE 0 HASTA longitud(numeros) - 1 HACER
//     num ← numeros[i]
//     CREAR arreglo divisores vacío
//     PARA j DESDE 1 HASTA num HACER
//         SI num MOD j = 0 ENTONCES
//             AGREGAR j AL arreglo divisores
//         FIN SI
//     FIN PARA
//     MOSTRAR "Divisores de num: " + divisores EN UNA ALERTA
// FIN PARA
// FIN


// JAVASCRIPT
function divisoresNumeros() {
    let numeros = [];
    let cantidad = parseInt(prompt("¿Cuántos números quieres ingresar?"));

    for (let i = 0; i < cantidad; i++) {
        let num = parseInt(prompt(Ingresa el número ${i + 1}:));
        numeros.push(num);
    }

    for (let i = 0; i < numeros.length; i++) {
        let num = numeros[i];
        let divisores = [];   

        for (let j = 1; j <= num; j++) {
            if (num % j === 0) {
                divisores.push(j);
            }
        }

        alert(Divisores de ${num}: ${divisores.join(", ")});
    }
}

divisoresNumeros();


// Ejercicio 12: Suma de divisores en un arreglo

// PSEUDOCODIGO
// INICIO
// CREAR arreglo numeros vacío
// LEER cantidad ← pedir al usuario "¿Cuántos números quieres ingresar?"
// PARA i DESDE 0 HASTA cantidad - 1 HACER
//     LEER num ← pedir al usuario "Ingresa el número i+1"
//     AGREGAR num AL arreglo numeros
// FIN PARA
// PARA i DESDE 0 HASTA longitud(numeros) - 1 HACER
//     num ← numeros[i]
//     CREAR arreglo divisores vacío
//     sumaDivisores ← 0
//     PARA j DESDE 1 HASTA num HACER
//         SI num MOD j = 0 ENTONCES
//             AGREGAR j AL arreglo divisores
//             sumaDivisores ← sumaDivisores + j
//         FIN SI
//     FIN PARA
//     MOSTRAR "Divisores de num: " + divisores EN UNA ALERTA
//     MOSTRAR "Suma de divisores de num: " + sumaDivisores EN UNA ALERTA
// FIN PARA
// FIN


// JAVASCRIPT
function divisoresNumeros() {
    let numeros = [];
    let cantidad = parseInt(prompt("¿Cuántos números quieres ingresar?"));

    for (let i = 0; i < cantidad; i++) {
        let num = parseInt(prompt(Ingresa el número ${i + 1}:));
        numeros.push(num);
    }
    for (let i = 0; i < numeros.length; i++) {
        let num = numeros[i];
        let divisores = [];
        let sumaDivisores = 0;

        for (let j = 1; j <= num; j++) {
            if (num % j === 0) {
                divisores.push(j);
                sumaDivisores += j;
            }
        }
        alert(Divisores de ${num}: ${divisores.join(", ")});
        alert(Suma de divisores de ${num}: ${sumaDivisores});
    }
}
divisoresNumeros();

// Ejercicio 13: Números perfectos en un arreglo

// PSEUDOCODIGO 
// INICIO
// CREAR arreglo numeros vacío
// LEER cantidad ← pedir al usuario "¿Cuántos números quieres ingresar?"
// PARA i DESDE 0 HASTA cantidad - 1 HACER
//     LEER num ← pedir al usuario "Ingresa el número i+1"
//     AGREGAR num AL arreglo numeros
// FIN PARA
// PARA i DESDE 0 HASTA longitud(numeros) - 1 HACER
//     num ← numeros[i]
//     sumaDivisores ← 0
//     PARA j DESDE 1 HASTA num - 1 HACER
//         SI num MOD j = 0 ENTONCES
//             sumaDivisores ← sumaDivisores + j
//         FIN SI
//     FIN PARA
//     SI sumaDivisores = num Entonces
//         Escribir(num, "es un número perfecto")
//     FinSi
// FinPara
// FIN


// JAVASCRIPT
function numerosPerfectos() {
    let numeros = [];
    let cantidad = parseInt(prompt("¿Cuántos números quieres ingresar?"));

    for (let i = 0; i < cantidad; i++) {
        let num = parseInt(prompt(Ingresa el número ${i + 1}:));
        numeros.push(num);
    }

    for (let i = 0; i < numeros.length; i++) {
        let num = numeros[i];
        let sumaDivisores = 0;

        for (let j = 1; j < num; j++) {
            if (num % j === 0) {
                sumaDivisores += j;
            }
        }

        if (sumaDivisores === num) {
            alert(El ${num} sí es un número perfecto);
        } else {
            alert(El ${num} no es un número perfecto);
        }
    }
}
numerosPerfectos();

//Ejercicio 14: Números primos en un arreglo

//PSEUDOCODIGO
// INICIO
// CREAR arreglo numeros vacío
// LEER cantidad ← pedir al usuario "¿Cuántos números quieres ingresar?"
// PARA i DESDE 0 HASTA cantidad - 1 HACER
//     LEER num ← pedir al usuario "Ingresa el número i+1"
//     AGREGAR num AL arreglo numeros
// FIN PARA
// primos ← arreglo vacío
// PARA i DESDE 0 HASTA longitud(numeros) - 1 HACER
//     divisores ← 0
//     PARA j DESDE 1 HASTA numeros[i] HACER
//         SI numeros[i] MOD j = 0 ENTONCES
//             divisores ← divisores + 1
//         FIN SI
//     FIN PARA
//     SI divisores = 2 ENTONCES
//         AGREGAR numeros[i] AL arreglo primos
//     FIN SI
// FIN PARA
// MOSTRAR "Números primos: " + primos EN UNA ALERTA
// FIN


//JAVASCRIPT
function numerosPrimos() {
    let numeros = [];
    let cantidad = parseInt(prompt("¿Cuántos números quieres ingresar?"));

    for (let i = 0; i < cantidad; i++) {
        let num = parseInt(prompt(Ingresa el número ${i + 1}:));
        numeros.push(num);
    }

    let primos = [];
    for (let i = 0; i < numeros.length; i++) {
        let divisores = 0;
        for (let j = 1; j <= numeros[i]; j++) {
            if (numeros[i] % j === 0) {
                divisores++;
            }
        }
        if (divisores === 2) {
            primos.push(numeros[i]);
        }
    }

    alert(Números primos: ${primos.join(", ")});
}
numerosPrimos();


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


// Ejercicio 17: Promedio de un arreglo

// PSEUDOCODIGO
// INICIO
// CREAR arreglo numeros vacío
// LEER cantidad ← pedir al usuario "¿Cuántos números quieres ingresar?"
// PARA i DESDE 1 HASTA cantidad HACER
// LEER num ← pedir al usuario "Ingresa el número i"
// AGREGAR num AL arreglo numeros
// FIN PARA
// suma ← 0
// PARA i DESDE 0 HASTA longitud(numeros) - 1 HACER
//     suma ← suma + numeros[i]
// FIN PARA
// promedio ← suma / longitud(numeros)
// MOSTRAR "El promedio es " + promedio EN UNA ALERTA
// FIN


// JAVASCRIPT
function promedioArreglo() {
    let numeros = [];
    let cantidad = parseInt(prompt("¿Cuántos números quieres ingresar?"));

    for (let i = 0; i < cantidad; i++) {
        let num = parseInt(prompt(Ingresa el número ${i + 1}:));
        numeros.push(num);
    }

    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    let promedio = suma / numeros.length;
    alert(El promedio es ${promedio}.);
}
promedioArreglo();


//18.Contar impares en un arreglo

//PSEUDOCODIGO
// INICIO
// CREAR arreglo numeros vacío
// LEER cantidad ← pedir al usuario "¿Cuántos números quieres ingresar?"
// PARA i DESDE 0 HASTA cantidad - 1 HACER
//     LEER num ← pedir al usuario "Ingresa el número i+1"
//     AGREGAR num AL arreglo numeros
// FIN PARA
// contador ← 0
// PARA i DESDE 0 HASTA longitud(numeros) - 1 HACER
//     SI numeros[i] MOD 2 ≠ 0 ENTONCES
//         contador ← contador + 1
//     FIN SI
// FIN PARA
// MOSTRAR "Cantidad de impares: " + contador EN UNA ALERTA
// FIN


// JAVASCRIPT
function contarImpares() {
    let numeros = [];
    let cantidad = parseInt(prompt("¿Cuántos números quieres ingresar?"));

    for (let i = 0; i < cantidad; i++) {
        let num = parseInt(prompt(Ingresa el número ${i + 1}:));
        numeros.push(num);
    }

    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            contador++;
        }
    }

    alert(Cantidad de impares: ${contador});
}
contarImpares();


//Ejercicio 19: Mayores de edad un arreglo

//PSEUDOCODIGO
// INICIO
// CREAR arreglo edades vacío
// LEER cantidad ← pedir al usuario "¿Cuántas edades quieres ingresar?"
// PARA i DESDE 0 HASTA cantidad - 1 HACER
//     LEER edad ← pedir al usuario "Ingresa la edad i+1"
//     AGREGAR edad AL arreglo edades
// FIN PARA
// contador ← 0
// PARA i DESDE 0 HASTA longitud(edades) - 1 HACER
//     SI edades[i] >= 18 ENTONCES
//         contador ← contador + 1
//     FIN SI
// FIN PARA
// MOSTRAR "Mayores de edad: " + contador EN UNA ALERTA
// FIN


//JAVASCRIPT
function contarMayoresDeEdad() {
    let edades = [];
    let cantidad = parseInt(prompt("¿Cuántas edades quieres ingresar?"));

    for (let i = 0; i < cantidad; i++) {
        let edad = parseInt(prompt(Ingresa la edad ${i + 1}:));
        edades.push(edad);
    }

    let contador = 0;
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            contador++;
        }
    }
    alert(Mayores de edad: ${contador});
}
contarMayoresDeEdad();


//Ejercicio 20: Buscar un valor en el arreglo

//PSEUDOCODIGO
// INICIO
// CREAR arreglo numeros vacío
// LEER cantidad ← pedir al usuario "¿Cuántos números quieres ingresar?"
// PARA i DESDE 0 HASTA cantidad - 1 HACER
//     LEER num ← pedir al usuario "Ingresa el número i+1"
//     AGREGAR num AL arreglo numeros
// FIN PARA
// LEER valorBuscado ← pedir al usuario "Ingresa el valor que quieres buscar"
// encontrado ← falso
// PARA i DESDE 0 HASTA longitud(numeros) - 1 HACER
//     SI numeros[i] = valorBuscado ENTONCES
//         encontrado ← verdadero
//         SALIR DEL BUCLE
//     FIN SI
// FIN PARA
// SI encontrado = verdadero ENTONCES
//     MOSTRAR "El valor valorBuscado se encuentra en el arreglo" EN UNA ALERTA
// SINO
//     MOSTRAR "El valor valorBuscado NO se encuentra en el arreglo" EN UNA ALERTA
// FIN SI
// FIN


//JAVASCRIPT
function buscarValor() {
    let numeros = [];
    let cantidad = parseInt(prompt("¿Cuántos números quieres ingresar?"));

    // Pedir los números uno por uno
    for (let i = 0; i < cantidad; i++) {
        let num = parseInt(prompt(Ingresa el número ${i + 1}:));
        numeros.push(num);
    }

    let valorBuscado = parseInt(prompt("Ingresa el valor que quieres buscar:"));
    let encontrado = false;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === valorBuscado) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        alert(El valor ${valorBuscado} se encuentra en el arreglo);
    } else {
        alert(El valor ${valorBuscado} NO se encuentra en el arreglo);
    }
}
buscarValor();


//Ejercicio 21: Concatenar palabras de un arreglo

//PSEUDOCODIGO
// INICIO
// CREAR arreglo palabras vacío
// LEER cantidad ← pedir al usuario "¿Cuántas palabras quieres ingresar?"
// PARA i DESDE 0 HASTA cantidad - 1 HACER
//     LEER palabra ← pedir al usuario "Ingresa la palabra i+1"
//     AGREGAR palabra AL arreglo palabras
// FIN PARA
// resultado ← unir todas las palabras del arreglo con espacio
// MOSTRAR "Resultado: " + resultado EN UNA ALERTA
// FIN


//JAVASCRIPT
function concatenarPalabrasJoin() {
    let palabras = [];
    let cantidad = parseInt(prompt("¿Cuántas palabras quieres ingresar?"));

    for (let i = 0; i < cantidad; i++) {
        let palabra = prompt(Ingresa la palabra ${i + 1}:);
        palabras.push(palabra);
    }

    // Concatenar palabras
    let resultado = palabras.join(" ");
    alert(Resultado: ${resultado});
}

concatenarPalabrasJoin();


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


//Ejercicio 23: Tabla de multiplicar de elementos

//PSEUDOCODIGO
// INICIO
// CREAR arreglo numeros vacío
// LEER limite ← pedir al usuario "Ingrese el limite de la tabla"
// LEER c ← pedir al usuario "¿Cuántos números quieres para generar su tabla?"
// PARA i DESDE 0 HASTA c - 1 HACER
//     LEER num ← pedir al usuario "Ingrese el número i+1"
//     AGREGAR num AL arreglo numeros
// FIN PARA
// PARA i DESDE 0 HASTA longitud(numeros) - 1 HACER
//     tabla ← ""
//     PARA j DESDE 1 HASTA limite HACER
//         tabla ← tabla + (numeros[i] * j)
//         SI j < limite ENTONCES
//             tabla ← tabla + ", "
//         FIN SI
//     FIN PARA
//     MOSTRAR "Tabla de numeros[i]: " + tabla EN CONSOLA
// FIN PARA
// FIN

//JAVASCRIPT
function tablasDeMultiplicar() {
    let numeros = [];
    let limite = parseInt(prompt("Ingrese el limite de la tabla"))
     let c = parseInt(prompt("¿Cuantos numeros quieres para generar su tabla?"));

    for (let i = 0; i < c; i++) {
        let num = parseInt(prompt(Ingrese el numero ${i + 1}:));
        numeros.push(num);
    }

    for (let i = 0; i < numeros.length; i++) {
        let tabla = "";
        for (let j = 1; j <= limite; j++) {
            tabla += numeros[i] * j
            if (j < limite) {
                tabla += ", "
            }
        }
        alert(Tabla de ${numeros[i]}: ${tabla});
    }
}
tablasDeMultiplicar();


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
