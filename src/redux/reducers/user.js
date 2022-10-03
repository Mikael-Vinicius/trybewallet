import { USER_SUBMIT_EMAIL } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária
};
function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_SUBMIT_EMAIL:
    return { email: action.payload.email };
  default:
    return state;
  }
}

export default user;
