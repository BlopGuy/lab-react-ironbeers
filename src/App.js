import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import HomeMenu from './components/HomeMenu';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';

function App() {

  const [beers, setBeers] = React.useState([]);

  React.useEffect(() => {
      axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
          setBeers(response.data);
        })
    })

    
  return (
   
    <div className="App">
      <Route exact path = '/' component = {HomeMenu} />
      <Route 
      exact path = '/beers' 
      render={() => (
        <Beers beerList = {beers}/>
      )}/>
      <Route 
      path = {["/beers/:beerId", "/randomBeer/:beerId"]} 
      component = {BeerDetails}/>
      {/* <Route exact path = '/randombeer' component = {randomBeer} />
      <Route exact path = '/newbeer' component = {newBeer} /> */}
    </div>
  );
}

export default App;
