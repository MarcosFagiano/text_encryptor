let encryptMap = new Map();
let decryptMap = new Map();

function encryptKey() {
    encryptMap.set('e', 'enter');
    encryptMap.set('i', 'imes');
    encryptMap.set('a', 'ai');
    encryptMap.set('o', 'ober');
    encryptMap.set('u', 'ufat');
}

function decryptKey() {
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
    let input = document.getElementsByClassName("txt-area-in")[0].value;
    let encryptedText = '';

    for (let char of input) {
        let encryptedChar = getValueByKey(char);
        encryptedText += encryptedChar !== undefined ? encryptedChar : char;
    }

    document.getElementsByClassName("txt-area-out")[0].value = encryptedText;
}

function decode() {
    let input = document.getElementsByClassName("txt-area-in")[0].value;

    let decryptedText = input;
    decryptMap.forEach((value, key) => {
        decryptedText = decryptedText.replaceAll(key, value);
    });

    document.getElementsByClassName("txt-area-out")[0].value = decryptedText;
}

function copy() {
    let output = document.getElementsByClassName("txt-area-out")[0].value;
    
    navigator.clipboard.writeText(output).then(() => {
        alert("Texto copiado al portapapeles!");
    }).catch(err => {
        console.error("Error al copiar al portapapeles: ", err);
    });
}

encryptKey();
decryptKey();
