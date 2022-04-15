import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, label, id, name, tag, func, value, className } = this.props;

    return (
      <div className={ className }>
        <label htmlFor={ id }>{label}</label>
        {tag === 'input' ? (
          <input
            type={ type }
            id={ id }
            name={ name }
            onChange={ func }
            value={ value }
            checked={ value }
            data-testid={ `${id}-input` }
          />
        ) : (
          <textarea
            type={ type }
            id={ id }
            name={ name }
            onChange={ func }
            value={ value }
            data-testid={ `${id}-input` }
          />
        )}
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.bool.isRequired,
  ]),
  className: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  className: 'form-group',
};

export default Input;
