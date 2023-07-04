import React from 'react';

class About extends React.Component {
  render() {
    const nome = 'Francine';
    const descricao = 'Descrição';
    const habilidades = ['HTML', 'CSS', 'JS'];
    const listItems = habilidades.map((habilidade) => <li>{ habilidade }</li>)
    return (
      <div>
        <h1>
          {nome}
        </h1>
        <p>
          {descricao}
        </p>
        <h2>Minhas Habilidades</h2>
        <ul>{ listItems }</ul>
      </div>
    );
  }
}

export default About;