import React from 'react';

function CurrencyList (props) {

  return (
    <ol className="content">
      {Object.keys(props.currencies).map((curr) => (
        <li className="content is-size-5" key={curr}>
          {curr} {props.currencies[curr]['USD'].toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })}
        </li>
      ))}
    </ol>
  );
}

export default CurrencyList;