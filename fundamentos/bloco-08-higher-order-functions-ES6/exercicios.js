// Escreva a função swap, que, dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando apenas 1 linha. O retorno da função utilizando o array myList deve ser [3, 2, 5]. 
// Use o array destructuring e abbreviation object literal
const myList = [5, 2, 3];

const swap = ([a, b, c]) => [c, b, a];
console.log(swap(myList)); 

// Suponha que você esteja trabalhando em projeto de um site de carros, onde cada carro é representado dentro de um array. Então sua liderança pede que seja mudado o formato de array para objeto. Para isso, crie uma função chamada toObject que, dada uma lista, retorna um objeto representando o carro:
// Use o array destructuring e abbreviation object literal
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = (arrayCarro) => {
    const [nome, marca, ano] = arrayCarro
    return ({nome, marca, ano})
}
console.log(toObject(chiron)); //{nome: 'Chiron', marca: 'Bugatti', ano: 2016}


//Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento. Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado:
// Use o default params
const greet = (nome, cumprimento = 'Hi') => `${cumprimento} ${nome}`
// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

// Escreva uma função getLastName que receba como parâmetro um objeto contendo informações de uma pessoa. Essa função deve retornar a propriedade lastName para o objeto passado, porém, caso o objeto não tenha essa propriedade, a função deve retornar a mensagem lastName não preenchido.
// Use default destructuring

const studentA = {
  name: `Claudia`,
  lastName: `Farias`,
  age: 23,
}

const studentB = {
  name: `Vitor`,
  age: 20,
}

const getLastName = (objeto) => {
    const {lastName = 'lasteName não preenchido'} = objeto;
    return lastName
}

console.log(getLastName(studentA)); // Farias
console.log(getLastName(studentB)); // lasteName não preenchido


//Usando array destructuring, armazene cada nome presente na variável moreStudents em variáveis separadas:
const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam']
  ];

 
  const [student1, [student2, student3], [student4, student5]] = moreStudents;

console.log(student1, student2, student3, student4, student5); // Chris Ahmad Antigoni Toby Sam


// Dado o código abaixo, altere a chamada da função rectangleArea de forma que seja impressa a área dos 3 retângulos (rectangle1, rectangle2 e rectangle3). O código deve retornar em sequência 2, 15 e 54.
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)); // 2 5 54
});


// Crie uma função sum que, dado um número ilimitado de parâmetros, retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6), o número 15 deve ser retornado.
const sum = (...numeros) => {
    return numeros.reduce((total, numeroAtual) => (total + numeroAtual),0);
}
console.log(sum(4,5,6));


// Escreva a função personLikes, que recebe como parâmetro os objetos alex ou gunnar. Cada objeto representa uma pessoa, e a função deve retornar todos os gostos daquela pessoa, conforme mostrado abaixo:
// name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
// <nome> tem <anos de idade> e gosta de <gostos da pessoa>

// Retornos esperados:
console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'


// Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
  // bornIn: nascido em
];

// escreva filterPeople abaixo
const filterPeople = () => {
  return people.filter(({bornIn, nationality}) => {
    return bornIn > 1900 && bornIn <= 2000 && nationality === 'Australian'
  })
}
console.log(filterPeople());
// [
//   { name: 'Nicole', bornIn: 1992, nationality: 'Australian' },
//   { name: 'Toby', bornIn: 1901, nationality: 'Australian' }
// ]


// Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de medida:
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
  // measurementUnit: unidade de medida
];

// escreva shipLength abaixo
const shipLength = ({name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`;

// retorno esperado
console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'


// O objeto yearSeasons representa as estações do ano. Cada chave do objeto é uma estação, e o valor de cada chave é um array de strings que representa os meses daquela estação. A partir desse objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.
//Obs. 💬: As estações do ano aqui descritas têm base nas estações do hemisfério norte.

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.
const {spring, summer, autumn, winter} = yearSeasons;
const meses = [...spring, ...summer, ...autumn, ...winter];
console.log(meses);
// [
//   'March',     'April',
//   'May',       'June',
//   'July',      'August',
//   'September', 'October',
//   'November',  'December',
//   'January',   'February'
// ]