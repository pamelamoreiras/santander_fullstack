function verificarPalidromo (string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(verificarPalidromo("gato"))

// solução 2

function verificarPalidromo2 (string) {
    if(!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 -i]){
            return false;
        }
    }

    return true;
}

console.log(verificarPalidromo2("ama"))