import './style.css';
import Swal from 'sweetalert2';

const imagem = document.getElementById('imagem-heroe');
const nome = document.getElementById('nome-heroe');
const botao = document.querySelector('button');
const MAX_HEROES = 1000;

const gerarId = () => Math.floor(Math.random() * MAX_HEROES);

botao.addEventListener('click', (e) => {
  e.preventDefault();
  fetch(`https://superheroapi.com/api.php/6156720867705062/${gerarId()}`)
    .then((resposta) => resposta.json())
    .then((dados) => {
      imagem.src = dados.image.url;
      imagem.alt = `${dados.name}-SuperHeroes`;
      nome.innerHTML = dados.name;
    })
    .catch(() => Swal.fire('Heroe não encontrado, tente novamente!'));
});
