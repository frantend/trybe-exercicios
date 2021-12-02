// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const anguloAB = 60;
const anguloAC = 60;
const anguloBC = 60;

if(anguloAB + anguloAC + anguloBC === 180){
  console.log("true")
}
else if(anguloAB + anguloAC + anguloBC != 180){
  console.log("false")
}
else if(anguloAB < 0 || anguloAC < 0 || anguloBC < 0){
  console.log("Não é permitido ângulo com valor negativo")
}


// ! Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// ! Um ângulo será considerado inválido se não tiver um valor positivo.