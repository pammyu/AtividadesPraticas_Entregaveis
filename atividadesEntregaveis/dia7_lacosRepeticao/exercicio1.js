//Exercício 1 - Laço de Repetição FOR
import readline from "readline-sync"

let primeiroNumero = readline.questionInt("Digite o primeiro número: ");
let ultimoNumero = readline.questionInt("Digite o último número: ");

if(primeiroNumero >= ultimoNumero){
        console.log("Intervalo Inválido!");
}else{
    console.log(`No intervalo entre ${primeiroNumero} e ${ultimoNumero}: `);

    for(let i = primeiroNumero; i <= ultimoNumero; i++)
        if(i % 3 === 0 && i % 5 === 0){
            console.log(`${i} é múltiplo de 3 e 5`);
        }
}



