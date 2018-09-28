import React, { Component } from 'react';

class AddCurrency extends Component {
  state = {
    symbol: ''
  }

  handleChange = (event) => {
    this.setState({ symbol: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSaveCurrency(this.state.symbol.toUpperCase())

    this.setState({ symbol: '' })
  }

  render() {

    const enabled = this.state.symbol.length > 0;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="label">
            Add Cryptocurrency
          </label>

          <input
            className="input is-medium is-inline"
            type="text"
            placeholder="Symbol (ex. BTC)..."
            onChange={this.handleChange}
            value={this.state.symbol}
          />

          <input
            type="submit"
            value="Save"
            className="button is-medium"
            disabled={!enabled}
          />
        </form>

        {(this.props.showErrorMsg) ?
          <div className="message is-danger">There is no data for that symbol.</div>
        : null}

        {(this.props.showSuccessMsg) ?
          <div className="message is-success">Saved!</div>
        : null}
      </div>
    );
  }
}

export default AddCurrency;