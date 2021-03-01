import React from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './Header';


function Beers({ beerList }) {


    console.log(beerList);


    return (
        <div>
            <Header />
            <div className='beerList'>
                {beerList.map(beer => {
                    return (
                        <Link to={`/beers/${beer._id}`} >
                            <div className='beerDiv' style={{ float: 'left' }}>
                                <img src={beer.image_url} alt={beer.name} style={{ maxHeight: '100px', }} />
                                <div className='beerDetailsShort'>
                                    <h2>{beer.name}</h2>
                                    <h3>{beer.tagline}</h3>
                                    <p>{beer.contributed_by}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Beers;