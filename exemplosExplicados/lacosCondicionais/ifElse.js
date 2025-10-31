import readline from 'readline-sync'

let nota1, nota2, media;

nota1 = readline.questionFloat("Digite a primeira nota: ");
nota2 = readline.questionFloat("Digite a segunda nota: ");

media = (nota1 + nota2)/2;

if (media >= 6){
    console.log(`a média foi ${media} e você foi aprovado!`);
}
else {
    console.log("Reprovado.");
}