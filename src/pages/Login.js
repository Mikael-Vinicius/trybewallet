import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import USER_SUBMIT_EMAIL from '../redux/actions';

class Login extends React.Component {
  state = {
    email: [],
    senha: [],
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { email } = this.state;
    const { history, dispatch } = this.props;
    const action = { type: USER_SUBMIT_EMAIL, payload: { email } };
    dispatch(action);
    history.push('/carteira');
  };

  render() {
    const { email, senha } = this.state;
    const passwordMin = 6;
    return (
      <div>
        Email:
        <input
          onChange={ this.handleChange }
          data-testid="email-input"
          type="text"
          name="email"
          value={ email }
        />
        Senha
        <input
          data-testid="password-input"
          type="password"
          name="senha"
          value={ senha }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ !email.includes('@')
          || !email.includes('.com') || senha.length < passwordMin }
          name="Enviar"
          onClick={ this.handleSubmit }
        >
          Entrar

        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
