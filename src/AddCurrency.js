import React, { Component } from 'react';

class AddCurrency extends Component {
// to do: min char 2/disable button, max char limit 6, add listener
  state = {
    symbol: ''
  }

  handleChange = (event) => {
    this.setState({ symbol: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.symbol)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="label">
          Add Cryptocurrency
        </label>

        <input
          className="input is-medium is-inline"
          type="text"
          placeholder="Symbol (ex. BTC)..."
          onChange={this.handleChange}
        />

        <input
          type="submit"
          value="Save"
          className="button is-medium"
        />
      </form>
    );
  }
}

export default AddCurrency;