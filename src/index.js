import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './pages/Login';
import store from './redux/store';
import Wallet from './pages/Wallet';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <BrowserRouter>
      <Provider store={ store }>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
        <App />
      </Provider>
    </BrowserRouter>,
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
