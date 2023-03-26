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

//O século XX iniciou em 1 de janeiro de 1901 e terminou em 31 de dezembro de 2000

//Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
const filterPeople = () => {
  return people.filter(({ nationality, bornIn }) => {
    return bornIn <= 2000 && bornIn >= 1901 && nationality === 'Australian';
  });
};

console.log(filterPeople(people));
