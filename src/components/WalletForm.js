import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { currenciesAsync, saveCurrAsync } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange = ({ target }) => {
    const { id } = target;
    this.setState({
      [id]: target.value,
    });
  }

  saveExpense = () => {
    const { value, description, currency, method, tag } = this.state;
    const { currentId, saveExpense } = this.props;

    const expenseInfo = {
      id: currentId,
      value,
      description,
      currency,
      method,
      tag,
    };
    saveExpense(expenseInfo);
    this.setState({
      value: '',
      description: '',
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            data-testid="value-input"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            data-testid="description-input"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <select
          id="currency"
          data-testid="currency-input"
          value={ currency }
          onChange={ this.handleChange }
        >
          {currencies.map((currencyOpt) => (
            <option key={ currencyOpt }>
              {currencyOpt}
            </option>
          ))}
        </select>
        <select
          id="method"
          data-testid="method-input"
          value={ method }
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select
          id="tag"
          data-testid="tag-input"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        <button type="button" onClick={ this.saveExpense }>Adicionar despesa</button>
      </>
    );
  }
}
WalletForm.propTypes = {
  getCurrencies: PropTypes.func,
  currencies: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  currentId: state.wallet.currentId,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(currenciesAsync()),
  saveExpense: (expenseInfo) => dispatch(saveCurrAsync(expenseInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
