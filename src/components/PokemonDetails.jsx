import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {

    const [pokemons, setPokemons] = useState({});

    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemons(res.data))
    }, [id]);


    return (
        <section>
            <h1>Pokemon Details</h1>
            <div className='card'>
                <img src={pokemons.sprites?.front_default} alt="front-default" />
                <p>Name: {pokemons.name}</p>
                <p>Weight: {pokemons.weight}</p>
                <p>Type: {pokemons?.types[0].name}</p>
                <p></p>
            </div>
        </section>

    );
};

export default PokemonDetails;
