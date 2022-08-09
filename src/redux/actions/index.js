export const USER_ACT = 'USER_ACT';
export const CURRENCIES_ACT = 'CURRENCIES_ACT';
export const SAVE_CURR = 'SAVE_CURR';

export const userActFunc = (email) => ({
  type: USER_ACT,
  info: {
    email,
  },
});

export const currenciesActFunc = (currencies) => ({
  type: CURRENCIES_ACT,
  currencies,
});

export const saveCurrActFunc = (currencies) => ({
  type: SAVE_CURR,
  currencies,
});

export const currenciesAsync = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const currencyList = Object.keys(data).filter((currency) => currency !== 'USDT');
  dispatch(currenciesActFunc(currencyList));
};

export const saveCurrAsync = (expenseInfo) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();

  delete data.USDT;
  expenseInfo.exchangeRates = data;
  dispatch(saveCurrActFunc(expenseInfo));
};
