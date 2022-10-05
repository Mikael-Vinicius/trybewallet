import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user, wallet: { expenses } } = this.props;
    if (expenses) {
      return (
        <div>
          <p data-testid="email-field">{ user.email }</p>
          <p data-testid="total-field">
            { expenses.reduce((antes, atual) => {
              const rate = Number(atual.exchangeRates[atual.currency].ask);
              return antes + Number(atual.value) * rate;
            }, 0).toFixed(2)}
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return state;
}

Header.propTypes = {
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};
export default connect(mapStateToProps, null)(Header);
