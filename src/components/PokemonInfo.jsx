import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PokemonInfo({ url }) {

    const [pokeInfo, setPokeInfo] = useState({
        stats: [],
        types: [],
        abilities: [],
        moves: []
    });

    useEffect(() => {
        axios.get(url)
            .then(res => setPokeInfo(res.data))
    }, [url]);

    console.log(pokeInfo.types[0]);

    return (
        <div>
            <div className='card static'>
                <Link to={`/poke/${pokeInfo.id}`}>
                    <p>Name: {pokeInfo.name}</p>
                    <p>Types: {pokeInfo?.types[1]?.type?.name ? pokeInfo?.types[0]?.type?.name : pokeInfo?.types[1]?.type?.name}</p>
                    <p>Hp: {pokeInfo.stats[0]?.base_stat}</p>
                    <p>Attack: {pokeInfo.stats[1]?.base_stat}</p>
                    <p>Defense:{pokeInfo.stats[2]?.base_stat}</p>
                    <p>Speed: {pokeInfo.stats[5]?.base_stat}</p>
                    <img src={pokeInfo.sprites?.other.home.front_default} alt="home-default" />
                </Link>
            </div>
        </div>
    );
}

export default PokemonInfo;
