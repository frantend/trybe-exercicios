// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 2;
const b = 3;
let operacao = "divisao";

switch(operacao) {
  case "adicao":
    console.log(a + b);
    break;

  case "subtracao":
    console.log(a - b);
    break;

  case "multiplicacao":
    console.log(a * b);
    break;

  case "divisao":
    console.log((a / b).toFixed(2));
    break;

  case "modulo":
    console.log(a % b);
    break;

  default:
    console.log("Operação inexistente!!")
}