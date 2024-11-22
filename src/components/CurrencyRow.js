import React from 'react';

const CurrencyRow = ({ currencyCode, rate }) => {
  const exchangeRate = parseFloat(rate);
  const weBuy = (exchangeRate * 1.05).toFixed(4); // 5% lebih tinggi
  const weSell = (exchangeRate * 0.95).toFixed(4); // 5% lebih rendah

  return (
    <tr className="align-middle">
      <th scope="row" className="text-uppercase">
        {currencyCode}
      </th>
      <td>{weBuy}</td>
      <td>{exchangeRate}</td>
      <td>{weSell}</td>
    </tr>
  );
};

export default CurrencyRow;
