// Exercício 3 - Lista de Tarefas
// Crie uma página HTML com um campo de texto para adicionar tarefas e um botão "Adicionar". Abaixo do campo de texto, exiba a lista de tarefas adicionadas. Utilize o localStorage para armazenar a lista de tarefas e garantir que ela persista entre as visitas à página.

const input = document.querySelector('#input');
const botao = document.querySelector('button');
const ul = document.querySelector('ul')
const arrayTarefas = [];

//Função que cria itens dentro da lista.
const criarTarefa = (valor) => {

  const li = document.createElement('li');

  li.innerHTML = valor;
  
  ul.appendChild(li)
  
  return ul;
}

//Verifica se tem algo no localStorage
if (localStorage.getItem('tarefa')) {
  //salva o localStorage e transforma para array novamente com parse
  const getTarefas = JSON.parse(localStorage.getItem('tarefa'));

  //itera dentro do array criando os itens que deverão persistir ao atualizar a página
  for (const tarefa of getTarefas) {
    criarTarefa(tarefa)
    //alimenta o array com o valor do input
    arrayTarefas.push(tarefa)
  }
}

botao.addEventListener('click', () => {
  //chama a função que cria o elemento e adiciona como filho da lista
  criarTarefa(input.value.trim());

  //alimenta o array com o valor do input
  arrayTarefas.push(input.value.trim());

  //armazena no localStorage o arrayTarefas, com a chave 'tarefa'
  //e transforma o array em string com stringify
  localStorage.setItem('anotacao', JSON.stringify(arrayTarefas));

  //limpa o input quando clica em salvar
  input.value = '';
});

///////  REFATORADO PELO CHATGPT  ////////////
// const input = document.querySelector('#input');
// const botaoAdicionar = document.querySelector('#botao-adicionar');
// const listaTarefas = document.querySelector('#lista-tarefas');

// let tarefas = [];

// function salvarTarefasNoLocalStorage() {
//   localStorage.setItem('anotacao', JSON.stringify(tarefas));
// }

// function adicionarTarefa() {
//   const tarefa = input.value.trim();

//   if (tarefa === '') {
//     alert('Por favor, insira uma tarefa.');
//     return;
//   }

//   tarefas.push(tarefa);
//   criarTarefaNaLista(tarefa);
//   salvarTarefasNoLocalStorage();

//   input.value = '';
// }

// function criarTarefaNaLista(tarefa) {
//   const li = document.createElement('li');
//   li.textContent = tarefa;
//   listaTarefas.appendChild(li);
// }

// function carregarTarefasDoLocalStorage() {
//   const tarefasSalvas = localStorage.getItem('anotacao');
//   if (tarefasSalvas) {
//     tarefas = JSON.parse(tarefasSalvas);
//     tarefas.forEach(criarTarefaNaLista);
//   }
// }

// botaoAdicionar.addEventListener('click', adicionarTarefa);
// carregarTarefasDoLocalStorage();
