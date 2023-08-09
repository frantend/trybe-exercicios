const botao = document.querySelector('button');
let p = document.getElementById('paragrafo-contador')

if (localStorage.getItem('contador')) {
  const contadorSalvo = localStorage.getItem('contador')
  p.innerText = contadorSalvo;
}

let contador = parseInt(p.innerText);

botao.addEventListener('click', () => {
  contador += 1
  p.innerText = contador;
  localStorage.setItem('contador', contador)
});
