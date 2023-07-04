import './App.css';
import { useState } from 'react';

function App() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [modulo, setModulo] = useState('');

  return(
    <div className='App'>
      <h1 style={{color: 'white'}}>Dados do Estudante</h1>
      <input
       type="text"
       placeholder='Nome Completo'
       value={nome}
       onChange={({ target }) => setNome(target.value)}
      />
      <input
       type="number"
       name="idade"
       value={idade}
       onChange={({ target }) => setIdade(target.value)}
      />
      <input
       type="text"
       placeholder='Cidade'
       value={cidade}
       onChange={({ target }) => setCidade(target.value)}
      />
      <fieldset>
        <input
          type="radio"
          name={modulo}
          id=""
          value="Fundamentos"
          onClick={({ target }) => setModulo(target.value)}
          />Fundamentos
        <input
          type="radio"
          name={modulo}
          id=""
          value="Front-end"
          onClick={({ target }) => setModulo(target.value)}/>Front-end
        <input
          type="radio"
          name={modulo}
          id=""
          value="Back-end"
          onClick={({ target }) => setModulo(target.value)}/>Back-end
        <input
          type="radio"
          name={modulo}
          id=""
          value="Ciências da Computação"
          onClick={({ target }) => setModulo(target.value)}/>Ciências da Computação

      </fieldset>
      <button>Enviar</button>
    </div>
  );
}

export default App;