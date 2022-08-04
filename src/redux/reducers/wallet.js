// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES_ACT } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES_ACT:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default walletReducer;
