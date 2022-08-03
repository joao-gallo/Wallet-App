import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <fieldset>
          <p data-testid="email-field">{ email }</p>
          {' '}
          <spam data-testid="total-field">0 </spam>
          <spam data-testid="header-currency-field">BRL</spam>
        </fieldset>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
