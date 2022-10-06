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
  it('Testando se ao enviar as informaçoes os inputs "descrição e valor sao limpos"', async () => {
    renderWithRouterAndRedux(<Wallet />);
    const inputDescription = screen.getByTestId('description-input');
    const inputValue = screen.getByTestId('value-input');
    const addBtn = screen.getByRole('button', { name: 'Adicionar despesa' });
    const tagInput = screen.getByTestId('tag-input');
    const currencyInput = await screen.findByTestId('currency-input');
    const option = await screen.findByRole('option', { name: 'USD' });
    expect(option).toBeInTheDocument();
    userEvent.type(inputValue, 123);
    userEvent.type(inputDescription, 123);
    expect(tagInput.value).toBe('Alimentação');
    expect(currencyInput.value).toContain('USD');
    userEvent.click(addBtn);
    expect(inputValue.value).toBe('');
    expect(inputDescription.value).toBe('');
    const tableContent = await screen.findByText('Real');
    expect(tableContent).toBeInTheDocument();
  });
});
