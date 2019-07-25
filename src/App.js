import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ExchangeRates from './component/ExchangeRates'

import { ApolloProvider } from 'react-apollo'

function App(props) {
  const [ currency, setCurrency ] = useState('USD')

  return (
    <ApolloProvider client={props.client}>
      <div style={{
        marginLeft: "10px"
      }}>
        <h2>My First Apollo app</h2>
        <select onChange={(e) => { setCurrency(e.target.value) }}>
          <option value="USD">USD</option>
          <option value="IDR">IDR</option>
        </select>
        <div>
          <ExchangeRates currency={currency} />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
