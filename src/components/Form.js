import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import Input from './Input';

class Form extends Component {
  render() {
    return (
      <form>
        <Input type="text" label="Nome" id="name" tag="input" />
        <Input type="text" label="Descrição" id="description" tag="textarea" />
        <Input type="number" label="Atributo 1" id="attr1" tag="input" />
        <Input type="number" label="Atributo 2" id="attr2" tag="input" />
        <Input type="number" label="Atributo 3" id="attr3" tag="input" />
        <Input type="text" label="Imagem" id="image" tag="input" />
        <div>
          <label htmlFor="rare">
            Raridade
            <select data-testid="rare-input" id="rare">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        </div>
        <Input type="checkbox" label="Super Trybe Trunfo" id="trunfo" tag="input" />
        <button type="submit" data-testid="save-buttons">Salvar</button>
      </form>
    );
  }
}

export default Form;
