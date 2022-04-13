import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { search, filter, trunfo, check } = this.props;

    return (
      <div>
        {check ? (
          <input
            type="text"
            onChange={ search }
            placeholder="Nome da carta"
            data-testid="name-filter"
            disabled
          />
        ) : (
          <input
            type="text"
            onChange={ search }
            placeholder="Nome da carta"
            data-testid="name-filter"
          />
        )}
        {check ? (
          <label htmlFor="rare">
            Raridade
            <select
              id="rare"
              onChange={ filter }
              data-testid="rare-filter"
              disabled
            >
              <option>todas</option>
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        ) : (
          <label htmlFor="rare">
            Raridade
            <select id="rare" onChange={ filter } data-testid="rare-filter">
              <option>todas</option>
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        )}

        <label htmlFor="trunfo">
          Super Trunfo
          <input
            type="checkbox"
            id="trunfo"
            data-testid="trunfo-filter"
            onChange={ trunfo }
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  search: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  trunfo: PropTypes.func.isRequired,
  check: PropTypes.bool.isRequired,
};

export default Filter;
