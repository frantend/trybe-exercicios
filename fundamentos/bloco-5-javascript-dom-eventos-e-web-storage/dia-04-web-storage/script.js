const body = document.getElementsByTagName('body')[0];
const titulo = document.querySelector('.titulo');
const subtitulo = document.querySelector('.subtitulo');
const texto = document.querySelector('.texto');

// Mudar cor do funto
const btnBackgroundWhite = document.querySelector('.btn-background-white');
const btnBackgroundBlack = document.querySelector('.btn-background-black');
const btnBackgroundGreen = document.querySelector('.btn-background-green');
const btnBackgroundBlue = document.querySelector('.btn-background-blue');
const btnBackgroundYellow = document.querySelector('.btn-background-yellow');

btnBackgroundWhite.addEventListener('click', () => {
  body.style.backgroundColor = 'white';
});

btnBackgroundBlack.addEventListener('click', () => {
  body.style.backgroundColor = 'black';
});

btnBackgroundGreen.addEventListener('click', () => {
  body.style.backgroundColor = 'green';
});

btnBackgroundBlue.addEventListener('click', () => {
  body.style.backgroundColor = 'blue';
});

btnBackgroundYellow.addEventListener('click', () => {
  body.style.backgroundColor = 'yellow';
});


// Mudar cor do texto
const btnColorBlack = document.querySelector('.btn-color-black');
const btnColorRed = document.querySelector('.btn-color-red');
const btnColorWhite = document.querySelector('.btn-color-white');

btnColorBlack.addEventListener('click', () => {
  titulo.style.color = 'black';
  subtitulo.style.color = 'black';
  texto.style.color = 'black';
});

btnColorRed.addEventListener('click', () => {
  titulo.style.color = 'red';
  subtitulo.style.color = 'red';
  texto.style.color = 'red';
});

btnColorWhite.addEventListener('click', () => {
  titulo.style.color = 'white';
  subtitulo.style.color = 'white';
  texto.style.color = 'white';
});


// Mudar tamanho da fonte

const btnSize8 = document.querySelector('.btn-size-8');
const btnSize10 = document.querySelector('.btn-size-10');
const btnSize12 = document.querySelector('.btn-size-12');
const btnSize14 = document.querySelector('.btn-size-14');
const btnSize20 = document.querySelector('.btn-size-20');

btnSize8.addEventListener('click', () => {
  titulo.style.fontSize = '8px';
  subtitulo.style.fontSize = '8px';
  texto.style.fontSize = '8px';
});

btnSize10.addEventListener('click', () => {
  titulo.style.fontSize = '10px';
  subtitulo.style.fontSize = '10px';
  texto.style.fontSize = '10px';
});

btnSize12.addEventListener('click', () => {
  titulo.style.fontSize = '12px';
  subtitulo.style.fontSize = '12px';
  texto.style.fontSize = '12px';
});

btnSize14.addEventListener('click', () => {
  titulo.style.fontSize = '14px';
  subtitulo.style.fontSize = '14px';
  texto.style.fontSize = '14px';
});
btnSize20.addEventListener('click', () => {
  titulo.style.fontSize = '20px';
  subtitulo.style.fontSize = '20px';
  texto.style.fontSize = '20px';
});

// Mudar espaçamento entre as linhas

const btnLine1 = document.querySelector('.btn-line-1');
const btnLineNormal = document.querySelector('.btn-line-normal');
const btnLine15 = document.querySelector('.btn-line-1-5');
const btnLine2 = document.querySelector('.btn-line-2');
const btnLine3 = document.querySelector('.btn-line-3');

btnLine1.addEventListener('click', () => {
  texto.style.lineHeight = '1';
});

btnLineNormal.addEventListener('click', () => {
  texto.style.lineHeight = 'normal';
});

btnLine15.addEventListener('click', () => {
  texto.style.lineHeight = '1.5';
});

btnLine2.addEventListener('click', () => {
  texto.style.lineHeight = '2';
});

btnLine3.addEventListener('click', () => {
  texto.style.lineHeight = '3';
});

// Mudar tipo da fonte

const btnFontArial = document.querySelector('.btn-font-arial');
const btnFontTimes = document.querySelector('.btn-font-times');

btnFontArial.addEventListener('click', () => {
  titulo.style.fontFamily = 'Arial';
  subtitulo.style.fontFamily = 'Arial';
  texto.style.fontFamily = 'Arial';
});

btnFontTimes.addEventListener('click', () => {
  titulo.style.fontFamily = 'Times';
  subtitulo.style.fontFamily = 'Times';
  texto.style.fontFamily = 'Times';
});

// Salva os estilos

const salvaEstilos = () => {
  const estilos = {
    body: '',
    titulo: '',
    subtitulo: '',
    texto: '',
  };
  
  estilos.body = document.querySelector('.body').style.backgroundColor;
  estilos.titulo = document.querySelector('.titulo').style;
  estilos.subtitulo = document.querySelector('.subtitulo').style;
  estilos.texto = document.querySelector('.texto').style;
  
  localStorage.setItem(JSON.stringify(estilos))
  
};

