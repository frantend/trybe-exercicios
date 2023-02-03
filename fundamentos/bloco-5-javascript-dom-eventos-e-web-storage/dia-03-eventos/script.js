const createDaysOfTheWeek = () => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

//Parte 1
const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysOfTheMonth() {
  const ul = document.querySelector("#days");

  for (let index = 0; index < decemberDaysList.length; index++) {
    let li = document.createElement("li");
    li.innerHTML = decemberDaysList[index];
    ul.appendChild(li);

    li.className = "day";

    dia = decemberDaysList[index];

    if (dia === 24 || dia === 25 || dia === 31) {
      li.classList.add("holiday");
    }
    if (dia === 4 || dia === 11 || dia === 18 || dia === 25) {
      li.classList.add("friday");
    }
  }
}
createDaysOfTheMonth();

//Parte 2
const createButtonHolidays = (string) => {
  const div = document.querySelector(".buttons-container");
  const botaoFeriados = document.createElement("button");
  botaoFeriados.id = "btn-holiday";
  botaoFeriados.innerText = string;
  div.appendChild(botaoFeriados);
};
createButtonHolidays("Feriados");

//Parte 3
const changeColorHolidays = () => {
  const btnFeriados = document.querySelector("#btn-holiday");
  let holiday = document.querySelectorAll(".holiday");

  btnFeriados.addEventListener("click", () => {
    for (let index = 0; index < holiday.length; index += 1) {
      if (holiday[index].style.backgroundColor === "white") {
        holiday[index].style.backgroundColor = "rgb(238,238,238)";
      } else {
        holiday[index].style.backgroundColor = "white";
      }
    }
  });
};
changeColorHolidays();

//Parte 4
const createButtonFriday = (string) => {
  const div = document.querySelector(".buttons-container");
  const btnFriday = document.createElement("button");
  btnFriday.innerText = string;
  btnFriday.className = "btn-friday";
  div.appendChild(btnFriday);
};
createButtonFriday("Sexta-feira");

//Parte 5
const btnFriday = document.querySelector(".btn-friday");
const friday = document.querySelectorAll(".friday");
let dias = [];

const changeTextFridays = () => {
  if (friday[0].innerHTML !== "Sexta-feira") {
    dias = [];
    for (let index = 0; index < friday.length; index++) {
      dias.push(friday[index].innerHTML);
      friday[index].innerHTML = "Sexta-feira";
    }
  } else {
    for (let index = 0; index < friday.length; index++) {
      friday[index].innerHTML = dias[index];
    }
  }
};
btnFriday.addEventListener("click", changeTextFridays);

//Parte 6
// const diasLi = document.querySelectorAll(".day");

// const increase = (evento) => {
//   evento.target.style.fontSize = "50px";
//   console.log(evento);
// };

// const decrease = (evento) => {
//   evento.target.style.fontSize = "20px";
// };

// for (let index in diasLi) {
//   diasLi[index].addEventListener("mouseover", increase);
//   diasLi[index].addEventListener("mouseout", decrease);
// }

const diasLi = document.querySelectorAll(".day");
const toggleFontSize = (evento) =>
  evento.type === "mouseover"
    ? (evento.target.style.fontSize = "50px")
    : (evento.target.style.fontSize = "20px");

for (let index = 0; index < diasLi.length; index += 1) {
  diasLi[index].addEventListener("mouseover", toggleFontSize);
  diasLi[index].addEventListener("mouseout", toggleFontSize);
}

//Parte 7
function addTask(tarefa) {
  let div = document.querySelector(".my-tasks");
  let span = document.createElement("span");
  span.innerHTML = tarefa;
  div.appendChild(span);
}
addTask("Primeira tarefa.");

//Parte 8
function createColorLegend(color) {
  let divMyTasks = document.querySelector(".my-tasks");
  let divTask = document.createElement("div");
  divTask.className = "task";
  divTask.style.backgroundColor = color;
  divMyTasks.appendChild(divTask);
}
createColorLegend("yellow");

//Parte 9
function selectTask() {
  let divMyTask = document.querySelector(".task");

  divMyTask.addEventListener("click", () => {
    if (divMyTask.className === "task") {
      divMyTask.classList.add("selected");
    } else {
      divMyTask.classList.remove("selected");
    }
  });
}
selectTask();

//Parte 10
function linkTask(event) {
  let dia = event.target;

  if (dia.style.backgroundColor) {
    dia.style.backgroundColor = "";
  } else {
    let divSelectedTask = document.querySelector(".task.selected");
    dia.style.backgroundColor = divSelectedTask.style.backgroundColor;
  }
}

const diasParte10 = document.querySelectorAll(".day");
for (let index = 0; index < diasParte10.length; index += 1) {
  diasParte10[index].addEventListener("click", linkTask);
}

//Bônus
function addCommitment() {
  let ulTaskList = document.querySelector(".task-list");
  let input = document.querySelector("#task-input");
  let li = document.createElement("li");

  let btnAdd = document.querySelector("#btn-add");

  btnAdd.addEventListener("click", () => {
    if (input.value) {
      li.innerHTML = input.value;
      ulTaskList.appendChild(li);
      input.value = "";
    } else {
      alert("Digite um compromisso");
    }
  });

  input.addEventListener("keypress", (event) => {
    if (event.keyCode === 13 && input.value) {
      li.innerHTML = input.value;
      ulTaskList.appendChild(li);
      input.value = "";
    }
  });
}
addCommitment();
