import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PokemonInfo({ url }) {

    const [pokeInfo, setPokeInfo] = useState({});

    useEffect(() => {
        axios.get(url)
            .then(res => setPokeInfo(res.data))
    }, [url]);

    // console.log(pokeInfo);

    return (
        <div>
            <section className='card'>
                <Link to={`/poke/${pokeInfo.id}`}>
                    <img src={pokeInfo.sprites?.other.home.front_default} alt="home-default" />
                    <p>Name: {pokeInfo.name}</p>
                </Link>
            </section>
        </div>
    );
}

export default PokemonInfo;
