import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import '../index.css';

class Wallet extends React.Component {
  render() {
    return (
      <fieldset className="fieldsetBody">
        <Header />
        <WalletForm />
        <Table />
      </fieldset>);
  }
}

export default Wallet;
