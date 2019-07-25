import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const queryGetExchangeRates = gql`
  query ExchangeRates($currency: String!) {
    rates(currency: $currency) {
      currency
      rate
    }
  }
`

const ExchangeRates = ({ currency }) => (
  <Query query={queryGetExchangeRates} variables={{ currency }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading ....</p>
      if (error) return <p>Error .....</p>

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{currency}: {rate}</p>
        </div>
      ))
    }}
  </Query>
)

export default ExchangeRates