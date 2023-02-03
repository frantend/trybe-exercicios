/* 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24 

Com base nessas informações, crie um algoritmo que retorne o fatorial de 10. */

let fatorial = 1;

for(let i = 1; i <= 10; i+=1) {
  fatorial *= i;
}

console.log(fatorial);

/* 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. */
// solução 1
let word = 'tryber'; 
let palavraInversa = '';

for(let i = 0; i < word.length; i += 1) {
  palavraInversa += word[word.length - 1 - i];
}

console.log(palavraInversa);

// solução 2
let palavra = 'trybe';
let palavraInversa = "";
for (var i = palavra.length - 1; i >= 0; i--) { 
    palavraInversa += palavra[i];
}

console.log(palavraInversa);

// solução 3
let palavra = 'trybe'
var palavraInversa = '';
for (var i = palavra.length - 1; i >= 0; i--) {
  console.log(palavra[i])
  palavraInversa += palavra[i];
}
console.log(palavraInversa);

/* 3- Considere o array de strings abaixo:
Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. */

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for(let i=0; i < array.length; i+=1) {

  if(array[i].length > maiorPalavra.length) {
    maiorPalavra = array[i];
  }
}

console.log(`A maior palavra no array é ${maiorPalavra}`);

for(let i = 0; i < array.length; i += 1) {
  if(array[i].length < menorPalavra.length) {
    menorPalavra = array[i];
  }
}

console.log(`A menor palavra no array é ${menorPalavra}`);

// console.log(maiorPalavra);


/* 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50. */

for(let numero = 2; numero <= 10; numero += 1) {
  let ehPrimo = true;

  for(let divisor = 2; divisor < numero; divisor += 1) {
    if(numero % divisor === 0) {
      ehPrimo = false;
      break;
    }
  }

  if(ehPrimo) console.log(numero);
}

/* Bônus
1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

*****
*****
*****
*****
*****

*/

let n = 5;
let simbolo = '*';
let linha = '';

for(let index = 0; index < n; index += 1) {
  linha = linha + simbolo;
}
for(let index = 0; index < n; index += 1) {
  console.log(linha)
}



/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
n = 5

*
**
***
****
*****

*/



/* 3- Agora inverta o lado do triângulo. Por exemplo:
n = 5

    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também. */




/* 4- Depois, faça uma pirâmide com n asteriscos de base:
n = 5

  *
 ***
***** 
*/




/* 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
******* */




/* 6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar. */
