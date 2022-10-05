// Coloque aqui suas actions
export const USER_SUBMIT_EMAIL = 'USER_SUBMIT_EMAIL';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';
export const USER_SUBMIT_DATA = 'USER_SUBMIT_DATA';
export const ADD_DATA = 'ADD_DATA';
const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

const receiveCurrency = (currency) => ({
  type: RECEIVE_CURRENCY,
  currency,
});

export function fetchCurrency() {
  return (dispatch) => {
    dispatch(requestCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(receiveCurrency(currencies)));
  };
}
