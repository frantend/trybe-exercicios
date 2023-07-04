import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    numeroDeCliques: 0,
    numeroDeCliques2: 0,
    numeroDeCliques3: 0,
  };

  handleChange1 = () => {
    const { numeroDeCliques } = this.state;

    this.setState((estadoAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }), () => {
      console.log(`Botão 1 ${ this.changeColorButton(numeroDeCliques) }`);
    });
  };

  handleChange2 = () => {
    const { numeroDeCliques2 } = this.state;

    this.setState((estadoAnterior) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2+ 1,
    }), () => {
      console.log(`Botão 2 ${ this.changeColorButton(numeroDeCliques2) }`);
    });
  };

  handleChange3 = () => {
    const { numeroDeCliques3 } = this.state;

    this.setState((estadoAnterior) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3+ 1,
    }), () => {
      console.log(`Botão 3 ${ this.changeColorButton(numeroDeCliques3) }`);
    });
  };

  changeColorButton = (numero) => {
    return numero % 2 === 0 ? 'green' : 'white';
  };
  
  render() {
    const { numeroDeCliques, numeroDeCliques2, numeroDeCliques3 } = this.state;

    return (
      <div>
        <button
          className='btn btn-outline-primary'
          onClick={ this.handleChange1 }
          style={ {backgroundColor: this.changeColorButton(numeroDeCliques)} }
          >{ `Cliques botão 1: ${numeroDeCliques}` }</button>

        <button style={{backgroundColor: this.changeColorButton(numeroDeCliques2)}} className='btn btn-outline-success' onClick={ this.handleChange2 }>{ numeroDeCliques2 }</button>

        <button className='btn btn-outline-danger' onClick={ this.handleChange3 }>{ numeroDeCliques3 }</button>
      </div>
    )
  }
}

export default App;
