import readline from "readline-sync"

let quantidadeComida, precoComida, valorTotal;
let opcao;
let produto;

console.log("# ## ### #### #########   MENU: O que você deseja?  ########## #### ### ## #");
console.log("\n--Digite 1 para Cachorro-Quente (R$ 10.00)--");
console.log("--Digite 2 para X-Salada (R$ 15.00)--");
console.log("--Digite 3 para X-Bacon (R$ 18.00)--");
console.log("--Digite 4 para Bauru (R$ 12.00)--");
console.log("--Digite 5 para Refrigerante (R$ 8.00)--");
console.log("--Digite 6 para Suco de laranja (R$ 13.00)--");

opcao = readline.questionInt("Digite o código do produto que deseja: ");
quantidadeComida = readline.questionInt("Digite a quantidade que deseja: ");


switch(opcao) {
    case 1: 
    produto = "Cachorro-Quente";
    precoComida = 10.00;
    break;

    case 2: 
    produto = "X-Salada";
    precoComida = 15.00;
    break;

    case 3: 
    produto = "X-Bacon";
    precoComida = 18.00;
    break;

    case 4: 
    produto = "Bauru";
    precoComida = 12.00;
    break;

    case 5: 
    produto = "Refrigerante";
    precoComida = 8.00;
    break;

    case 6: 
    produto = "Suco de Laranja";
    precoComida = 13.00;
    break;

    default:
        console.log("Código Inválido! Digite um número entre 1 e 6.");
}

valorTotal = quantidadeComida * precoComida;

if (precoComida > 0){
    console.log(`\nO produto selecionado foi: ${produto}`);
    console.log(`Total: ${valorTotal.toFixed(2)}`);
}
