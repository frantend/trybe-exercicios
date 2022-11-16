function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// createDaysOfTheWeek();

// Exercício 1: Criar um calendário dinamicamente.

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criarDiasDoMes() {

    let ulDays = document.querySelector('#days');
    
    for(let index = 0; index < decemberDaysList.length; index += 1) {
      let liDay = document.createElement('li');
    
      let day = decemberDaysList[index];

      liDay.innerHTML = day;

      //condicionais para classes day, friday e holiday.

      if(day === 24 || day === 31) {
        ulDays.appendChild(liDay);
        liDay.className = 'day holiday';
      } else if(day === 4 || day === 11 || day === 18) {
        ulDays.appendChild(liDay);
        liDay.className = 'day friday';
      } else if(day === 25) {
        ulDays.appendChild(liDay);
        liDay.className = 'day friday holiday';
      } else {
        ulDays.appendChild(liDay);
        liDay.className = 'day';
      }

    }
}

criarDiasDoMes();


// Exercicio 2 - Implementar uma função que crie dinamicamente um botão com o nome "Feriados".

function criarBotaoFeriados(nome) {
  //resgatar elemento pai
  let containerBotao = document.querySelector('.buttons-container');

  //criar elemento
  let botaoFeriados = document.createElement('button');

  //adicionar atributos para o elemento
  botaoFeriados.id = 'btn-holiday';
  botaoFeriados.innerHTML = nome;

  //adiciona o elemento criado como filho do elemento resgatado
  containerBotao.appendChild(botaoFeriados);
}

criarBotaoFeriados('Feriados');


// Exercício 3 - Implementar uma função que muda a cor de fundo dos dias que possuem a classe "holiday".

function displayHolidays() {
  let pegaBotaoFeriados = document.querySelector('#btn-holiday');
  let pegaDiaFeriados = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let mudarCorDia = 'white';

  pegaBotaoFeriados.addEventListener('click', function() {
    for (let index = 0; index < pegaDiaFeriados.length; index += 1) {
      if (pegaDiaFeriados[index].style.backgroundColor === mudarCorDia) {
        pegaDiaFeriados[index].style.backgroundColor = backgroundColor;
      } else {
        pegaDiaFeriados[index].style.backgroundColor = mudarCorDia;
      }
    }
  });
}

displayHolidays();

// Exercício 4 - Implementar função que crie dinamicamente um botão com o nome "Sexta-feira".

function criarBotaoSextaFeira(texto) {

  let botaoContainer = document.querySelector('.buttons-container');

  let botaoSextaFeira = document.createElement('button');

  botaoSextaFeira.innerHTML = texto;

  botaoSextaFeira.id = 'btn-friday'

  botaoContainer.appendChild(botaoSextaFeira);
}

criarBotaoSextaFeira('Sexta-Feira');

// Exercicio 5 - Implementar uma função que modifica o texto exibido nos dias que são Sexta-feira.

function displayFridays(arraySextas) {

  let pegaBotaoSextaFeira = document.querySelector('#btn-friday');
  // console.log(pegaBotaoSextaFeira)

  let pegaDiaSextaFeira = document.getElementsByClassName('friday');
  // console.log(pegaDiaSextaFeira)

  let valorSextaFeira = pegaDiaSextaFeira.innerText = 'SEXTOU =]';
  // console.log(valorSextaFeira)

  pegaBotaoSextaFeira.addEventListener('click', function() {

    for(let index=0; index<pegaDiaSextaFeira.length; index+=1) {

      if(pegaDiaSextaFeira[index].innerHTML !== valorSextaFeira) {
        pegaDiaSextaFeira[index].innerHTML = valorSextaFeira;

      } else {
        pegaDiaSextaFeira[index].innerHTML = arraySextas[index];
      }
    }

  });
}

const decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);


// Exercicio 6 - Criar duas funções para efeito de zoom, uma para cada ação do mouse.

const dayMouseOver = () => {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.fontWeight = '600';

  });
}

const dayMouseOut = () => {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.fontWeight = '200';
  });
}

dayMouseOver();
dayMouseOut();

// Exercicio 7 - Implementar uma função que adicione uma tarefa personalizada ao calendário;

function addTask(tarefa) {
  const myTasks = document.querySelector('.my-tasks');
  const task = document.createElement('span');
  task.innerHTML = tarefa;
  myTasks.appendChild(task);
}

addTask('Projeto Pixels Art HOJE!!');


//Exercicio 8 - Implementar uma função que adicione uma legenda com cor para a tarefa;

function legendTask(cor) {
  const myTasks = document.querySelector('.my-tasks');
  const divTask = document.createElement('div');
  divTask.className = 'task';
  divTask.style.backgroundColor = cor;

  myTasks.appendChild(divTask);
}

legendTask('blue');


// Exercicio 9 - Implementar uma função que selecione uma tarefa;

const selectedDiv = () => {
  const divTask = document.querySelector('.task');

  divTask.addEventListener('click', () => {
    
    

    if(divTask.className === 'task') {
      divTask.className = 'task selected';
    } else {
      divTask.className = 'task';
    }
  });
}

selectedDiv();

// Continuar... Exercicios 10 + Bonus
