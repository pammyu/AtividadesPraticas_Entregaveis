import readline from 'readline-sync'

let nome;
let idade;
let senha;
let email;

nome = readline.question("Digite seu nome: ");
idade = readline.questionInt("Digite sua idade: ");
senha = readline.questionNewPassword("Digite sua senha: ");
email = readline.questionEMail("Digite seu email: ");

console.log(`\n Nome: ${nome} \n Idade: ${idade} \n E-mail: ${email}.` );