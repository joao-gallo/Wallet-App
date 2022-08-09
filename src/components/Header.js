import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  totalValue = () => {
    const { expenses } = this.props;
    let totalValue = 0;

    expenses.forEach((expense) => {
      const { currency } = expense;
      const currencyValue = expense.exchangeRates[currency].ask;
      totalValue += expense.value * currencyValue;
    });

    return totalValue.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{ this.totalValue() }</p>
        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }
}
Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
