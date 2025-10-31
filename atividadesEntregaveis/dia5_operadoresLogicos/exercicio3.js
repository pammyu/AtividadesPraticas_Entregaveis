import readline from 'readline-sync'

let salarioBruto
let adicionalNoturno
let horasExtras
let descontos
let salarioLiquido

salarioBruto = readline.questionInt("Digite seu salário bruto: ");
adicionalNoturno = readline.questionInt("Digite seu adicional norturno: ");
horasExtras = readline.questionInt("Digite suas horas extras: ");
descontos = readline.questionInt("Digite seus descontos: ");

salarioLiquido = (salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos);
console.log("Seu Salário líquido é: " , salarioLiquido.toFixed(2));