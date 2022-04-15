import React, { Component } from 'react';
import PropTypes from 'prop-types';
import superTrunfo from '../images/super_trunfo.png';

class Card extends Component {
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
      isList,
      removeCard,
    } = this.props;

    return (
      <div className="card-container">
        <div className="card-wrapper">
          <div className="card">
            <p data-testid="name-card" className="card-title">{cardName}</p>
            <div className="image-wrapper">
              <img
                src={ cardImage }
                alt={ cardName }
                data-testid="image-card"
                className="image-card"
              />
              {cardTrunfo && (
                <div data-testid="trunfo-card" className="super-trunfo">
                  <img src={ superTrunfo } alt="Super Trunfo" />
                  <p>Super Trunfo</p>
                </div>
              )}
              <p
                data-testid="description-card"
                className="desc-card"
              >
                {cardDescription}
              </p>
            </div>
            <div className="attributes">
              <p data-testid="attr1-card">{cardAttr1}</p>
              <p data-testid="attr2-card">{cardAttr2}</p>
              <p data-testid="attr3-card">{cardAttr3}</p>
              <p data-testid="rare-card">{cardRare}</p>
            </div>
          </div>
        </div>
        {isList && (
          <button
            type="button"
            data-testid="delete-button"
            onClick={ removeCard }
            id={ cardName }
          >
            X
          </button>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isList: PropTypes.bool,
  removeCard: PropTypes.func,
};

Card.defaultProps = {
  isList: true,
  removeCard: () => {},
};

export default Card;
