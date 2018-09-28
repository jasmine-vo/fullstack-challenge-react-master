const api = 'http://localhost:5000';

const headers = {
  'Accept': 'application/json',
};

export const getCurrencies = () => {
  return fetch(`${api}/currencies`, { headers })
    .then(res => res.json());
  };

export const getCurrency = (symbol) => {
  return fetch(`${api}/currency/${symbol}`, { headers })
    .then(res => res.json());
  };