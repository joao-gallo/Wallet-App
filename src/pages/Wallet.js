import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <fieldset>
        <Header />
        <WalletForm />
        <Table />
      </fieldset>);
  }
}

export default Wallet;
