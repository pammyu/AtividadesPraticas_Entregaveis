import readline from "readline-sync"

let nomeColaborador = readline.question("Digite o nome do colaborador: ");
let cargoColaborador;
let novoSalario, reajuste;
let opcao;

console.log("==================== CARGOS E REAJUSTES ====================");
console.log("\n--Digite 1 para Gerente--");
console.log("--Digite 2 para Vendedor--");
console.log("--Digite 3 para Supervisor--");
console.log("--Digite 4 para Motorista--");
console.log("--Digite 5 para Estoquista--");
console.log("--Digite 6 para Técnico de TI--");

opcao = readline.questionInt("Digite o código do cargo que deseja acessar: ");
let salarioAtual = readline.questionInt("Digite seu salário atual: ");

switch(opcao) {
    case 1: 
    cargoColaborador = "Gerente";
    reajuste = 0.10;
    break;

    case 2: 
    cargoColaborador = "Vendedor";
    reajuste = 0.07;
    break;

    case 3: 
    cargoColaborador = "Supervisor";
    reajuste = 0.09;
    break;

    case 4: 
    cargoColaborador = "Motorista";
    reajuste = 0.06;
    break;

    case 5: 
    cargoColaborador = "Estoquista";
    reajuste = 0.05;
    break;

    case 6: 
    cargoColaborador = "Técnico de TI";
    reajuste = 0.08;
    break;

    default:
        console.log("Código Inválido! Digite um número entre 1 e 6.");
        reajuste = null;
}

if (reajuste !== null){
    novoSalario = salarioAtual + (reajuste * salarioAtual);
    console.log("\n==================== RESULTADOS ====================");
    console.log(`Nome do colaborador: ${nomeColaborador}`);
    console.log(`Cargo: ${cargoColaborador}`);
    console.log(`Salário reajustado: R$ ${novoSalario.toFixed(2)}`);
}