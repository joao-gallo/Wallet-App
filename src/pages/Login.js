import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userActFunc } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  checkEmail = (email) => {
    const exceptions = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return email.match(exceptions);
  }

  checkPassword = () => {
    const { email, password } = this.state;
    const minNUM = 6;

    if (password.length >= minNUM && this.checkEmail(email)) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  handleChange = ({ target }) => {
    const { id } = target;
    this.setState({
      [id]: target.value,
    }, () => this.checkPassword());
  }

  render() {
    const { email, password, isDisabled } = this.state;
    const { dataSave, history } = this.props;

    return (
      <>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="text"
            id="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ isDisabled }
          onClick={ () => {
            dataSave(email);
            history.push('/carteira');
          } }
        >
          Entrar
        </button>
      </>
    );
  }
}

Login.propTypes = {
  dataSave: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dataSave: (email) => dispatch(userActFunc(email)),
});

export default connect(null, mapDispatchToProps)(Login);
