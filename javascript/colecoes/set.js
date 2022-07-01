const meuArray = [30, 30, 40, 5, 222, 205, 3000, 5];

function valoresUnicos(array){
    const mySet = new Set(array);

    return [... mySet];
}

console.log(valoresUnicos(meuArray));