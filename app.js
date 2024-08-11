let encryptMap = new Map();
let decryptMap = new Map();

function encryptKey() {
    // Definir las claves y valores como strings
    encryptMap.set('e', 'enter');
    encryptMap.set('i', 'imes');
    encryptMap.set('a', 'ai');
    encryptMap.set('o', 'ober');
    encryptMap.set('u', 'ufat');
}

function decryptKey() {
    // Definir las claves y valores como strings
    decryptMap.set('enter', 'e');
    decryptMap.set('imes', 'i');
    decryptMap.set('ai', 'a');
    decryptMap.set('ober', 'o');
    decryptMap.set('ufat', 'u');
}

function getValueByKey(key) {
    return encryptMap.get(key);
}

function getKeyByValue(value) {
    return decryptMap.get(value);
}

function code() {
    let input = document.getElementsByClassName("textarea-input")[0].value;
    let encryptedText = '';

    // Recorrer cada carácter del input
    for (let char of input) {
        let encryptedChar = getValueByKey(char);
        // Si el carácter no está en el mapa de cifrado, mantenerlo tal cual
        encryptedText += encryptedChar !== undefined ? encryptedChar : char;
    }

    console.log('Texto cifrado:', encryptedText);
}

function decode() {
    let input = document.getElementsByClassName("textarea-input")[0].value;

    // Reemplazar cada secuencia cifrada por su correspondiente valor descifrado
    let decryptedText = input;
    decryptMap.forEach((value, key) => {
        decryptedText = decryptedText.replaceAll(key, value);
    });

    console.log('Texto descifrado:', decryptedText);
}
function copy() {
    let input = document.getElementsByClassName("textarea-input")[0].value;
    
    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(input).then(() => {
        alert("Texto copiado al portapapeles!");
    }).catch(err => {
        console.error("Error al copiar al portapapeles: ", err);
    });
}

// Inicializar los mapas
encryptKey();
decryptKey();
