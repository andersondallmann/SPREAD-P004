function substituiPares(array) {
    if (!array) return -1;
    if (!array.length) return -1;
    for (let i = 0; i < array.length; i++)  // inicializa a variável 
    { 
        if (array [i] === 0) {
            console.log("Você já é zero")
        } else if (array[i] % 2 === 0) // aqui faz a verificação se o numéro conforme o índice é par!
        {
            console.log (`Você ${array[i]} foi substitui por 0.`)
            array[i] = 0;
        } 
    }
    return array;
}

let arr = [1, 3, 6, 8, 13, 17, 19, 20, 24];

console.log(substituiPares(arr));
