import axios from 'axios'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonInfo from './PokemonInfo';


const Pokedex = () => {
    const name = useSelector(state => state.name)
    const [pokemon, setPokemon] = useState([]);
    const [types, setTypes] = useState([]);

    // useEffect(() => {
    //     axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1117')
    //         .then(res => setPokemon(res.data.results))
    // }, []);


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => setPokemon(res.data.results))
    }, []);


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypes(res.data.results))
    }, []);



    const filterPokemones = url => {
        axios.get(url)
            .then(res => setPokemon(res.data.pokemon))
    }

    console.log(pokemon);

    return (

        <section>
            <header className='flex justify-center space-x-5 mt-5'>
                <h1 className='text-6xl text-red-600'>Pokedex</h1>
                <p className='text-2xl mt-5'>Welcome <span className='text-gray-500'>{name}!</span></p>
            </header>

            <select className='text-black m-5 w-52 border-2 uppercase' onChange={e => filterPokemones(e.target.value)}>
                {
                    types.map(type => (
                        <option key={type.url} value={type.url}>{type.name}</option>
                    ))
                }
            </select>

            <main className='display: grid grid-cols-1 md:grid-cols-4'>
                {
                    pokemon.map(poke => (
                        <p key={poke.name ? poke.name : poke.pokemon.name}>
                            <PokemonInfo url={poke.url ? poke.url : poke.pokemon.url} />
                        </p>
                    ))
                }
            </main>

        </section>
    );
};

export default Pokedex;
