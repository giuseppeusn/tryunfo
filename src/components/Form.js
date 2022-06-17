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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="insert-form">
        <h1 className="form-title">Insira uma nova carta</h1>
        <Input
          type="text"
          label="Nome"
          id="name"
          tag="input"
          name="cardName"
          func={ onInputChange }
          value={ cardName }
          limit="25"
        />
        <Input
          type="text"
          label="Descrição"
          id="description"
          tag="textarea"
          name="cardDescription"
          func={ onInputChange }
          value={ cardDescription }
          limit="208"
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
        <div className="rarity-trunfo">
          <div className="rarity">
            <label htmlFor="rare">Raridade</label>
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
          </div>
          {hasTrunfo ? (
            <p className="trunfo-check">Você já tem um Super Trunfo em seu baralho</p>
          ) : (
            <Input
              type="checkbox"
              label="Super Trybe Trunfo"
              id="trunfo"
              name="cardTrunfo"
              value={ cardTrunfo }
              func={ onInputChange }
              tag="input"
              className="trunfo-check"
            />
          )}
        </div>
        {isSaveButtonDisabled ? (
          <button
            type="submit"
            data-testid="save-button"
            value={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            className="save-btn"
            disabled
          >
            Salvar
          </button>
        ) : (
          <button
            type="submit"
            data-testid="save-button"
            value={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            className="save-btn"
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
