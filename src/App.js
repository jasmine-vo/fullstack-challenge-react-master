import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import * as API from './api';
import CurrencyList from './CurrencyList.js';

class App extends Component {
  state = {
    currencies: {}
  }

  componentDidMount() {
    API.getCurrencies().then((data) =>
      this.setState({ currencies: data }))
  }

  render() {
    return (
      <div>
        <section className="hero is-info title">
          <div className="hero-body is-size-2 has-text-centered">Cryptotracker</div>
        </section>
        <section className="section">
          <div className="container">
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