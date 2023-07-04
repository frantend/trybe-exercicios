import React, { Component } from 'react';
import './style.css'
import Textarea from './Textarea';
import Confirmacao from './Confirmacao';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      nome: '',
      email: '',
      texto: '',
      terms: false,
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }
  render() {
    const { nome, email, texto, terms } = this.state;

    return (
      <div>
        <h1>Formulário 1.0 com REACT</h1>
        <p>Praticando Estados e Eventos</p>
        <form>
          <input type="text" name="nome" id="nome" placeholder='nome' value={nome} onChange={this.handleChange}/>
          <br />
          <input type="email" name="email" id="" placeholder='email' value={email} onChange={this.handleChange}/>
          <br />
          <Textarea
           value={ texto }
            onChange={ this.handleChange }
          />
          <br />
          <Confirmacao value={ terms } onChange={ this.handleChange } />
          <br />
          <button>Enviar</button>
        </form>
      </div>
    )
  }
}

export default Form;
