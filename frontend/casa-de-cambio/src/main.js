import './style.css';

const botaoPesquisar = document.getElementById('button-search');
const containerRates = document.getElementById('list-result');
const input = document.getElementById('input-moeda');
const h2 = document.querySelector('h2');
const fixed = 2;

const api = (moeda) => fetch(`https://v6.exchangerate-api.com/v6/92fe974636bb88ae7690e5b3/latest/${moeda}`)
  .then((resposta) => resposta.json())
  .then((dados) => {
    return dados.conversion_rates;
  })
  .catch((error) => console.log(`Digite uma moeda: ${error.message}`));

botaoPesquisar.addEventListener('click', () => {
  api(input.value).then((rates) => {
    const arrayConversoes = Object.entries(rates);
    arrayConversoes.forEach((rate) => {
      const rateItemList = document.createElement('li');
      rateItemList.innerHTML = `<img width="14" height="14" src="https://img.icons8.com/windows/32/a7a7a7/money-bill-wave.png" alt="money-bill-wave"/>
        <span>${rate[0]}</span>
        <span>${rate[1].toFixed(fixed)}</span>`;
      containerRates.appendChild(rateItemList);
    });
    h2.innerText = `Valores referentes a 1 ${input.value.toUpperCase()}`;
    input.value = '';
  });
  containerRates.innerHTML = '';
});
