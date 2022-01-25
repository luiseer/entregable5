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

    console.log(types);
    console.log(pokemon);

    return (
        <section>
            <h1 className='text-6xl'>Pokedex</h1>
            <p>Welcome {name}!</p>
            <select onChange={e => console.log(e.target.value)} name="" id="">
                {
                    types.map(type => (
                        <option key={type.url}>{type.name}</option>
                    ))
                } 
            </select>
            <ul>
                {
                    pokemon.map(poke => (
                        <li key={poke.name}>
                            <PokemonInfo url={poke?.url}/>
                        </li>
                    ))
                }
            </ul>

        </section>
    );
};

export default Pokedex;
