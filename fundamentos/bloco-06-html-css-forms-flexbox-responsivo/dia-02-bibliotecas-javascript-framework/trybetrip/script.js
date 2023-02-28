function ativarBotao() {
  const btnSubmit = document.getElementById('submit-btn');
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
