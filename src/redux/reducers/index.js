// import user from './user';
// import wallet from './wallet';
import { combineReducers } from 'redux';
import wallet from './wallet';
import user from './user';

const rootReducer = combineReducers({
  wallet,
  user,
});

export default rootReducer;
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
