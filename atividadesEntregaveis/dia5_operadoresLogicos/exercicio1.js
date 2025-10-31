import readline from 'readline-sync'

let salario;
let abono;
let novoSalario;

salario = readline.questionFloat("Digite o Salário: ");
console.log(salario);

abono = readline.questionFloat("Digite o Abono: ");
console.log(abono);

novoSalario = (salario + abono);
console.log("O novo Salário é:" + novoSalario.toFixed(2));