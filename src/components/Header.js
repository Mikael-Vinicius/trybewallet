import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user, wallet: { expenses } } = this.props;
    if (expenses) {
      return (
        <div className="userData">
          <img alt="logotipo" src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...eErhBMmx...OwXs1M3EMoAJtliYrh...Fs8f85" />
          <img className='profileImg' src="https://w7.pngwing.com/pngs/858/581/png-transparent-profile-icon-user-computer-icons-system-chinese-wind-title-column-miscellaneous-service-logo.png" />
          <p src className="email" data-testid="email-field">{ user.email }</p>
          <p data-testid="total-field">
            Total de despesas:
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
