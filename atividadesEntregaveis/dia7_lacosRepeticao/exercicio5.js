//Exercício 5 - Laço de Repetição DO... WHILE

import readline from "readline-sync"

let numero = 0;
let positivo = 0;

do{
    numero = readline.questionInt("Digite um numero: ");
    
    if (numero > 0){
        positivo = positivo + numero;
    }

}while (numero != 0);

console.log(`A soma dos numeros positivos é: ${positivo}`);