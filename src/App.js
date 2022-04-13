import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './components/Card.css';
import Filter from './components/Filter';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      saveCards: [],
      search: [],
      check: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, type, value, checked } = target;
    const valueState = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valueState,
    }, () => {
      this.verifyButton();
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
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
      saveCards,
    } = this.state;

    const newCard = {
      saveCardName: cardName,
      saveCardDescription: cardDescription,
      saveCardAttr1: cardAttr1,
      saveCardAttr2: cardAttr2,
      saveCardAttr3: cardAttr3,
      saveCardImage: cardImage,
      saveCardRare: cardRare,
      saveCardTrunfo: cardTrunfo,
    };

    saveCards.push(newCard);

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: hasTrunfo === false ? cardTrunfo : true,
      isSaveButtonDisabled: true,
      saveCards,
      search: saveCards,
    });
  }

  setSearch(search) {
    this.setState({
      search,
    });
  }

  removeCard = ({ target }) => {
    const { saveCards } = this.state;
    const cardTrunfo = saveCards.find((item) => (
      item.saveCardName === target.id
    )).saveCardTrunfo;
    const newSaveCards = saveCards.filter((item) => item.saveCardName !== target.id);

    this.setState({
      saveCards: newSaveCards,
      hasTrunfo: !cardTrunfo,
      search: newSaveCards,
    });
  }

  searchCard = ({ target }) => {
    const { saveCards } = this.state;
    const search = target.value.length > 0
      ? saveCards.filter((item) => item.saveCardName.includes(target.value)) : saveCards;

    this.setSearch(search);
  }

  filterRare = ({ target }) => {
    const { saveCards } = this.state;
    const search = target.value !== 'todas'
      ? saveCards.filter((item) => item.saveCardRare === target.value) : saveCards;

    this.setSearch(search);
  }

  checkTrunfo = ({ target }) => {
    const { saveCards } = this.state;
    const search = target.checked === true
      ? saveCards.filter((item) => item.saveCardTrunfo === true) : saveCards;

    this.setState({
      search,
      check: target.checked,
    });
  }

  verifyButton() {
    const { cardName, cardDescription, cardImage, cardRare, cardAttr1, cardAttr2,
      cardAttr3 } = this.state;

    const max = 90;
    const totalMax = 210;

    const error = [
      cardName.length > 0,
      cardDescription.length > 0,
      cardImage.length > 0,
      cardRare.length > 0,
      Number(cardAttr1) >= 0,
      Number(cardAttr1) <= max,
      Number(cardAttr2) >= 0,
      Number(cardAttr2) <= max,
      Number(cardAttr3) >= 0,
      Number(cardAttr3) <= max,
      (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr2)) <= totalMax,
    ];

    const disabled = error.every((item) => item === true);

    if (disabled) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

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
      saveCards,
      search,
      check,
    } = this.state;

    return (
      <div className="container">
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isList={ false }
        />
        <div className="cards-display">
          {saveCards.length > 0
            && search.map((item) => {
              const {
                saveCardName,
                saveCardDescription,
                saveCardAttr1,
                saveCardAttr2,
                saveCardAttr3,
                saveCardImage,
                saveCardRare,
                saveCardTrunfo,
              } = item;
              return (
                <Card
                  key={ saveCardName }
                  cardName={ saveCardName }
                  cardDescription={ saveCardDescription }
                  cardAttr1={ saveCardAttr1 }
                  cardAttr2={ saveCardAttr2 }
                  cardAttr3={ saveCardAttr3 }
                  cardImage={ saveCardImage }
                  cardRare={ saveCardRare }
                  cardTrunfo={ saveCardTrunfo }
                  removeCard={ this.removeCard }
                />
              );
            })}
        </div>
        <Filter
          search={ this.searchCard }
          filter={ this.filterRare }
          trunfo={ this.checkTrunfo }
          check={ check }
        />
      </div>
    );
  }
}

export default App;
