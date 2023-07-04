import './App.css';
import React, { useState } from 'react';

function App() {

  const [ nome, setNome ] = useState('');
  const [ idade, setIdade ] = useState('');
  const [ cidade, setCidade ] = useState('');

  return (
    <div className="App">
      <h1 style={{color: 'white'}}>Dados do Estudante</h1>
      <input
        placeholder='nome completo'
        type='text'
        name='name'
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        placeholder='idade'
        type='number'
        name='idade'
        value={idade}
        onChange={({target}) => setIdade(target.value)}
      />
      <input
        placeholder='cidade'
        type='text'
        name='cidade'
        value={cidade}
        onChange={({target}) => setCidade(target.value)}
      />
    </div>
  );
}

export default App;
