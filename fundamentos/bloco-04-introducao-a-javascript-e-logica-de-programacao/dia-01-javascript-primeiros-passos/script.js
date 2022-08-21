// 15 Exercícios de Lógica, utilizando: lógica condicional (if/else e switch/case), operadores aritméticos (+, -, *, /, %) e operadores lógicos (>, <, &&, ||).

/* 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

const a = 2;
const b = 3;

let operacao = 'Módulo';

switch(operacao) {

  case "Adição":
    console.log(a + b);
    break;

  case "Subtração":
    console.log(a - b);
    break;

  case "Multiplicação":
    console.log(a * b);
    break;

  case "Divisão":
    console.log(a / b);
    break;

  case "Módulo":
    console.log(a % b);
    break;

  default:
    console.log('Operação indisponível');
}


/* 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */

const n1 = 10;
const n2 = 50;

if(n1 > n2) {
  console.log(`${n1} é o maior.`);
} else {
  console.log(`${n2} é o maior`);
}


/* 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

const n1 = 100;
const n2 = 150;
const n3 = 75;

if(n1 > n2 && n1 > n3) {
  console.log(`${n1} é o maior`);
} else if(n2 > n1 && n2 > n3) {
  console.log(`${n2} é o maior`);
} else {
  console.log(`${n3} é o maior`);
}

/* 4 - Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero". */

const valor = 0;

if(valor > 0) {
  console.log('positive');
} else if(valor < 0) {
  console.log('negative');
} else {
  console.log('zero')
}


/* 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.
 */

let anguloA = 1;
let anguloB = 89;
let anguloC = 90;

if(anguloA > 0 && anguloB > 0 && anguloC > 0) {
  if(anguloA + anguloB + anguloC == 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('erro');
}