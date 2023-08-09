const body = document.getElementsByTagName('body')[0];
const titulo = document.querySelector('.titulo');
const subtitulo = document.querySelector('.subtitulo');
const texto = document.querySelector('.texto');


// Mudar cor do funto e guardar no localStorage
const btnBackgroundWhite = document.querySelector('.btn-background-white');
const btnBackgroundBlack = document.querySelector('.btn-background-black');
const btnBackgroundGreen = document.querySelector('.btn-background-green');
const btnBackgroundBlue = document.querySelector('.btn-background-blue');
const btnBackgroundYellow = document.querySelector('.btn-background-yellow');

btnBackgroundWhite.addEventListener('click', () => {
  body.style.backgroundColor = 'white';
  localStorage.setItem('background-color', body.style.backgroundColor = 'white');
});

btnBackgroundBlack.addEventListener('click', () => {
  body.style.backgroundColor = 'black';
  localStorage.setItem('background-color', body.style.backgroundColor = 'black');
});

btnBackgroundGreen.addEventListener('click', () => {
  body.style.backgroundColor = 'green';
  localStorage.setItem('background-color', body.style.backgroundColor = 'green');
});

btnBackgroundBlue.addEventListener('click', () => {
  body.style.backgroundColor = 'blue';
  localStorage.setItem('background-color', body.style.backgroundColor = 'blue');
});

btnBackgroundYellow.addEventListener('click', () => {
  body.style.backgroundColor = 'yellow';
  localStorage.setItem('background-color', body.style.backgroundColor = 'yellow');
});


// Mudar cor do texto e guardar no localStorage
const btnColorBlack = document.querySelector('.btn-color-black');
const btnColorRed = document.querySelector('.btn-color-red');
const btnColorWhite = document.querySelector('.btn-color-white');

btnColorBlack.addEventListener('click', () => {
  titulo.style.color = 'black';
  subtitulo.style.color = 'black';
  texto.style.color = 'black';
  localStorage.setItem('color', 
    titulo.style.color = 'black',
    subtitulo.style.color = 'black',
    texto.style.color = 'black'
    )
});

btnColorRed.addEventListener('click', () => {
  titulo.style.color = 'red';
  subtitulo.style.color = 'red';
  texto.style.color = 'red';
  localStorage.setItem('color', 
    titulo.style.color = 'red',
    subtitulo.style.color = 'red',
    texto.style.color = 'red'
    )
});

btnColorWhite.addEventListener('click', () => {
  titulo.style.color = 'white';
  subtitulo.style.color = 'white';
  texto.style.color = 'white';
  localStorage.setItem('color', 
    titulo.style.color = 'white',
    subtitulo.style.color = 'white',
    texto.style.color = 'white'
    )
});


// Mudar tamanho da fonte e guardar no localStorage
const btnSize8 = document.querySelector('.btn-size-8');
const btnSize10 = document.querySelector('.btn-size-10');
const btnSize12 = document.querySelector('.btn-size-12');
const btnSize14 = document.querySelector('.btn-size-14');
const btnSize20 = document.querySelector('.btn-size-20');

btnSize8.addEventListener('click', () => {
  titulo.style.fontSize = '8px';
  subtitulo.style.fontSize = '8px';
  texto.style.fontSize = '8px';
  localStorage.setItem('tamanho-fonte', titulo.style.fontSize = '8px',
  subtitulo.style.fontSize = '8px',
  texto.style.fontSize = '8px',);
});

btnSize10.addEventListener('click', () => {
  titulo.style.fontSize = '10px';
  subtitulo.style.fontSize = '10px';
  texto.style.fontSize = '10px';
  localStorage.setItem('tamanho-fonte', titulo.style.fontSize = '10px',
  subtitulo.style.fontSize = '10px',
  texto.style.fontSize = '10px',);
});

btnSize12.addEventListener('click', () => {
  titulo.style.fontSize = '12px';
  subtitulo.style.fontSize = '12px';
  texto.style.fontSize = '12px';
  localStorage.setItem('tamanho-fonte', titulo.style.fontSize = '12px',
  subtitulo.style.fontSize = '12px',
  texto.style.fontSize = '12px',);
});

btnSize14.addEventListener('click', () => {
  titulo.style.fontSize = '14px';
  subtitulo.style.fontSize = '14px';
  texto.style.fontSize = '14px';
  localStorage.setItem('tamanho-fonte', titulo.style.fontSize = '14px',
  subtitulo.style.fontSize = '14px',
  texto.style.fontSize = '14px',);
});
btnSize20.addEventListener('click', () => {
  titulo.style.fontSize = '20px';
  subtitulo.style.fontSize = '20px';
  texto.style.fontSize = '20px';
  localStorage.setItem('tamanho-fonte', titulo.style.fontSize = '20px',
  subtitulo.style.fontSize = '20px',
  texto.style.fontSize = '20px',);
});


// Mudar espaçamento entre as linhas e guardar no localStorage
const btnLine1 = document.querySelector('.btn-line-1');
const btnLineNormal = document.querySelector('.btn-line-normal');
const btnLine15 = document.querySelector('.btn-line-1-5');
const btnLine2 = document.querySelector('.btn-line-2');
const btnLine3 = document.querySelector('.btn-line-3');

btnLine1.addEventListener('click', () => {
  texto.style.lineHeight = '1';
  localStorage.setItem('altura-linha', texto.style.lineHeight = '1');
});

btnLineNormal.addEventListener('click', () => {
  texto.style.lineHeight = 'normal';
  localStorage.setItem('altura-linha', texto.style.lineHeight = 'normal');
});

btnLine15.addEventListener('click', () => {
  texto.style.lineHeight = '1.5';
  localStorage.setItem('altura-linha', texto.style.lineHeight = '1.5');
});

btnLine2.addEventListener('click', () => {
  texto.style.lineHeight = '2';
  localStorage.setItem('altura-linha', texto.style.lineHeight = '2');
});

btnLine3.addEventListener('click', () => {
  texto.style.lineHeight = '3';
  localStorage.setItem('altura-linha', texto.style.lineHeight = '2');
});


// Mudar tipo da fonte e guardar no localStorage
const btnFontArial = document.querySelector('.btn-font-arial');
const btnFontTimes = document.querySelector('.btn-font-times');

btnFontArial.addEventListener('click', () => {
  titulo.style.fontFamily = 'Arial';
  subtitulo.style.fontFamily = 'Arial';
  texto.style.fontFamily = 'Arial';
  localStorage.setItem('fonte-family', titulo.style.fontFamily = 'Arial',
  subtitulo.style.fontFamily = 'Arial',
  texto.style.fontFamily = 'Arial');
});

btnFontTimes.addEventListener('click', () => {
  titulo.style.fontFamily = 'Times';
  subtitulo.style.fontFamily = 'Times';
  texto.style.fontFamily = 'Times';
  localStorage.setItem('fonte-family', titulo.style.fontFamily = 'Times',
  subtitulo.style.fontFamily = 'Times',
  texto.style.fontFamily = 'Times');
});


// Recupera estilos
window.onload = function() {
  let salvaBackground = localStorage.getItem('background-color');
  body.style.backgroundColor = salvaBackground;

  let color = localStorage.getItem('color');
  titulo.style.color = color;
  subtitulo.style.color = color;
  texto.style.color = color;

  let tamanhoFonte = localStorage.getItem('tamanho-fonte');
  titulo.style.fontSize = tamanhoFonte;
  subtitulo.style.fontSize = tamanhoFonte;
  texto.style.fontSize = tamanhoFonte;

  let alturaLinha = localStorage.getItem('altura-linha');
  texto.style.lineHeight = alturaLinha;

  let fonteFamily = localStorage.getItem('fonte-family');
  titulo.style.fontFamily = fonteFamily;
  subtitulo.style.fontFamily = fonteFamily;
  texto.style.fontFamily = fonteFamily;

}
