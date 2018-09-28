const app = require('express')();
const firebase = require('./firebase');
const cors = require('cors');
const fetch = require('node-fetch');

const port = 5000;

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/currencies', (req, res) => {
  firebase.database().ref('currencies/').once('value')
    .then(function(snapshot) {
      const currencies = Object.keys(snapshot.val()).join(',');

    fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${currencies}&tsyms=USD`)
      .then(res => res.json())
      .then(data => {
        res.send(data);
      })
      .catch(err => console.error(err));
    });
});

app.get('/currency/:symbol', (req, res) => {
  const symbol = req.params.symbol;

  fetch(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD`)
    .then(res => res.json())
    .then(data => {
      res.send(data);

      if (data.Response !== 'Error') {
        let update = {};
        update['/currencies/' + symbol] = data;

        return firebase.database().ref().update(update);
      }
    })
    .catch(err => console.error(err));
});

app.delete('/currency/:symbol', (req, res) => {
  const symbol = req.params.symbol;

  let update = {};
  update['/currencies/' + symbol] = null;

  firebase.database().ref().update(update);
  
  res.send();
});

app.listen(port, () => console.log(`Listening on port ${port}`));