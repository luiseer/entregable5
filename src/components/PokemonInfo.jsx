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
                    <p>{pokeInfo.pokemon}</p>
                </Link>
            </section>
        </div>

    );
}

export default PokemonInfo;
