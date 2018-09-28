import React from 'react';

function AddCurrency () {
// to do: min char 2/disable button, max char limit 6, add listener
  return (
    <form>
      <label className="label">
        Add Cryptocurrency
      </label>

      <input
        className="input is-medium is-inline"
        type="text"
        placeholder="Symbol (ex. BTC)..."
      />

      <input
        type="submit"
        value="Save"
        className="button is-medium"
      />
    </form>
  );
}

export default AddCurrency;