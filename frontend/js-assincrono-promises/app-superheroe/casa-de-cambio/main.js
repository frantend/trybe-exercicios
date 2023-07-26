import './style.css';
import Swal from 'sweetalert2';

const h2 = document.querySelector('#h2');
const input = document.querySelector('#input')
const botao = document.querySelector('#botao');
const main = document.querySelector('#main');
const lista = document.createElement('ul');

const URL_BASE = `https://api.exchangerate.host/latest?base=`;

botao.addEventListener('click', (event) => {
  event.preventDefault();
  const moeda = input.value;
  lista.innerHTML = ''

  fetch(`${URL_BASE}${moeda}`)
   .then((response) => response.json())
   .then((data) => {
      const {rates} = data;
      Object.entries(rates).forEach(([chave, valor]) => {
        if (input.value.length > 0) {
          
          h2.innerText = `Valores referentes a 1 ${moeda}`.toUpperCase();
          const item = document.createElement('li');
          item.innerText = `💱 ${chave}  ${valor.toFixed(3)}`;
          lista.appendChild(item);
        }
      })
    })
    main.appendChild(lista)
  .catch((error) => {
    Swal.fire({
    icon: 'error',
    title: 'Ocorreu um erro',
    text: error.message})
  });
});