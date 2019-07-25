import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
})

// or you can use `import gql from 'graphql-tag';` instead

ReactDOM.render(<App client={client} />, document.getElementById('root'));

serviceWorker.unregister();
