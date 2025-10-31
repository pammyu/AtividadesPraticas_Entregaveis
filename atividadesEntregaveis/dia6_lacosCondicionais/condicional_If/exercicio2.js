import readline from 'readline-sync'

let numero;

numero = readline.questionInt("Digite um numero: ");

if (numero % 2 == 0 && numero > 0){
    console.log("O número é par e é positivo!");
}else if (numero % 2 == 0 && numero < 0){
    console.log("O número é par e é negativo!");
}

if (numero % 2 != 0 && numero > 0){
    console.log("O número é ímpar e é positivo!");
}else if (numero % 2 != 0 && numero < 0){
    console.log("O número é ímpar e é negativo!");
}

else{
    (numero === 0)
    console.log("O número inserido é zero.")
}
