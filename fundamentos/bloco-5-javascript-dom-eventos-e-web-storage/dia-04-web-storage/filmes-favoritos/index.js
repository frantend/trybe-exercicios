// Elementos do DOM
const input = document.querySelector('#input');
const botaoAdd = document.querySelector('button');
const ul = document.querySelector('ul');

// Array de filmes
let arrayFilmes = [];

// Função para criar um elemento de filme na lista
const criarFilme = (filme) => {
  const li = document.createElement('li');
  li.textContent = filme;
  li.id = filme;

  const botaoRemover = document.createElement('button');
  botaoRemover.textContent = 'x';
  botaoRemover.id = 'btnRemover';

  li.appendChild(botaoRemover);
  ul.appendChild(li);
};

// Função para remover um filme da lista
const removerFilmeDaLista = (filme) => {
  arrayFilmes = arrayFilmes.filter((item) => item !== filme);
  localStorage.setItem('filmes', JSON.stringify(arrayFilmes));
  atualizarLista();
};

// Função para adicionar um filme à lista
const adicionarFilme = () => {
  const filme = input.value.trim();
  if (filme === '') {
    alert('Por favor, insira o nome de um filme.');
    return;
  }

  arrayFilmes.push(filme);
  localStorage.setItem('filmes', JSON.stringify(arrayFilmes));
  criarFilme(filme);
  input.value = '';
};

// Função para atualizar a lista de filmes com base no array de filmes
const atualizarLista = () => {
  ul.innerHTML = '';
  arrayFilmes.forEach((filme) => {
    criarFilme(filme);
  });
};

// Evento de clique do botão "Adicionar"
botaoAdd.addEventListener('click', adicionarFilme);

// Event delegation para tratar eventos de clique no botão "Remover"
ul.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const filmeRemover = event.target.parentNode.id;
    removerFilmeDaLista(filmeRemover);
  }
});

// Carregar filmes do localStorage ao iniciar a página
if (localStorage.getItem('filmes')) {
  arrayFilmes = JSON.parse(localStorage.getItem('filmes'));
  atualizarLista();
}
