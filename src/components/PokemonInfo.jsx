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

    console.log(pokeInfo.types.map(type => type.type.name));

    return (
            <div className='card'>
                <Link to={`/poke/${pokeInfo.id}`}>
                    <p>Name: {pokeInfo.name}</p>
                    {
                        pokeInfo.types.map(type => (
                            <p key={type.type.name}>Type: {type.type.name}</p>
                        ))
                    } 
                    {/* <p>Types: {pokeInfo.types[0]?.type.name ? pokeInfo.types[0]?.type.name: 
                    
                        pokeInfo.types.map(type => (
                            <p key={type.type.name}>Type: {type.type.name}</p>
                        ))
                    
                    }</p> */}
                    <p>Hp: {pokeInfo.stats[0]?.base_stat}</p>
                    <p>Attack: {pokeInfo.stats[1]?.base_stat}</p>
                    <p>Defense:{pokeInfo.stats[2]?.base_stat}</p>
                    <p>Speed: {pokeInfo.stats[5]?.base_stat}</p>
                    <img src={pokeInfo.sprites?.other.home.front_default} alt="home-default" />
                </Link>
            </div>
        
    );
}

export default PokemonInfo;
