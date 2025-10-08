// -------------------- BLOQUE 1: CADENAS --------------------
// Ejercicio 1: Contar caracteres de una palabra

// PSEUDOCODIGO
// Algoritmo ContadorLetras
// Definir palabra Como Cadena
// Definir c, i Como Entero
// Escribir "Ingresa una palabra:"
// Leer palabra
// c <- 0
// Para i <- 1 Hasta Longitud(palabra) Hacer
//     c <- c + 1
// FinPara
// Escribir "La palabra tiene ", c, " caracteres."
// FinAlgoritmo

// JAVASCRIPT
function contadorLetras() {
let palabra = prompt("Ingresa una palabra:");
let c = 0;

    for (let i = 0; i < palabra.length; i++) {
        c++;
    }
    alert(`La palabra tiene ${c} caracteres`);
}
contadorLetras();


// Ejercicio 2: Contar apariciones de una letra específica

// PSEUDOCODIGO
// Algoritmo ContarLetra
//Definir palabra, letra Como Cadena
//Definir contador, i Como Entero
//Escribir "Ingresa una palabra:"
//Leer palabra
//Escribir "Ingresa la letra que deseas contar:"
//Leer letra
//palabra <- (palabra)
//letra <- (letra)
//contador <- 0
//Para i <- 1 Hasta Longitud(palabra) Hacer
//Si Subcadena(palabra, i, i) = letra Entonces
//contador <- contador + 1
//FinSi
//FinPara
//Escribir "La letra '", letra, "' aparece ", contador, " veces en la palabra."
//FinAlgoritm

// JAVASCRIPT
function repeticionLetra() {
    let palabra = prompt("Ingresa una palabra:").toLowerCase();
    let letra = prompt("Ingresa la letra que deseas contar:").toLowerCase();
    let c = 0;

    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letra) {
            c++;
        }
    }

    alert(La letra "${letra}" aparece ${c} veces en la palabra "${palabra}".);
}
repeticionLetra();


// Ejercicio 3: Invertir un texto

// PSEUDOCODIGO
// Definir texto Como Cadena
// Definir textoInvertido Como Cadena
// textoInvertido = ""
// Para i Desde Longitud(texto) Hasta 1 Paso -1 Hacer
//     textoInvertido = textoInvertido + Subcadena(texto, i, i)
// FinPara
// Escribir("El texto invertido es: " + textoInvertido)
//FinAlgoritmo

// JAVASCRIPT
function invertirTexto() {
    let texto = prompt("Ingresa un texto:");
    let textoInvertido = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }

    alert("El texto invertido es: " + textoInvertido);
}
invertirTexto();

// Ejercicio 4: Comparar longitudes de dos cadenas

// PSEUDOCODIGO
// Definir cadena1, cadena2 Como Cadena
// cadena1 = Pedir("Ingresa la primera cadena:")
// cadena2 = Pedir("Ingresa la segunda cadena:")
// Si Longitud(cadena1) > Longitud(cadena2) Entonces
//     Escribir("La primera cadena es más larga.")
// Sino
//     Si Longitud(cadena1) < Longitud(cadena2) Entonces
//         Escribir("La segunda cadena es más larga.")
//     Sino
//         Escribir("Ambas cadenas tienen la misma longitud.")
//     FinSi
// FinSi

// JAVASCRIPT
function compararLongitudes() {
    let cadena1 = prompt("Ingresa la primera cadena:");
    let cadena2 = prompt("Ingresa la segunda cadena:");

    if (cadena1.length > cadena2.length) {
        alert("La primera cadena es más larga.");
    } else if (cadena1.length < cadena2.length) {
        alert("La segunda cadena es más larga.");
    } else {
        alert("Ambas cadenas tienen la misma longitud.");
    }
}
compararLongitudes();

// Ejercicio 5: Iniciales de un nombre completo

// PSEUDOCODIGO
//Algoritmo ObtenerIniciales
// Definir nombreCompleto Como Cadena
// Definir iniciales Como Cadena
// iniciales = nombreCompleto[0]
// Para i Desde 1 Hasta Longitud(nombreCompleto) Hacer
// Si nombreCompleto[i] = " " Entonces
// iniciales = iniciales + nombreCompleto[i + 1]
// FinSi
// FinPara
// Escribir "Las iniciales son: " + iniciales
//FinAlgoritmo

// JAVASCRIPT
function obtenerIniciales() {
    let nombreCompleto = prompt("Ingresa tu nombre completo:");
    let iniciales = "";

    iniciales += nombreCompleto[0];

    for (let i = 0; i < nombreCompleto.length; i++) {
        if (nombreCompleto[i] === " ") {
            iniciales += nombreCompleto[i + 1];
        }
    }
    alert(Las iniciales son: ${iniciales.toUpperCase()});
}
obtenerIniciales();


// Ejercicio 6: Reemplazo de caracteres

// PSEUDOCODIGO
// Algoritmo ReemplazarCaracteres
// Definir texto Como Cadena
// Definir caracterViejo Como Cadena
// Definir caracterNuevo Como Cadena
// Definir textoNuevo Como Cadena
// textoNuevo = ""
// Para i Desde 0 Hasta Longitud(texto) Hacer
// Si texto[i] = caracterViejo Entonces
// textoNuevo = textoNuevo + caracterNuevo
// Sino
// textoNuevo = textoNuevo + texto[i]
// FinSi
// FinPara
// Escribir "El texto modificado es: " + textoNuevo
//FinAlgoritmo

// JAVASCRIPT
function reemplazarCaracteres() {
    let texto = prompt("Ingresa un texto:");
    let caracterViejo = prompt("Ingresa el carácter que deseas reemplazar:");
    let caracterNuevo = prompt("Ingresa el nuevo carácter:");
    let textoNuevo = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracterViejo) {
            textoNuevo += caracterNuevo;
            
        } else {
            textoNuevo += texto[i];
        }
    }

    alert(El texto modificado es: ${textoNuevo});
}
reemplazarCaracteres();


// Ejercicio 7: Verificar si una palabra es un palíndromo

// PSEUDOCODIGO
// Algoritmo VerificarPalindromo
// Definir palabra Como Cadena
// Definir palabraInvertida Como Cadena
// palabraInvertida = ""
// Para i Desde Longitud(palabra) - 1 Hasta 0 Hacer
// palabraInvertida = palabraInvertida + palabra[i]
// FinPara
// Si palabra = palabraInvertida Entonces
// Escribir "La palabra es un palíndromo."
// Sino
// Escribir "La palabra no es un palíndromo."
// FinSi
//FinAlgoritmo

// JAVASCRIPT
function verificarPalindromo() {
    let palabra = prompt("Ingresa una palabra:");
    let palabraInvertida = "";

    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }

    if (palabra === palabraInvertida) {
        alert("La palabra es un palíndromo.");
    } else {
        alert("La palabra no es un palíndromo.");
    }
}
verificarPalindromo();

// Ejercicio 8: Frase más larga

// PSEUDOCODIGO
// Definir cantidad Como Entero
// Definir frase Como Cadena
// Definir fraseMasLarga Como Cadena
// fraseMasLarga = ""
// cantidad = Pedir("¿Cuántas frases deseas ingresar?")
// Para i Desde 1 Hasta cantidad Hacer
//     frase = Pedir("Ingresa la frase " + i + ":")
//     Si Longitud(frase) > Longitud(fraseMasLarga) Entonces
//         fraseMasLarga = frase
//     FinSi
// FinPara
// Escribir("La frase con mayor cantidad de caracteres es: " + fraseMasLarga)
//FinAlgoritmo

// JAVASCRIPT
function fraseMasLarga() {
    let cantidad = parseInt(prompt("¿Cuántas frases deseas ingresar?"));
    let fraseMasLarga = "";

    for (let i = 1; i <= cantidad; i++) {
        let frase = prompt(Ingresa la frase ${i}:);
        if (frase.length > fraseMasLarga.length) {
            fraseMasLarga = frase;
        }
    }
    alert(La frase con mayor cantidad de caracteres es: ${fraseMasLarga});
}
fraseMasLarga();

// Ejercicio 9: Contar apariciones de un carácter elegido

// PSEUDOCODIGO
// Definir texto Como Cadena
// Definir caracterElegido Como Cadena
// Definir contador Como Entero
// contador = 0
// Para i Desde 0 Hasta Longitud(texto) - 1 Hacer
//     Si Subcadena(texto, i, i) = caracterElegido Entonces
//         contador = contador + 1
//     FinSi
// FinPara
// Escribir("El carácter " + caracterElegido + " aparece " + contador + " veces.")
//FinAlgoritmo

// JAVASCRIPT
function contarCaracter() {
    let texto = prompt("Ingresa un texto:").toLowerCase();
    let caracterElegido = prompt("Ingresa el carácter que deseas contar:").toLowerCase();
    let c = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracterElegido) {
            c++;
        }
    }
    alert(El carácter ${caracterElegido} aparece ${c} veces.);
}
contarCaracter();


// Ejercicio 10: Dividir una oración en palabras y mostrarlas por separado

// PSEUDOCODIGO
// Definir oracion Como Cadena
// Escribir "Ingresa una oración:"
// Leer oracion
// palabras <- Dividir(oracion, " ")
// Para i Desde 0 Hasta Longitud(palabras) - 1 Hacer
//     Escribir("Palabra ", i + 1, ": ", palabras[i])
// FinPara

// JAVA SCRIPT
function dividirOracion() {
    let oracion = prompt("Ingresa una oración:");
    
    let palabras = oracion.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        alert(Palabra ${i + 1}: ${palabras[i]});
    }
}
dividirOracion();


