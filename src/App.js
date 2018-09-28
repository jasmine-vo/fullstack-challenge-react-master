import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import * as API from './api';
import CurrencyList from './CurrencyList.js';
import AddCurrency from './AddCurrency.js';

class App extends Component {
  state = {
    currencies: {},
    showErrorMsg: false,
    showSuccessMsg: false
  }

  componentDidMount() {
    API.getCurrencies().then((data) =>
      this.setState({ currencies: data }))
  }

  saveCurrency = (symbol) => {
    API.getCurrency(symbol).then(data => {
      if (data.Response === 'Error') {
        this.setState({
          showErrorMsg: true,
          showSuccessMsg: false
        })
      } else {
        this.setState({
          currencies: {...this.state.currencies, [symbol]:data},
          showErrorMsg: false,
          showSuccessMsg: true
        })
      }
    })
  }

  removeCurrency = (symbol) => {
    API.deleteCurrency(symbol);

    let updatedCurrencies = Object.assign({}, this.state.currencies);
    delete updatedCurrencies[symbol]

    this.setState({ currencies: updatedCurrencies })
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
              showErrorMsg={this.state.showErrorMsg}
              showSuccessMsg={this.state.showSuccessMsg}
            />
          </div>
        </section>
        <section className="hero">
          <div className="hero-body">
            <CurrencyList
              currencies={this.state.currencies}
              onRemoveCurrency={this.removeCurrency}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;