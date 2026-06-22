import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getTypeColor } from '../utils/typeColors';

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

    const primaryType = pokeInfo.types[0]?.type.name
    const color = getTypeColor(primaryType)

    return (
        <Link to={`/poke/${pokeInfo.id}`}>
            <div
                className='w-48 h-72 rounded-2xl shadow-xl cursor-pointer transition hover:scale-105 hover:shadow-2xl flex flex-col items-center p-3 justify-between'
                style={{
                    background: `linear-gradient(135deg, ${color.bg}, ${color.light})`,
                    color: color.text
                }}
            >
                <div className='flex flex-col items-center gap-1'>
                    <img
                        className='object-contain h-28 w-28 drop-shadow-lg'
                        src={pokeInfo.sprites?.other.home.front_default}
                        alt={pokeInfo.name}
                    />
                    <div className='flex gap-1 flex-wrap justify-center'>
                        {pokeInfo.types.map(type => (
                            <span
                                key={type.type.name}
                                className='text-xs font-mono uppercase rounded-full px-2 py-0.5 bg-white/30'
                            >
                                {type.type.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className='w-full text-center'>
                    <p className='font-bold text-lg capitalize truncate'>{pokeInfo.name}</p>
                    <div className='grid grid-cols-2 gap-x-1 gap-y-0.5 text-xs mt-1'>
                        <span>HP {pokeInfo.stats[0]?.base_stat}</span>
                        <span>ATK {pokeInfo.stats[1]?.base_stat}</span>
                        <span>DEF {pokeInfo.stats[2]?.base_stat}</span>
                        <span>SPD {pokeInfo.stats[5]?.base_stat}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default PokemonInfo;
