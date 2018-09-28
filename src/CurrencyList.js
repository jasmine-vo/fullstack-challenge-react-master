import React from 'react';

function CurrencyList (props) {

  return (
    <table className="table is-fullwidth">
      <tbody>
        <tr className="table is-size-6">
          <th>Symbol</th>
          <th>Price (USD)</th>
          <th></th>
        </tr>
        {Object.keys(props.currencies).map((curr) => (
          <tr className="table is-size-5" key={curr}>
            <td>{curr}</td>
            <td>
              {props.currencies[curr]['USD'].toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })}
            </td>
            <td className="has-text-right">add delete</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CurrencyList;