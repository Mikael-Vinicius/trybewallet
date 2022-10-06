import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import Table from '../components/Table';

describe('testando o componente wallet', () => {
  it('Verifica se a pagina tem todos os inputs necessarios', () => {
    renderWithRouterAndRedux(<Table />);

    const Descriçao = screen.getByText('Descrição');
    expect(Descriçao).toBeInTheDocument();
  });
});
