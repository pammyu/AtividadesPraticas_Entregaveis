//Exercício 3 - Laço de Repetição WHILE

import readline from "readline-sync"

let maior50 = 0, menor21 = 0;
let idade;

idade = readline.questionInt("Digite uma idade: ");

while(idade >= 0 ){
    if (idade > 0 && idade < 21){
        menor21++;
    }else if(idade > 50){
        maior50++
    }
    idade = readline.questionInt("Digite uma idade: ");
}

console.log(`Total de pessoas menores de 21 anos: ${menor21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maior50}`);



