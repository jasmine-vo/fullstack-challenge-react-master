import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import * as API from './api';
import CurrencyList from './CurrencyList.js';
import AddCurrency from './AddCurrency.js';

class App extends Component {
  state = {
    currencies: {}
  }

  componentDidMount() {
    API.getCurrencies().then((data) =>
      this.setState({ currencies: data }))
  }

  saveCurrency = (symbol) => {
    API.getCurrency(symbol).then((data) =>
      this.setState({ currencies: {...this.state.currencies, [symbol]:data} }))
  }

  render() {
    return (
      <div>
        <section className="hero is-info title">
          <div className="hero-body is-size-2 has-text-centered">Cryptotracker</div>
        </section>
        <section className="hero">
          <div className="container">
            <AddCurrency
              onSaveCurrency={this.saveCurrency}
            />
          </div>
        </section>
        <section className="hero">
          <div className="hero-body">
            <CurrencyList
              currencies={this.state.currencies}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;