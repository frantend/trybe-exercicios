const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addRemoveClassTech() {
  const classTech = "tech";
  firstLi.addEventListener("click", () => {
    firstLi.classList.toggle(classTech);
    secondLi.classList.remove(classTech);
    thirdLi.classList.remove(classTech);
  });

  secondLi.addEventListener("click", () => {
    secondLi.classList.toggle(classTech);
    firstLi.classList.remove(classTech);
    thirdLi.classList.remove(classTech);
  });

  thirdLi.addEventListener("click", () => {
    thirdLi.classList.toggle(classTech);
    secondLi.classList.remove(classTech);
    firstLi.classList.remove(classTech);
  });
}
addRemoveClassTech();

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function changeText() {
  const li = document.querySelectorAll("li");
  // const
  input.addEventListener("keydown", () => {
    for (let index = 0; index < li.length; index += 1) {
      if (li[index].className === "tech") {
        li[index].innerText = input.value;
      }
    }
  });
}
changeText();

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
const myWebPage = () => {
  myWebpage.addEventListener("dblclick", (event) => {
    window.location.replace("https://www.google.com.br");
  });
};
myWebPage();

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
myWebpage.addEventListener("mouseover", (event) => {
  event.target.style.color = "yellow";
});

myWebpage.addEventListener("mouseout", (event) => {
  event.target.style.color = "unset";
});

// Segue abaixo um exemplo do uso de event.target:

const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
};

firstLi.addEventListener("dblclick", resetText);
secondLi.addEventListener("dblclick", resetText);
thirdLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
