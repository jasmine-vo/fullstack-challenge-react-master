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

app.listen(port, () => console.log(`Listening on port ${port}`));