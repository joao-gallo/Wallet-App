import React from 'react'
import { screen } from '@testing-library/react';
import { renderWithRedux } from './renderWith'
import Login from '../pages/Login'
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

describe('app', () => {
  test('se aparecem as informações corretas', () => {
    renderWithRedux(<Login />)
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  })
  test('se o botao esta funcionando', async() => {
    renderWithRedux(<Login />, {
      history: createMemoryHistory(['/']),
    } )
    const emailInp = screen.getByTestId("email-input");
    const passwordInp = screen.getByTestId("password-input");
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled()
    await userEvent.type(emailInp, 'joao@joao.com');
    await userEvent.type(passwordInp, '123456');
    expect(btn).not.toBeDisabled()
  })
})