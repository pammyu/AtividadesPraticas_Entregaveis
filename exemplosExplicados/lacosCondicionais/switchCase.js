import readline from "readline-sync";
let opcao;
console.log("# ## ### #### #########   Menu   ########## #### ### ## #");
console.log("\n--Digite 1 para ver Indicação de um Livro--");
console.log("--Digite 2 para ler uma Frase Motivacional--");
console.log("--Digite 3 para receber uma Indicação de música--");

opcao = readline.questionInt();

switch (opcao) {
    case 1:
        let validacao = readline.question("Você realmente gosta de livros? s/n");
        if(validacao === "s"){
            console.log("Livro: Vilão");
        }else{
            console.log("Sem livro para você!");
        }
    break;

    case 2:
        console.log("Frase motivacional: Se você cair, levante! Não dá para andar deitado.");
    break;

    case 3:
         console.log("Música: GOLDEN - Huntr/x.");
    break;
    default:
        console.log("Opção Inválida");
}
