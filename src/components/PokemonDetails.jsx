import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { PokemonLogo } from '../img';
import { getTypeColor } from '../utils/typeColors';

const PokemonDetails = () => {
    const navigate = useNavigate()

    const [pokemons, setPokemons] = useState({
        stats: [],
        types: [],
        abilities: [],
        moves: []
    });

    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemons(res.data))
    }, [id]);

    const primaryType = pokemons.types[0]?.type.name
    const color = getTypeColor(primaryType)

    return (
        <main className='min-h-screen flex flex-col items-center p-4'>
            <header className='w-full max-w-6xl flex items-center justify-between mb-4'>
                <button
                    onClick={() => navigate(-1)}
                    className='text-white border border-white/30 rounded-full px-4 py-1 hover:bg-white/10 transition'
                >
                    ← Volver
                </button>
                <img className='h-12' src={PokemonLogo} alt="poke-logo" />
            </header>

            <div className='w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl'>
                <div className='text-center mb-6'>
                    <h1 className='text-4xl font-bold text-white uppercase mb-2'>{pokemons.name}</h1>
                    <div className='flex justify-center gap-2'>
                        {pokemons.types?.map(type => (
                            <span
                                key={type.type.name}
                                className='text-xs font-mono uppercase rounded-full px-3 py-1 bg-white/20 text-white'
                            >
                                {type.type.name}
                            </span>
                        ))}
                    </div>
                </div>

                <div
                    className='rounded-2xl p-6 mb-6 flex justify-center'
                    style={{ backgroundColor: color.bg }}
                >
                    <img
                        className='h-48 drop-shadow-lg'
                        src={pokemons.sprites?.other.dream_world.front_default
                            ? pokemons.sprites?.other.dream_world.front_default
                            : pokemons.sprites?.front_default}
                        alt={pokemons.name}
                    />
                </div>

                <div className='flex justify-center gap-8 text-white mb-6'>
                    <p>Weight: {pokemons.weight}</p>
                    <p>Height: {pokemons.height}</p>
                    <p># {pokemons.id}</p>
                </div>

                <section className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className='bg-white rounded-2xl p-4 shadow-lg' style={{ borderTop: `4px solid ${color.bg}` }}>
                        <h2 className='font-bold text-lg mb-2 text-center'>Types</h2>
                        <div className='flex flex-wrap justify-center gap-1'>
                            {pokemons.types?.map(type => (
                                <span
                                    key={type.type.name}
                                    className='text-xs font-mono uppercase rounded-full px-3 py-1 text-white'
                                    style={{ backgroundColor: color.bg }}
                                >
                                    {type.type.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className='bg-white rounded-2xl p-4 shadow-lg' style={{ borderTop: `4px solid ${color.bg}` }}>
                        <h2 className='font-bold text-lg mb-2 text-center'>Abilities</h2>
                        <div className='flex flex-wrap justify-center gap-1'>
                            {pokemons.abilities?.map(ability => (
                                <span
                                    key={ability.ability.name}
                                    className='text-xs font-mono rounded-full px-3 py-1 text-white'
                                    style={{ backgroundColor: color.bg }}
                                >
                                    {ability.ability.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className='bg-white rounded-2xl p-4 shadow-lg' style={{ borderTop: `4px solid ${color.bg}` }}>
                        <h2 className='font-bold text-lg mb-2 text-center'>Movements</h2>
                        <div className='flex flex-wrap justify-center gap-1'>
                            {pokemons.moves?.slice(0, 5).map(move => (
                                <span
                                    key={move.move.name}
                                    className='text-xs font-mono rounded-full px-3 py-1 text-white'
                                    style={{ backgroundColor: color.bg }}
                                >
                                    {move.move.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className='bg-white rounded-2xl p-4 shadow-lg' style={{ borderTop: `4px solid ${color.bg}` }}>
                        <h2 className='font-bold text-lg mb-2 text-center'>Stats Base</h2>
                        <div className='space-y-2'>
                            {[
                                { label: 'HP', value: pokemons.stats[0]?.base_stat },
                                { label: 'Attack', value: pokemons.stats[1]?.base_stat },
                                { label: 'Defense', value: pokemons.stats[2]?.base_stat },
                                { label: 'Speed', value: pokemons.stats[5]?.base_stat },
                            ].map(stat => (
                                <div key={stat.label} className='flex items-center gap-2'>
                                    <span className='text-xs font-bold w-14 text-right'>{stat.label}</span>
                                    <div className='flex-1 h-2 bg-gray-200 rounded-full overflow-hidden'>
                                        <div
                                            className='h-full rounded-full transition-all'
                                            style={{
                                                width: `${Math.min((stat.value || 0) / 150 * 100, 100)}%`,
                                                backgroundColor: color.bg
                                            }}
                                        />
                                    </div>
                                    <span className='text-xs font-mono w-8'>{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default PokemonDetails;
