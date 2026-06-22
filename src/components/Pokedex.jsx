import axios from 'axios'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonInfo from './PokemonInfo';
import { PokemonLogo } from '../img';
import { TYPE_COLORS } from '../utils/typeColors';

const Pokedex = () => {
    const name = useSelector(state => state.name)
    const [pokemon, setPokemon] = useState([]);
    const [types, setTypes] = useState([]);
    const [pokemonSearch, setpokemonSearch] = useState("")
    const [page, setPage] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const navigate = useNavigate()

    const PerPage = 8

    useEffect(() => {
        const offset = (page - 1) * PerPage
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${PerPage}`)
            .then(res => {
                setPokemon(res.data.results)
                setTotalCount(res.data.count)
            })
    }, [page]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypes(res.data.results))
    }, []);

    const filterPokemones = url => {
        axios.get(url)
            .then(res => setPokemon(res.data.pokemon))
        setPage(1)
    }

    const resetFilter = () => {
        setPage(1)
        const offset = 0
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${PerPage}`)
            .then(res => {
                setPokemon(res.data.results)
                setTotalCount(res.data.count)
            })
    }

    const search = () => navigate(`/poke/${pokemonSearch}`)

    const totalPages = Math.ceil(totalCount / PerPage)

    return (
        <section className='min-h-screen'>
            <header className='sticky top-0 backdrop-blur-md bg-black/40 border-b border-white/10 z-10 flex items-center justify-between px-6 py-3'>
                <img className='h-12' src={PokemonLogo} alt="poke-logo" />
                <p className='text-yellow-400 font-bold text-lg'>Hola, {name}!</p>
            </header>

            <div className='max-w-6xl mx-auto px-4 py-6'>
                <div className='flex overflow-x-auto gap-2 pb-2 mb-4 scrollbar-hide'>
                    <button
                        onClick={resetFilter}
                        className='font-mono text-xs uppercase px-3 py-1 rounded-full cursor-pointer bg-white text-gray-900 flex-shrink-0'
                    >
                        Todos
                    </button>
                    {types.map(type => (
                        <button
                            key={type.url}
                            onClick={() => filterPokemones(type.url)}
                            className='font-mono text-xs uppercase px-3 py-1 rounded-full cursor-pointer flex-shrink-0 text-white'
                            style={{ backgroundColor: TYPE_COLORS[type.name]?.bg || '#A8A878' }}
                        >
                            {type.name}
                        </button>
                    ))}
                </div>

                <div className='flex justify-center mb-6'>
                    <input
                        className='bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-l-full px-4 py-2 w-full max-w-md focus:outline-none focus:border-yellow-400'
                        placeholder='name or id'
                        type="text"
                        value={pokemonSearch}
                        onChange={e => setpokemonSearch(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && search()}
                    />
                    <button onClick={search} className='bg-yellow-400 text-gray-900 font-bold px-4 rounded-r-full hover:bg-yellow-300 transition'>
                        Buscar
                    </button>
                </div>

                <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center'>
                    {pokemon.map(poke => (
                        <PokemonInfo key={poke.name ? poke.name : poke.pokemon.name} url={poke.url ? poke.url : poke.pokemon.url} />
                    ))}
                </main>

                <div className='flex justify-center items-center gap-4 mt-8 mb-12'>
                    {page !== 1 && (
                        <button className='btn-primary py-3 px-6' onClick={() => setPage(page - 1)}>Anterior</button>
                    )}
                    <div className='text-white font-bold text-lg'>
                        Página {page} de {totalPages}
                    </div>
                    {page !== totalPages && (
                        <button className='btn-primary py-3 px-6' onClick={() => setPage(page + 1)}>Next</button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Pokedex;
