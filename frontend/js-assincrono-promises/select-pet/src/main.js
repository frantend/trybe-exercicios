const botaoDog = document.getElementById('botao-dog');
const botaoCat = document.getElementById('botao-cat');
const botaoFox = document.getElementById('botao-fox');
const botaoSurprise = document.getElementById('botao-surprise');
const imagem = document.querySelector('img');

botaoDog.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(resposta => resposta.json())
  .then(dados => {
    imagem.src = dados.message;
  });
});

botaoCat.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('https://api.thecatapi.com/v1/images/search')
  .then(resposta => resposta.json())
  .then(([dados]) => {
    imagem.src = dados.url;
  });
});

botaoFox.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('https://randomfox.ca/floof/')
  .then(resposta => resposta.json())
  .then((dados) => {
    imagem.src = dados.image;
  });
});

botaoSurprise.addEventListener('click', (e) => {
  const apiDog = 'https://dog.ceo/api/breeds/image/random';
  const apiCat = 'https://api.thecatapi.com/v1/images/search';
  const apiFox = 'https://randomfox.ca/floof/';
  Promise.any([fetch(apiCat), fetch(apiDog), fetch(apiFox)])
    .then(resposta => resposta.json())
    .then(dados => {
      imagem.src = dados.file || dados.message || dados.image;
      
    });
});