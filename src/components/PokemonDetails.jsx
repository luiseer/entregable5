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
        <div>
            <h1>Pokemon Details</h1>
            <p>Name: {pokemons.name}</p>
            <img src={pokemons.sprites?.front_default} alt="front-default" />
        </div>
    );
};

export default PokemonDetails;
