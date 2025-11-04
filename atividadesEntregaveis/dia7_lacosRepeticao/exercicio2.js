//Exercício 2 - Laço de Repetição FOR

import readline from "readline-sync"

let pares = 0;
let impares = 0;
for( let i = 1 ; i < 11 ; i++ ){
    let numero = readline.questionInt(`Digite o ${i} numero: `);
    if (numero % 2 === 0){
        pares++;
    }else{
        impares++;
    }
}

console.log(`Total de números pares: ${pares}`);
console.log(`Total de números ímpares: ${impares}`);
