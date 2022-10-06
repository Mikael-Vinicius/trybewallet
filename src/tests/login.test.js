import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import Login from '../pages/Login';
import App from '../App';

describe('testando o componente login', () => {
  it('Verifica se contem os inputs de login', () => {
    renderWithRouterAndRedux(<Login />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const EnterBtn = screen.getByRole('button', { name: 'Entrar' });
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(EnterBtn).toBeInTheDocument();
  });

  it('Verifica se a pessoa usuaria pode inserir seus dados', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const EnterBtn = screen.getByRole('button', { name: 'Entrar' });
    userEvent.type(emailInput, 'lucas@hotmail.com');
    userEvent.type(passwordInput, '1234232');
    expect(emailInput.value).toBe('lucas@hotmail.com');
    expect(passwordInput.value).toBe('1234232');

    userEvent.click(EnterBtn);
    expect(history.location.pathname).toBe('/carteira');
  });
});
