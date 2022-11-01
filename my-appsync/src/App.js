import './App.css';
import { useQuery, gql } from '@apollo/client';
import Card from 'react-bootstrap/Card';

const FILMS_QUERY = gql `
query MyQuery {
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
}`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(FILMS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  return data.listProductListTables.items.map(({  image, price, productCode ,error}) => (
    <div key={productCode} className ='card' >
      <div className='card-body'>
      <div className='card-title'>
      <img width="400" height="250" alt="appsync-api" src={image ? `https://assets-shopbmwusa.realityi.com/assets/images/highquality/${image}`.toLowerCase() : error} />
      </div>
      <div className='card-text'>
      <h3 className='card-text'>price: ${price}</h3>
      </div>
      </div>
    </div>
  )); 
}


function App() {
  return (
    <div className="App">
      <DisplayLocations />
    </div>
  );
}

export default App;
