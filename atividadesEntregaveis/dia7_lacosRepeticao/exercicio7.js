//Exercício 7 - Vetores

import readline from "readline-sync"

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let numeroEncontrar = readline.questionInt("Digite o numero que voce deseja encontrar: ");
let posicaoFinal = null;


for( let i = 0 ; i < vetor.length ; i++ ){
    if(vetor[i] === numeroEncontrar){
        posicaoFinal = i;
    }
}

console.log((posicaoFinal === null) ? `O número ${numeroEncontrar} não foi encontrado!` :
`O número ${numeroEncontrar} esta localizado na posição: ${posicaoFinal}`);