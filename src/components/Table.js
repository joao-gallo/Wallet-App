import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../index.css';

import { deleteAct } from '../redux/actions';

class Table extends Component {
  deleteExpense = (id) => {
    const { removeExpense } = this.props;
    removeExpense(id);
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table className="tables" border="1px">
          <thead>
            <tr>
              <th>Método de pagamento</th>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expenses.map((expense) => {
              const exchange = Number(expense.exchangeRates[expense.currency].ask);
              const result = Number(
                expense.exchangeRates[expense.currency].ask * expense.value,
              );
              return (
                <tr key={ expense.id }>
                  <td className="align">{expense.description}</td>
                  <td className="align">{expense.tag}</td>
                  <td className="align">{expense.method}</td>
                  <td className="align">{Number(expense.value).toFixed(2)}</td>
                  <td
                    className="align"
                  >
                    {expense.exchangeRates[expense.currency].name}

                  </td>
                  <td className="align">{exchange.toFixed(2)}</td>
                  <td className="align">{result.toFixed(2)}</td>
                  <td className="align">Real</td>
                  <td className="align">
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => this.deleteExpense(expense.id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            }) }
          </tbody>
        </table>
      </div>
    );
  }
}
Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(deleteAct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
