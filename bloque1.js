// -------------------- BLOQUE 1: CADENAS CON PROMPT Y ALERT --------------------
// 1. Contar caracteres de una palabra
let palabra1 = prompt("Ingrese una palabra para contar sus letras:");
let contador1 = 0;
for (let i = 0; palabra1[i] != undefined; i = i + 1) contador1 = contador1 + 1;
alert("La palabra tiene " + contador1 + " letras.");


// 2. Contar cuántas veces aparece una letra
let texto2 = prompt("Ingrese un texto:");
let letra2 = prompt("Ingrese la letra que quiere contar:");
let contador2 = 0;
for (let i = 0; texto2[i] != undefined; i = i + 1){
  if (texto2[i] == letra2) contador2 = contador2 + 1;
}
alert("La letra aparece " + contador2 + " veces.");


// 3. Invertir un texto
let texto3 = prompt("Ingrese un texto para invertir:");
let invertido3 = "";
for (let i = 0; texto3[i] != undefined; i = i + 1){
  invertido3 = texto3[i] + invertido3;
}
alert("Texto invertido: " + invertido3);


// 4. Comparar longitudes de dos apellidos
let apellido1 = prompt("Ingrese el primer apellido:");
let apellido2 = prompt("Ingrese el segundo apellido:");
let len1 = 0;
let len2 = 0;
for (let i = 0; apellido1[i] != undefined; i = i + 1) len1 = len1 + 1;
for (let i = 0; apellido2[i] != undefined; i = i + 1) len2 = len2 + 1;
if (len1 > len2) alert("El primer apellido tiene más letras.");
else if (len2 > len1) alert("El segundo apellido tiene más letras.");
else alert("Ambos apellidos tienen la misma cantidad de letras.");


// 5. Obtener iniciales de un nombre completo
let nombre = prompt("Ingrese su nombre completo:");
let iniciales = "";
let primera = 1; // 1 = verdadero, 0 = falso
for (let i = 0; nombre[i] != undefined; i = i + 1){
  let c = nombre[i];
  if (c != " " && primera == 1){
    iniciales = iniciales + c;
    primera = 0;
  }
  if (c == " ") primera = 1;
}
alert("Iniciales: " + iniciales);


// 6. Reemplazar 'o' y 'O' por '#'
let texto6 = prompt("Ingrese un texto:");
let resultado6 = "";
for (let i = 0; texto6[i] != undefined; i = i + 1){
  let c = texto6[i];
  if (c == "o" || c == "O") resultado6 = resultado6 + "#";
  else resultado6 = resultado6 + c;
}
alert("Texto modificado: " + resultado6);


// 7. Verificar palíndromo
let palabra7 = prompt("Ingrese una palabra:");
let invertida7 = "";
for (let i = 0; palabra7[i] != undefined; i = i + 1){
  invertida7 = palabra7[i] + invertida7;
}
let igual = 1; // 1 = verdadero, 0 = falso
for (let i = 0; palabra7[i] != undefined; i = i + 1){
  if (palabra7[i] != invertida7[i]) igual = 0;
}
if (igual == 1) alert("Es un palíndromo.");
else alert("No es un palíndromo.");


// 8. Comparar longitud de dos frases
let frase1 = prompt("Ingrese la primera frase:");
let frase2 = prompt("Ingrese la segunda frase:");
let lenF1 = 0;
let lenF2 = 0;
for (let i = 0; frase1[i] != undefined; i = i + 1) lenF1 = lenF1 + 1;
for (let i = 0; frase2[i] != undefined; i = i + 1) lenF2 = lenF2 + 1;
if (lenF1 > lenF2) alert("La primera frase es más larga.");
else if (lenF2 > lenF1) alert("La segunda frase es más larga.");
else alert("Ambas frases tienen la misma longitud.");


// 9. Contar apariciones de un carácter
let texto9 = prompt("Ingrese un texto:");
let caracter9 = prompt("Ingrese el carácter a contar:");
let contador9 = 0;
for (let i = 0; texto9[i] != undefined; i = i + 1){
  if (texto9[i] == caracter9) contador9 = contador9 + 1;
}
alert("El carácter aparece " + contador9 + " veces.");


// 10. Separar oración en palabras
let oracion10 = prompt("Ingrese una oración:");
let palabras10 = [];
let palabra10 = "";
let indice = 0;
for (let i = 0; oracion10[i] != undefined; i = i + 1){
  if (oracion10[i] != " ") palabra10 = palabra10 + oracion10[i];
  else if (palabra10 != ""){
    palabras10[indice] = palabra10;
    indice = indice + 1;
    palabra10 = "";
  }
}
if (palabra10 != ""){
  palabras10[indice] = palabra10;
  indice = indice + 1;
}
let salida10 = "";
for (let i = 0; i < indice; i = i + 1){
  salida10 = salida10 + palabras10[i] + "\n";
}
alert("Palabras:\n" + salida10);



