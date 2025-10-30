import readline from 'readline-sync'

let n1, n2, n3, n4;
let produto;

n1 = readline.questionFloat("Digite o primeiro valor: ");
n2 = readline.questionFloat("Digite o segundo valor: ");
n3 = readline.questionFloat("Digite o terceiro valor: ")
n4 = readline.questionFloat("Digite o quarto valor: ");

produto = (n1 * n2) - (n3 * n4);
console.log("A diferença dos produtos é: " , produto.toFixed(1));
