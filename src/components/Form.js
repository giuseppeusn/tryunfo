import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <Input
          type="text"
          label="Nome"
          id="name"
          tag="input"
          name="cardName"
          func={ onInputChange }
          value={ cardName }
        />
        <Input
          type="text"
          label="Descrição"
          id="description"
          tag="textarea"
          name="cardDescription"
          func={ onInputChange }
          value={ cardDescription }
        />
        <Input
          type="number"
          label="Atributo 1"
          id="attr1"
          tag="input"
          name="cardAttr1"
          func={ onInputChange }
          value={ cardAttr1 }
        />
        <Input
          type="number"
          label="Atributo 2"
          id="attr2"
          tag="input"
          name="cardAttr2"
          func={ onInputChange }
          value={ cardAttr2 }
        />
        <Input
          type="number"
          label="Atributo 3"
          id="attr3"
          tag="input"
          name="cardAttr3"
          func={ onInputChange }
          value={ cardAttr3 }
        />
        <Input
          type="text"
          label="Imagem"
          id="image"
          tag="input"
          name="cardImage"
          func={ onInputChange }
          value={ cardImage }
        />
        <div>
          <label htmlFor="rare">
            Raridade
            <select
              id="rare"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        </div>
        <Input
          type="checkbox"
          label="Super Trybe Trunfo"
          id="trunfo"
          name="cardTrunfo"
          value={ cardTrunfo }
          func={ onInputChange }
          tag="input"
        />
        {isSaveButtonDisabled ? (
          <button
            type="submit"
            data-testid="save-buttons"
            value={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            disabled
          >
            Salvar
          </button>
        ) : (
          <button
            type="submit"
            data-testid="save-buttons"
            value={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        )}
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
