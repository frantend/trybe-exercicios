function ativarBotao() {
  const btnSubmit = document.getElementById('submit-btn');
  btnSubmit.disabled = true;

  const agreement = document.getElementById('agreement');
  
  agreement.addEventListener('click', () => {
    if(agreement.checked) {
      btnSubmit.disabled = false;
    } else {
      btnSubmit.disabled = true;
    }
  });

}
ativarBotao();