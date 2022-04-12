import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { search, filter } = this.props;

    return (
      <div>
        <input
          type="text"
          onChange={ search }
          placeholder="Nome da carta"
          data-testid="name-filter"
        />
        <label htmlFor="rare">
          Raridade
          <select id="rare" onChange={ filter } data-testid="rare-filter">
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  search: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};

export default Filter;
