import readline from 'readline-sync'

const nomeDoador = readline.question("Qual seu nome? ");
const idadeDoador = readline.question("Qual sua idade? ");
const eDoador = readline.question("Você é doador de sangue? (S/N) ");

if(idadeDoador >= 60 && idadeDoador <= 69 && eDoador == "S"){
    console.log(`O(A) doador(A) ${nomeDoador} é apto para doar sangue!`);
}else if(idadeDoador >= 18 && idadeDoador <= 60){
    console.log(`O(A) doador(A) ${nomeDoador} é apto para doar sangue!`);
}else{
    console.log(`O(A) doador(A) ${nomeDoador} não é apto para doar sangue!`);
}

