import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { search, filter, trunfo, check } = this.props;

    return (
      <div className="filter">
        {check ? (
          <input
            type="text"
            onChange={ search }
            placeholder="Nome da carta"
            data-testid="name-filter"
            className="search-filter"
            disabled
          />
        ) : (
          <input
            type="text"
            onChange={ search }
            placeholder="Nome da carta"
            data-testid="name-filter"
            className="search-filter"
          />
        )}
        <div className="rarity-trunfo">
          <div className="rarity">
            <label htmlFor="rare">
              Raridade
            </label>
            {check ? (
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
            ) : (
              <select id="rare-filter" onChange={ filter } data-testid="rare-filter">
                <option>todas</option>
                <option>normal</option>
                <option>raro</option>
                <option>muito raro</option>
              </select>
            )}
          </div>
          <div className="trunfo-check">
            <label htmlFor="trunfo-check">
              Super Trunfo
            </label>
            <input
              type="checkbox"
              id="trunfo-check"
              data-testid="trunfo-filter"
              onChange={ trunfo }
            />
          </div>
        </div>
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
