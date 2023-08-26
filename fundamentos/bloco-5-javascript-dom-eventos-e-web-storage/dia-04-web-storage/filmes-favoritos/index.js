// Exercício proposto por chatgpt
// Exercício 1 - Lista de Filmes Favoritos
// Nível: Iniciante

// Descrição: Crie uma aplicação que permita ao usuário adicionar e remover filmes de uma lista de filmes favoritos utilizando o localStorage para armazenar os dados.

// Recursos:

// Um formulário com um campo para inserir o nome do filme.
// Uma lista para mostrar os filmes favoritos do usuário.
// Botões para adicionar e remover filmes da lista.

//salvar elementos que serão manipulados
const inputTitulo = document.querySelector('#titulo');
const inputImagem = document.querySelector('#capa');
const inputDescricao = document.querySelector('#descricao')
const btnAdd = document.querySelector('button');
const ul = document.querySelector('ul');

let arrayFilmes = JSON.parse(localStorage.getItem('filmes')) || [];

const atualizarPagina = () => {
  arrayFilmes.forEach(({capa, titulo, descricao}) => {
    const li = document.createElement('li');

  const tituloH2 = document.createElement('h2');
  tituloH2.textContent = titulo;

  const capaImagem = document.createElement('img');
  capaImagem.src = capa;
  capaImagem.style.width = '240px'

  const descricaoParagrafo = document.createElement('p')
  descricaoParagrafo.textContent = descricao;

  li.append(capaImagem, tituloH2, descricaoParagrafo, criarBotaoRemover())
  ul.appendChild(li)
  });
}
const criarElemento = () => {
  const li = document.createElement('li');

  const tituloH2 = document.createElement('h2');
  tituloH2.textContent = inputTitulo.value;

  const capaImagem = document.createElement('img');
  capaImagem.src = inputImagem.value;
  capaImagem.style.width = '200px'

  const descricaoParagrafo = document.createElement('p')
  descricaoParagrafo.textContent = inputDescricao.value;

  li.append(capaImagem, tituloH2, descricaoParagrafo, criarBotaoRemover())
  ul.appendChild(li)
  const objetoFilme = {
    capa: inputImagem.value,
    titulo: inputTitulo.value,
    descricao: inputDescricao.value,
  }
  arrayFilmes.push(objetoFilme)
  localStorage.setItem('filmes', JSON.stringify(arrayFilmes))
}

const criarBotaoRemover = () => {
  const btnRemover = document.createElement('button');
  btnRemover.textContent = 'Excluir';

  btnRemover.addEventListener('click', (evento) => {
    const item = evento.target.parentElement;
    ul.removeChild(item);

    // Use o texto do elemento para encontrar o índice correto no array
    const nomeFilme = item.querySelector('h2').textContent;

    // Use a função filter para criar um novo array sem o elemento a ser removido
    arrayFilmes = arrayFilmes.filter(filme => filme.titulo !== nomeFilme);

    // Atualize o localStorage com o arrayFilmes modificado
    localStorage.setItem('filmes', JSON.stringify(arrayFilmes));

  });
  return btnRemover;
}


const adicionarFilme = () => {
  if (inputImagem.value.trim() === '' && inputTitulo.value.trim() === '' && inputDescricao.value.trim() === '') {
    alert('Insira o filme favorito 🍿')
    return;
  }
  criarElemento();
  inputImagem.value = ''
  inputTitulo.value = ''
  inputDescricao.value = ''
}

btnAdd.addEventListener('click', adicionarFilme)

window.onload = atualizarPagina;