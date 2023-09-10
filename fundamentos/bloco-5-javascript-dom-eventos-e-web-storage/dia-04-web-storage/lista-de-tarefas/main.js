const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const span = document.querySelector("span");

const arrayTarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
const data = document.querySelector("p");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dataFormatada = new Date().toLocaleDateString("pt-BR", options);
data.innerText = dataFormatada;

const atualizaPagina = () => {
  arrayTarefas.forEach((element) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = element;

    // Adicione um ícone de edição (por exemplo, um lápis)
    const editIcon = document.createElement("span");
    editIcon.innerHTML = "&#9998;"; // Você pode usar um ícone SVG aqui
    editIcon.className = "edit-icon";
    editIcon.addEventListener("click", () => {
      p.contentEditable = true; // Torna o texto da tarefa editável
      p.focus(); // Coloca o foco no texto para edição
      editIcon.innerHTML = "✓";
    });

    p.addEventListener("blur", () => {
      editIcon.innerHTML = "&#9998;";
      const editedTask = p.textContent.trim();
      if (editedTask) {
        const index = arrayTarefas.indexOf(element);
        if (index !== -1) {
          arrayTarefas[index] = editedTask;
          localStorage.setItem("tarefas", JSON.stringify(arrayTarefas));
        }
      }
    });

    li.appendChild(p);
    li.appendChild(editIcon);

    li.appendChild(addDeleteBtn());
    ul.appendChild(li);
    document.querySelector("input").focus();
  });

  if (ul.children.length > 1) {
    empty.style.display = "none";
  }
};

const criarElementos = () => {
  empty.style.display = "none";
  const text = input.value;

  if (!text) {
    alert("Digite uma tarefa");
    return;
  }

  const li = document.createElement("li");
  const p = document.createElement("p");
  p.textContent = text;

  // Adiciona um ícone de edição
  const editIcon = document.createElement("span");
  editIcon.innerHTML = "&#9998;"; // Você pode usar um ícone SVG aqui
  editIcon.className = "edit-icon";
  editIcon.addEventListener("click", (event) => {
    p.contentEditable = true; // Torna o texto da tarefa editável
    p.focus(); // Coloca o foco no texto para edição
  });

  li.appendChild(p);
  li.appendChild(editIcon);
  li.appendChild(addDeleteBtn());
  ul.appendChild(li);

  arrayTarefas.push(input.value);
  addLocalStorage();
  input.value = "";
};

const addLocalStorage = () => {
  localStorage.setItem("tarefas", JSON.stringify(arrayTarefas));
};

addBtn.addEventListener("click", (evento) => {
  evento.preventDefault();
  criarElementos();
  document.querySelector("input").focus();
});

const addDeleteBtn = () => {
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "x";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (evento) => {
    const item = evento.target.parentElement;
    ul.removeChild(item);
    //identifica a posição do elemento a ser removido do arrayTarefas
    let index = arrayTarefas.indexOf(
      evento.target.parentElement.querySelector("p").textContent
    );
    //remove o elemento
    arrayTarefas.splice(index, 1);
    //atualiza localStorage com o arrayTarefas modificado após a remoção do index
    localStorage.setItem("tarefas", JSON.stringify(arrayTarefas));

    const items = document.querySelectorAll("li");
    if (items.length === 0) {
      empty.style.display = "block";
    }
  });
  return deleteBtn;
};

window.onload = () => {
  atualizaPagina();
};
