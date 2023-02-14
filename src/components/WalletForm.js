import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency, USER_SUBMIT_DATA } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(fetchCurrency());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  fetchApi = async () => {
    const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    return data;
  };

  handleSubmit = async () => {
    const { id, value, description, method, tag, exchangeRates, currency } = this.state;
    const { dispatch } = this.props;
    this.setState({
      id: id + 1,
    });

    const action = { type: USER_SUBMIT_DATA,
      payload: { id,
        value,
        description,
        method,
        tag,
        exchangeRates,
        currency,
      },
    };
    if (this.fetchApi) {
      action.payload.exchangeRates = await this.fetchApi();
    }
    dispatch((action));

    this.setState({ value: '', description: '' });
  };

  render() {
    const { wallet: { currencies } } = this.props;
    const { value, description, method, tag, currency } = this.state;
    return (
      <div>
        <form className="walletForm">
          valor:
          <input
            onChange={ this.handleChange }
            name="value"
            value={ value }
            data-testid="value-input"
          />
          <br />
          Descriçao da despesa
          <input
            data-testid="description-input"
            onChange={ this.handleChange }
            name="description"
            value={ description }
          />
          <select
            data-testid="currency-input"
            onChange={ this.handleChange }
            name="currency"
            value={ currency }
          >
            {(currencies !== undefined)
              ? currencies
                .map((coin) => <option key={ coin }>{coin}</option>)
              : null}
          </select>
          <select
            data-testid="method-input"
            onChange={ this.handleChange }
            name="method"
            value={ method }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
          <select
            data-testid="tag-input"
            onChange={ this.handleChange }
            name="tag"
            value={ tag }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          <button onClick={ this.handleSubmit } type="button">
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

WalletForm.propTypes = {
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default connect(mapStateToProps)(WalletForm);
