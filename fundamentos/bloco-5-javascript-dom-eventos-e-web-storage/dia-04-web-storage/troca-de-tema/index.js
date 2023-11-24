const body = document.querySelector('body');
const botao = document.querySelector('button');

const THEME_WHITE = 'white';
const THEME_BLACK = 'black';

if (localStorage.getItem('tema')) {
  const tema = localStorage.getItem('tema')
  body.className = tema
}

botao.addEventListener('click', () => {
  
  if (body.className === THEME_WHITE) {
    body.className = THEME_BLACK
    return localStorage.setItem('tema', (body.className))
  }

  body.className = THEME_WHITE
  return localStorage.setItem('tema', body.className)
});
