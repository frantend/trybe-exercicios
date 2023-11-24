// Exercício 2 - Anotações Simples
// Crie uma página HTML com um campo de texto e um botão "Salvar". Quando o botão "Salvar" for clicado, armazene o conteúdo do campo de texto no localStorage. Na próxima vez que a página for carregada, exiba o conteúdo salvo no campo de texto.

const inputAnotacao = document.querySelector('#anotacao');
const botaoSalvar = document.querySelector('#botaoSalvar');

// if (localStorage.getItem('anotacao')) {
//   const getAnotacao = localStorage.getItem('anotacao')
//   input.value = getAnotacao;
// }

// botao.addEventListener('click', () => {
//   localStorage.setItem('anotacao', input.value)

//   input.value = ''
// });


//recomendação do chatgpt
// Ao carregar a página, exiba a anotação salva no campo de texto
window.addEventListener('load', () => {
  const anotacaoSalva = localStorage.getItem('anotacao');
  if (anotacaoSalva) {
    inputAnotacao.value = anotacaoSalva;
  }
});

botaoSalvar.addEventListener('click', () => {
  const anotacao = inputAnotacao.value.trim();

  if (anotacao !== '') {
    localStorage.setItem('anotacao', anotacao);
    inputAnotacao.value = '';
  }
});