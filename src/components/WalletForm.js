import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrency());
  }

  render() {
    const { wallet: { currencies }, dispatch } = this.props;
    console.log(dispatch);
    return (
      <div>
        <form>
          valor:
          <input data-testid="value-input" />
          Descriçao da despesa
          <input data-testid="description-input" />
          <select data-testid="currency-input">
            {(currencies !== undefined)
              ? currencies
                .map((coin) => <option key={ coin }>{coin}</option>)
              : null}
          </select>
          <select data-testid="method-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
          <select data-testid="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
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
