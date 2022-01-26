import axios from 'axios'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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

    const filterPokemones = id => {
        console.log(id);
    }

    console.log(pokemon);

    return (
        
        <section>
            <h1 className='text-6xl'>Pokedex</h1>
            <p className='text-2xl'>Welcome <span className='text-gray-500'>{name}!</span></p>

            <select onChange={e => filterPokemones(e.target.value)}>
                {
                    types.map(type => (
                        <option key={type.url}>{type.name}</option>
                    ))
                } 
            </select>

            <main className='display: grid grid-cols-4 '>
                {
                    pokemon.map(poke => (
                        <p key={poke.name}>
                            <PokemonInfo url={poke?.url}/>
                        </p>
                    ))
                }
            </main>

        </section>
    );
};

export default Pokedex;
