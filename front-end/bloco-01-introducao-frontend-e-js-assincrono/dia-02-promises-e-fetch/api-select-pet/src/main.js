const btnDog = document.querySelector('#dog');
const btnCat = document.querySelector('#cat');
const btnSurprise = document.querySelector('#surprise');
const imagem = document.querySelector('#img');

btnDog.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(resposta => resposta.json())
    .then(dados => {
      imagem.src = dados.message;
    })
});

btnCat.addEventListener('click', () => {
  fetch('https://aws.random.cat/meow')
    .then(resposta => resposta.json())
    .then(dados => {
      imagem.src = dados.file;
    })
});

btnSurprise.addEventListener('click', () => {
  Promise.any([
    fetch('https://dog.ceo/api/breeds/image/random'),
    fetch('https://aws.random.cat/meow'),
    fetch('https://randomfox.ca/floof/')
  ])
    .then(resposta => resposta.json())
    .then(dados => {
      const animalEndPoint = dados.message || dados.file || dados.image;
      imagem.src = animalEndPoint;
    })

});
