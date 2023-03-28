import './style.css';
import Swal from 'sweetalert2';

const input = document.querySelector('input');
const btn = document.querySelector('button');
const preEl = document.querySelector('pre');

btn.addEventListener('click', async () => {
  const cep = input.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();

    if (data.erro) throw new Error('Erro de cep inválido');

    preEl.innerHTML = `${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}`;
    return data;
  } catch (error) {
    Swal.fire('Ops', error.message, 'error');
  } finally {
    input.value = '';
  }
});
