import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import CurrencyRow from './components/CurrencyRow';

const App = () => {
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    axios
      .get('https://api.currencyfreaks.com/v2.0/rates/latest', {
        params: {
          apikey: '594130fa83d649e294e382816042e4e0',
        },
      })
      .then((res) => {
        console.log(res.data.rates);
        const selectCurrency = {
          IDR: res.data.rates.IDR,
          USD: res.data.rates.USD,
          JPY: res.data.rates.JPY,
          KRW: res.data.rates.KRW,
        };
        setCurrencies(selectCurrency);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h3 className="text-center">Currency Exchange Rates</h3>
        </div>
        <div className="card-body">
          <table className="table table-hover text-center">
            <thead className="table-dark">
              <tr>
                <th scope="col">Currency</th>
                <th scope="col">We Buy</th>
                <th scope="col">Exchange Rate</th>
                <th scope="col">We Sell</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(currencies).map(([code, rate]) => (
                <CurrencyRow key={code} currencyCode={code} rate={rate} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
