import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import Wallet from '../pages/Wallet';

describe('testando o componente wallet', () => {
  it('verificando se a pagina contem os inputs necessarios', () => {
    renderWithRouterAndRedux(<Wallet />);
    const inputDescription = screen.getByTestId('description-input');
    const currencyInput = screen.getByTestId('currency-input');
    const methodInput = screen.getByTestId('method-input');
    const tagInput = screen.getByTestId('tag-input');
    const inputValue = screen.getByTestId('value-input');
    const addBtn = screen.getByRole('button', { name: 'Adicionar despesa' });
    expect(inputValue).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(methodInput).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(addBtn).toBeInTheDocument();
  });
  it('Testando se ao enviar as informaçoes os inputs "descrição e valor sao limpos"', () => {
    renderWithRouterAndRedux(<Wallet />);
    const inputDescription = screen.getByTestId('description-input');
    const inputValue = screen.getByTestId('value-input');
    const addBtn = screen.getByRole('button', { name: 'Adicionar despesa' });
    userEvent.type(inputValue, 123);
    userEvent.type(inputDescription, 123);
    userEvent.click(addBtn);
    expect(inputValue.value).toBe('');
    expect(inputDescription.value).toBe('');
  });
});
