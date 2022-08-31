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

function botaoFeriados(nome) {
  const botaoContainer = document.querySelector('.buttons-container');

  const botaoFeriados = document.createElement('button');

  botaoFeriados.id = 'btn-holiday';

  botaoFeriados.innerHTML = nome;

  botaoContainer.appendChild(botaoFeriados);
}

botaoFeriados('Feriados');