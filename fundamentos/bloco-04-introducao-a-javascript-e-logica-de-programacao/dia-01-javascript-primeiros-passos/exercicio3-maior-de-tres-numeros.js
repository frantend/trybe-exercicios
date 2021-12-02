// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const n1 = 1;
const n2 = 2;
const n3 = 3;

if(n1 > n2 && n1 > n3){
  console.log("O maior é: " + n1)
}
else if(n2 > n3) {
  console.log("O maior é: " + n2)
}
else {
  console.log("O maior é: " + n3)
}