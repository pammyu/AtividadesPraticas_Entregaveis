//Exercício 6 - Laço de Repetição DO... WHILE

import readline from "readline-sync"

let numero = 0;
let multiplo = 0;
let contadorMultiplos = 0;

do{
    numero = readline.questionInt("Digite um numero: ");
    
    if (numero !==0 && numero % 3 === 0){
        multiplo = multiplo + numero;
        contadorMultiplos++;
    }

}while (numero != 0);

if (contadorMultiplos > 0){
    let media = multiplo / contadorMultiplos;
    console.log(`A média de todos os numeros multiplos de 3 é: ${media.toFixed(2)}`);
}
