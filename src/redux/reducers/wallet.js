// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCY, REQUEST_CURRENCY, USER_SUBMIT_DATA } from '../actions/index';

const value = 'USDT';
const INITIAL_STATE = {
  wallet: {
    currencies: [], // array de string
    expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
    editor: false, // valor booleano que indica de uma despesa está sendo editada
    idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  },
};
function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCY:
    return { ...state };
  case RECEIVE_CURRENCY:
    return {
      ...state.wallet,
      currencies: Object.keys(action.currency).filter(((item) => item !== value)),
    };
  case USER_SUBMIT_DATA:
    return { ...state, expenses: [...state.expenses, action.payload] };

  default:
    return state;
  }
}

export default wallet;
