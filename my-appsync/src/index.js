import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import awsmobile from './appSync';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: awsmobile.aws_appsync_graphqlEndpoint,
  cache: new InMemoryCache(),
  headers: { "x-api-key" : awsmobile.aws_appsync_apiKey }
});

client.query({
  query: gql`
    {
      listProductListTables(limit: 10) {
        items {
          data
          image
          price
          productCode
          productId
          productName
        }
      }
    }
  `
})
.then((result) => console.log("client.query",result));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
  <App />
</ApolloProvider>
);


