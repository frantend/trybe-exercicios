// Exercício 2 - Lista de Personagens de Animes:

// Nível: Intermediário

// Descrição: Crie uma aplicação onde o usuário pode adicionar e visualizar personagens de animes utilizando o localStorage para armazenamento.

// Recursos:

// Um formulário com campos para inserir o nome do personagem, nome do anime e uma descrição breve.
// Uma lista para mostrar os personagens adicionados.
// Botões para adicionar e remover personagens.

// Passo a passo:

// Crie o HTML com um campo de texto para inserir o nome do personagem e um botão para adicionar à lista.
// Use o JavaScript para manipular o localStorage e armazenar os personagens de animes adicionados.
// Implemente uma função para adicionar personagens à lista e outra função para carregar os personagens do localStorage ao carregar a página.
// Lembre-se de como usar JSON.stringify() para converter objetos em strings antes de armazená-los no localStorage e JSON.parse() para converter de volta em objetos ao recuperá-los.

const inputPersonagem = document.querySelector('#nome-personagem');
const inputAnime = document.querySelector('#nome-anime');
const descricaoTextArea = document.querySelector('#descricao');
const botao = document.querySelector('button');
const ul = document.querySelector('ul');
const personagens = []

// console.log();

const criarPersonagem = () => {
  const li = document.createElement('li');
  const nomePersonagem = document.createElement('h2');
  const nomeAnime = document.createElement('h3');
  const descricao = document.createElement('p');
  const btnRemover = document.createElement('button')

  nomePersonagem.innerText = `Personagem: ${inputPersonagem.value}`;
  nomeAnime.innerText = `Anime: ${inputAnime.value}`;
  descricao.innerText = `Descrição: ${descricaoTextArea.value}`
  btnRemover.innerText = 'x'

  li.append(nomePersonagem, nomeAnime, descricao, btnRemover)

  ul.appendChild(li)

  const objPersonagem = {
    nome: inputPersonagem.value,
    anime: inputAnime.value,
    descricao: descricaoTextArea.value
  }
  personagens.push(objPersonagem)


  btnRemover.addEventListener('click', (e) => {
    const item = e.target.parentNode;
    ul.removeChild(item)
  });

}

botao.addEventListener('click', () => {
  criarPersonagem();
  localStorage.setItem('personagem', JSON.stringify(personagens))
});