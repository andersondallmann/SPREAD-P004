//primeira opção para resolver essa questão de verificação de uma string
function verificaPalindromo(string){
    if(!string) return "String inexistente";

    return string.split('').reverse().join('') === string;
}

let MyVar;
console.log(verificaPalindromo(MyVar));