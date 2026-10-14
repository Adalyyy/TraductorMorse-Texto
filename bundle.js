/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
() {

eval("{// Declaración de variables\n\nconst palabra = document.getElementById(\"palabra\");\nconst codigoM = document.getElementById(\"codigoM\");\nconst codigoT = document.getElementById(\"codigoT\");\nconst borrar = document.getElementById(\"borrar\");\nconst respuesta = document.getElementById(\"respuesta\");\n\n// Diccionario Morse\nconst codigoMorse = {\n  A: '.-',\n  B: '-...',\n  C: '-.-.',\n  D: '-..',\n  E: '.',\n  F: '..-.',\n  G: '--.',\n  H: '....',\n  I: '..',\n  J: '.---',\n  K: '-.-',\n  L: '.-..',\n  M: '--',\n  N: '-.',\n  O: '---',\n  P: '.--.',\n  Q: '--.-',\n  R: '.-.',\n  S: '...',\n  T: '-',\n  U: '..-',\n  V: '...-',\n  W: '.--',\n  X: '-..-',\n  Y: '-.--',\n  Z: '--..',\n  0: '-----',\n  1: '.----',\n  2: '..---',\n  3: '...--',\n  4: '....-',\n  5: '.....',\n  6: '-....',\n  7: '--...',\n  8: '---..',\n  9: '----.',\n  '.': '.-.-.-',\n  ',': '--..--',\n  '?': '..--..',\n  \"'\": '.----.',\n  '!': '-.-.--',\n  '/': '-..-.',\n  '(': '-.--.',\n  ')': '-.--.-',\n  '&': '.-...',\n  ':': '---...',\n  ';': '-.-.-.',\n  '=': '-...-',\n  '+': '.-.-.',\n  '-': '-....-',\n  '_': '..--.-',\n  '\"': '.-..-.',\n  '$': '...-..-',\n  '@': '.--.-.'\n};\n\n// Texto a Morse\ncodigoM.addEventListener(\"click\", () => {\n  const texto = palabra.value.toUpperCase();\n\n  // Validar si el texto está vacío\n  !texto.trim() ? respuesta.textContent = \"Escribe un texto primero.\" : respuesta.textContent = texto.split(\"\").map(caracter => caracter === \" \" ? \"/\" : codigoMorse[caracter] || \"No válido\").join(\" \");\n});\n\n// Morse a Texto\ncodigoT.addEventListener(\"click\", () => {\n  const texto = palabra.value.trim();\n\n  // Validar si el código Morse está vacío\n  !texto ? respuesta.textContent = \"Escribe el código Morse primero.\" : (() => {\n    // Crear diccionario inverso\n    const diccionarioInverso = {};\n    for (const caracter in codigoMorse) {\n      diccionarioInverso[codigoMorse[caracter]] = caracter;\n    }\n\n    // Separar los códigos Morse\n    const caracteres = texto.split(\" \");\n\n    // Traducir Morse a texto\n    const resultado = caracteres.map(codigo => codigo === \"/\" ? \" \" : diccionarioInverso[codigo] || \"No válido\");\n\n    // Mostrar resultado\n    respuesta.textContent = resultado.join(\"\");\n  })();\n});\n\n// Borrar\nborrar.addEventListener(\"click\", () => {\n  palabra.value = \"\";\n  respuesta.textContent = \"\";\n});\n\n//# sourceURL=webpack://plantilla/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;