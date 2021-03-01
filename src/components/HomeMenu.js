import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

function HomeMenu() {
    const [randomBeer, setRandomBeer] = React.useState({})
    
    React.useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((response) => {
                setRandomBeer(response.data);
            });
    }, []);
    return (
        <div className='MenuContainer'>
            <div className='MenuItem'>
                <Link to='/beers'>
                    <img src='/assets/beers.png' alt='beersImage' />
                </Link>
                <h2>Beers</h2>
            </div>
            <div className='MenuItem'>
                <Link to = {`/randombeer/${randomBeer._id}`} >
                <img src='/assets/random-beer.png' alt='randomBeerImage' />
                </Link>
                <h2>Random Beer</h2>
            </div>
            <div className='MenuItem'>
                <Link to='/new-beer'>
                <img src='/assets/new-beer.png' alt='newBeerImage' />
                </Link>
                <h2>New Beer</h2>
            </div>
        </div>
    )
}

export default HomeMenu;