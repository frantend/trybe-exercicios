import './style.css';

const imagem = document.getElementById('imagem');
const nome = document.getElementById('nome');
const botao = document.getElementById('botao');

const BASE_URL_TOKEN = 'https://superheroapi.com/api/6156720867705062/';


botao.addEventListener('click', () => {
  const id = Math.floor(Math.random() * 100);
  fetch(`https://superheroapi.com/api.php/6156720867705062/${id}`)
  .then(response => response.json())
  .then(data => {
    imagem.src = `${data.image.url}`
    imagem.alt = `${data.name} id:${data.id}`
    nome.innerHTML = `${data.name}`
  })
});

