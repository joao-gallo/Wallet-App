import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { currenciesAsync } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { curr } = this.props;
    curr();
  }

  render() {
    const { currencies } = this.props;

    return (
      <fieldset>
        <input
          type="number"
          data-testid="value-input"
          placeholder="Preço"
        />
        <input
          type="text"
          data-testid="description-input"
          placeholder="Descrição"
        />
        <select id="currency" data-testid="currency-input">
          {currencies.map((currency) => (
            <option key={ currency }>
              {currency}
            </option>
          ))}
        </select>
        <select data-testid="method-input">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select data-testid="tag-input">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </fieldset>
    );
  }
}

WalletForm.propTypes = {
  curr: PropTypes.func,
  currencies: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  curr: () => dispatch(currenciesAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
