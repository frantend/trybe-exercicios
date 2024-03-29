// 10 Exercícios de Lógica, utilizando: lógica condicional (if/else e switch/case), operadores aritméticos (+, -, *, /, %) e operadores lógicos (>, <, &&, ||).

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


/* 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
  Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
  Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
  Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
  Exemplo: bishop (bispo) -> diagonals (diagonais) */

let pecaXadrez = 'REI';

switch (pecaXadrez.toLowerCase()) {

  case 'rei' :
    console.log(`O ${pecaXadrez} pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez`);
    break;

  case 'rainha' :
    console.log(`A ${pecaXadrez} move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.`);
    break;

  case 'bispo' :
    console.log(`O ${pecaXadrez} move-se ao longo da diagonal. Não pode pular outras peças.`);
    break;

  case 'cavalo' :
    console.log(`O ${pecaXadrez} a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.`);
    break;

  case 'torre' :
    console.log(`A ${pecaXadrez} movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.`);
    break;

  case 'peao' :
    console.log(`O ${pecaXadrez} movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.`);
    break;
  
    default:
      console.log(`A peça ${pecaXadrez} não existe.`)
}


/* 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let nota = 90;

if(nota < 0 || nota > 100){
  console.log('Erro, informação incorreta!');

} else if(nota > 90) {
  console.log('A');

} else if(nota >= 80) {
  console.log('B');

} else if(nota >= 70) {
  console.log('C');

} else if(nota >= 60) {
  console.log('D');

} else if(nota >= 50) {
  console.log('E');

} else if(nota < 50) {
  console.log('F');

}


/* 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false. */

const numero1 = 10;
const numero2 = -20;
const numero3 = 0;

let verificador = false;

if(numero1 >= 0 || numero2 >= 0 || numero3 >= 0) {
  verificador = true;
}
console.log(verificador);


/* 9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false. */

const numero1 = -1;
const numero2 = 10;
const numero3 = 0;

let verificador = false;

if(numero1 % 2 !== 0 || numero2 % 2 !== 0 || numero3 % 2 !== 0) {
  verificador = true;
}
console.log(verificador);


/* 1- Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) */

const valorCusto = 10;
const valorCustoTotal = valorCusto * 1.2;

const valorVenda = 15;
const lucro = valorVenda - valorCustoTotal;

if(valorCusto < 0 && valorVenda < 0) {
  console.log('Valores informados menores que R$0');
} else {
  console.log(`O lucro de mil produtos vendidos é de R$ ${lucro*1000}`);
}


