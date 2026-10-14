// Declaración de variables

const palabra = document.getElementById("palabra");
const codigoM = document.getElementById("codigoM");
const codigoT = document.getElementById("codigoT");
const borrar = document.getElementById("borrar");
const respuesta = document.getElementById("respuesta");

// Diccionario Morse
const codigoMorse = {
    A: '.-',    B: '-...',  C: '-.-.',  D: '-..',
    E: '.',     F: '..-.',  G: '--.',   H: '....',
    I: '..',    J: '.---',  K: '-.-',   L: '.-..',
    M: '--',    N: '-.',    O: '---',   P: '.--.',
    Q: '--.-',  R: '.-.',   S: '...',   T: '-',
    U: '..-',   V: '...-',  W: '.--',   X: '-..-',
    Y: '-.--',  Z: '--..',

    0: '-----', 1: '.----', 2: '..---', 3: '...--',
    4: '....-', 5: '.....', 6: '-....', 7: '--...',
    8: '---..', 9: '----.',

    '.': '.-.-.-', ',': '--..--', '?': '..--..',
    "'": '.----.', '!': '-.-.--', '/': '-..-.',
    '(': '-.--.', ')': '-.--.-', '&': '.-...',
    ':': '---...', ';': '-.-.-.', '=': '-...-',
    '+': '.-.-.', '-': '-....-', '_': '..--.-',
    '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
};

// Texto a Morse
codigoM.addEventListener("click", () => {

    const texto = palabra.value.toUpperCase();

    // Validar si el texto está vacío
    !texto.trim()
        ? respuesta.textContent = "Escribe un texto primero."
        : respuesta.textContent = texto
            .split("")
            .map(caracter =>
                caracter === " "
                    ? "/"
                    : codigoMorse[caracter] || "No válido"
            )
            .join(" ");

});

// Morse a Texto
codigoT.addEventListener("click", () => {

    const texto = palabra.value.trim();

    // Validar si el código Morse está vacío
    !texto
        ? respuesta.textContent = "Escribe el código Morse primero."
        : (() => {

            // Crear diccionario inverso
            const diccionarioInverso = {};

            for (const caracter in codigoMorse) {
                diccionarioInverso[codigoMorse[caracter]] = caracter;
            }

            // Separar los códigos Morse
            const caracteres = texto.split(" ");

            // Traducir Morse a texto
            const resultado = caracteres.map(codigo =>
                codigo === "/"
                    ? " "
                    : diccionarioInverso[codigo] || "No válido"
            );

            // Mostrar resultado
            respuesta.textContent = resultado.join("");

        })();

});

// Borrar
borrar.addEventListener("click", () => {

    palabra.value = "";
    respuesta.textContent = "";

});