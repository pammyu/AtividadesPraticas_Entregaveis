import readline from 'readline-sync'

let nota1, nota2, nota3, nota4, notaFinal;

nota1 = readline.questionFloat("Digite sua Nota 1: ");
nota2 = readline.questionFloat("Digite sua Nota 2: ");
nota3 = readline.questionFloat("Digite sua Nota 3: ");
nota4 = readline.questionFloat("Digite sua Nota 4: ");

notaFinal = (nota1 + nota2 + nota3 + nota4)/4;
console.log("Sua Média final é " , notaFinal.toFixed(1));