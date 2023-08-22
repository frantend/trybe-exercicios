const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

const arrayTarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

const atualizaPagina = () => {
  
  arrayTarefas.forEach(element => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = element

    li.appendChild(p);

    li.appendChild(addDeleteBtn());
    ul.appendChild(li);
    });
    empty.style.display = 'none';
}

const criarElementos = () => {
  const text = input.value;

  if (!text) {
    alert('Digite uma tarefa');
    return;
  }

  const li = document.createElement('li');
  const p = document.createElement('p');
  p.textContent = text

  li.appendChild(p);
  li.appendChild(addDeleteBtn());
  ul.appendChild(li);

  arrayTarefas.push(input.value)
  addLocalStorage();
  input.value = '';
}

const addLocalStorage = () => {
  localStorage.setItem('tarefas', JSON.stringify(arrayTarefas));
}

addBtn.addEventListener('click', (evento) => {
  evento.preventDefault();
  criarElementos();
});

const addDeleteBtn = () => {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.className = 'btn-delete';

  deleteBtn.addEventListener('click', (evento) => {
    const item = evento.target.parentElement;
    ul.removeChild(item);
    //identifica a posição do elemento a ser removido do arrayTarefas
    let index = arrayTarefas.indexOf(evento.target.parentElement.querySelector('p').textContent);
    //remove o elemento
    arrayTarefas.splice(index, 1);
    //atualiza localStorage com o arrayTarefas modificado após a remoção do index
    localStorage.setItem('tarefas', JSON.stringify(arrayTarefas));

    const items = document.querySelectorAll('li');
    if (items.length === 0) {
      empty.style.display = 'block';

    }
  });
  return deleteBtn;
}

window.onload = () => {
  atualizaPagina();
}