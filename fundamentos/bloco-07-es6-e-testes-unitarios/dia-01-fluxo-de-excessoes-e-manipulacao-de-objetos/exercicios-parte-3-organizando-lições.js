const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function adicionarTurno(objeto, chave, valor) {
  objeto[chave] = valor;
  console.log(objeto);
}

adicionarTurno(lesson2, 'turno', 'noite');

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listarChaves(objeto) {
  console.log(Object.keys(objeto));
}
listarChaves(lesson1);

//Crie uma função para mostrar o tamanho de um objeto.
function mostrarTamanho(objeto) {
  const tamanhoObjeto = Object.entries(objeto)
  console.log(tamanhoObjeto.length);
}
mostrarTamanho(lesson1);

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function mostrarValores(objeto) {
  return Object.values(objeto);
}
mostrarValores(lesson1);

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3.
function allLessons() {
  const novoObjeto = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
  return novoObjeto;
}
console.log(allLessons());

//Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
function totalEstudantes() {
  const alunos = lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes;
  return alunos;
}
console.log(totalEstudantes());
