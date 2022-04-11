import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, label, id, tag } = this.props;

    return (
      <div className="x" data-testid={ `${id}-input` }>
        <label htmlFor={ id }>{label}</label>
        {
          tag === 'input'
            ? <input type={ type } id={ id } />
            : <textarea type={ type } id={ id } />
        }
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Input;
