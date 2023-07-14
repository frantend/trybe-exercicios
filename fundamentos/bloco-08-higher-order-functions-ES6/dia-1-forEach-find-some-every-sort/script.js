// Nova pessoa contratada
// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:

// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

// utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

const geraEmail = (nomeCompleto) => {
  const email = nomeCompleto.replace(' ', '-').toLowerCase();
  return `Nome: ${nomeCompleto}, Email: ${email}@trybe.com`;
};

const newEmployees = () => {
  const employees = {
    id1: geraEmail('Pedro Guerra'),
    id2: geraEmail('Luiza Drumond'),
    id3: geraEmail('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees());


// Sorteador de loteria
// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const sorteadorLoteria = (numero) => {
  const numeroAleatorio = Math.floor(Math.random() * (5 - 1 + 1));

  console.log(numero === numeroAleatorio ? `Número sorteado: ${numeroAleatorio} - Parabéns, você ganhou` : `Número sorteado: ${numeroAleatorio} - Tente novamente`)
  
}
sorteadorLoteria(3)