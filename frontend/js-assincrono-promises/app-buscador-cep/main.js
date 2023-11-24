import './style.css'
import Swal from'sweetalert2';

const fetchApi = async (cep) => {
  const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  const dados = await resposta.json()
  return dados;
}

const paragrafo = document.querySelector('#paragrafo');
const botao = document.querySelector('button');
const input = document.querySelector('input');

botao.addEventListener('click', async () => {
  if (!input.value) {
    return Swal.fire('Informe o CEP!');
  }
  if (input.value.length!== 8) {
    return Swal.fire('Cep inválido! Digite um cep com 8 dígitos.');
  }
  const cep = input.value;
  const dados = await fetchApi(cep);
  paragrafo.innerHTML = `${dados.logradouro}, ${dados.bairro}, ${dados.localidade}, ${dados.uf}`;
})
