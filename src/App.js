import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import * as API from './api';

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
      </div>
    );
  }
}

export default App;
