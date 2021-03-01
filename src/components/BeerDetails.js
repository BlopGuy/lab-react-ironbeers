import React from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';

function BeerDetails({ match }) {

    const [beer, setBeer] = React.useState({})

    React.useEffect(() => {
        const beerId = match.params.beerId;

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response) => {
                setBeer(response.data);
            });

    });

    console.log(beer);

    return (
        <div>
            <Header />
            <div className='beerDetailsLong'>
                <img src={beer.image_url} alt='beerImage' style={{ maxWidth: '50px' }} />
                <div>
                    <h2 style={{ float: 'left' }}>{beer.name}</h2>
                    <h3 style={{ float: 'right' }}>{beer.attenuation_level}</h3>
                </div>
                <div>
                    <h2 style={{ float: 'left' }}>{beer.tagline}</h2>
                    <h3 style={{ float: 'right' }}>{beer.first_brewed}</h3>
                </div>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </div>
        </div>


    )

}

export default BeerDetails;