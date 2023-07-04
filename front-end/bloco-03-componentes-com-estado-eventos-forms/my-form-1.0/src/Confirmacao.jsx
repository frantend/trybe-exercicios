import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Confirmacao extends Component {
  render() {
    const { handleChange, terms } = this.props;
    return (
      <div>
        <label htmlFor="checkbox">
            <input
              type="checkbox"
              name="terms"
              id="checkbox"
              value={terms}
              onChange={handleChange}
            />
            Aceite os termos para enviar os dados.
          </label>
      </div>
    )
  }
}

Confirmacao.propTypes = {
  terms: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};
