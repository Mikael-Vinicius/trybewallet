import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  createTables = (expenses) => {
    if (expenses.length === 0) {
      return null;
    }
    return expenses.map((e) => (
      <tr key={ e.id }>
        <td>{e.description}</td>
        <td>{e.tag}</td>
        <td>{e.method}</td>
        <td>{Number(e.value).toFixed(2)}</td>
        <td>{e.exchangeRates[e.currency].name}</td>
        <td>{Number(e.exchangeRates[e.currency].ask).toFixed(2)}</td>
        <td>
          {(e.value * Number(e.exchangeRates[e.currency].ask)).toFixed(2)}
        </td>
        <td>Real</td>
      </tr>
    ));
  };

  render() {
    const { wallet: { expenses } } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">Descrição</th>
              <th scope="col">Tag</th>
              <th scope="col">Método de pagamento</th>
              <th scope="col">Valor</th>
              <th scope="col">Moeda</th>
              <th scope="col">Câmbio utilizado</th>
              <th scope="col">Valor convertido</th>
              <th scope="col">Moeda de conversão</th>
              <th scope="col">Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>{ expenses ? this.createTables(expenses) : null}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

Table.propTypes = {
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default connect(mapStateToProps)(Table);
