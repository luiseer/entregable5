import axios from 'axios'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PokemonInfo from './PokemonInfo';


const Pokedex = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1117')
            .then(res => setPokemon(res.data.results))
    }, []);

    console.log(pokemon);

    const name = useSelector(state => state.name)

    return (
        <div>
            <h1>Lista de Pokedex</h1>
            <p>Welcome {name}!</p>
            <ul>
                {
                    pokemon.map(poke => (
                        <li key={poke.name}>
                            <PokemonInfo url={poke?.url}/>
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default Pokedex;
