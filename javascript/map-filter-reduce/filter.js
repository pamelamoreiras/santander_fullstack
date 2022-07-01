function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item){
    return item % 2 == 0;
}

const meuArray = [1, 5, 7, 90, 45, 34, 22];

console.log(filtraPares(meuArray));