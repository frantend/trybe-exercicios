import React from "react";
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { handleChange, texto } = this.props;
    return (
      <div>
        <textarea
          name="texto"
          id=""
          cols="30"
          rows="10"
          placeholder='digite aqui'
          value={texto}
          onChange={handleChange}
        />
      </div>
    );
  }
}

Textarea.propTypes = {
  handleChange: PropTypes.func.isRequired,
  texto: PropTypes.string.isRequired,
};

export default Textarea;
