import React from "react";
import { renderWithRouterAndRedux } from "./renderWith";
import { screen } from '@testing-library/react';
import Wallet from "../pages/Wallet";
import mockData from './mockData'

const expenses = {
    id: 2,
    value: 11,
    description: '',
    currency: 'CAD',
    method: 'Dinheiro',
    tag: 'Lazer',
    exchangeRates: mockData,
}
const wallet = {
    currencies: Object.keys(mockData),
    expenses: [expenses],
  };

describe('wallet',()=>{
    test('se todas as informações estão na tela',()=>{
    renderWithRouterAndRedux(<Wallet/>)
    const value = screen.getByTestId('value-input');
    const currency = screen.getByTestId('currency-input');
    const method = screen.getByTestId('method-input');
    const tag = screen.getByTestId('tag-input');
    const description = screen.getByTestId('description-input');

    expect(value).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(currency).toBeInTheDocument();
    expect(tag).toBeInTheDocument();
    expect(method).toBeInTheDocument();
    })
    test('se existe um botão para excluir', () => {
      renderWithRouterAndRedux(<Wallet />, { initialState: { wallet: wallet } });
      const button = screen.getByRole('button', {  name: 'Excluir'});
      expect(button).toBeInTheDocument();
  });

})