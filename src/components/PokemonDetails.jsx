import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {

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

    console.log(pokemons.moves.map(move => move.move.name));
    //pokemons.sprites.master.sprites.pokemon.other.dream-world


    return (
        <main className='contenedor relative'>
            <header>
                <img className='w-90 h-60 ' src="src/img/Pokemon-Logo.png" alt="poke-logo" />
                <p className='text-center text-5xl uppercase mb-5'>{pokemons.name}</p>
                        <div className='card-moves text-center border-2 absolute top-10 right-0 opacity-80'>
                            <h2>Movements</h2>
                            {
                                pokemons.moves.map(move => (
                                    <ol key={move.move.name}>
                                        <li>
                                            {move.move.name}
                                        </li>
                                    </ol>
                                ))
                            }
                        </div>
            </header>
            <section className='card-detail m-auto opacity-75 w-1/2 md:w-9/12 h-full md:h-auto'>

                <div>
                    <img className='m-auto' src={pokemons.sprites?.other.dream_world.front_default} alt="dream-world-front-default" />  
                </div>
        
                <div className='flex justify-around'>
                    <p>Weight: {pokemons.weight}</p>
                    <p>Height: {pokemons.height}</p>
                </div>
                <div className='flex justify-center border-2'>
                    <p># {pokemons.id}</p>
                </div>
            </section>

            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-5'>
                <div className='card-atributes flex flex-col text-center border-2'>
                    <h2>Types</h2>
                    {
                        pokemons.types?.map(type => (
                            <p className='bg-poke-purple opacity-80 text-white rounded-sm border-4 m-1' key={type.type.name}>{type.type.name}</p>
                        ))
                    }
                </div>
                <div className='card-atributes flex flex-col text-center border-2'>
                    <h2>Abilities</h2>
                    {
                        pokemons.abilities?.map(ability => (
                            <p className='bg-poke-purple opacity-80 text-white rounded-sm border-4 m-1' key={ability.ability.name}>{ability.ability.name}</p>
                        ))
                    }
                </div>
                <div className='card-atributes text-center border-2'>
                    <h2>Stats Base</h2>
                    <progress max="150" value={pokemons.stats[0]?.base_stat}></progress>
                    <progress max="150" value={pokemons.stats[1]?.base_stat}></progress>
                    <progress max="150" value={pokemons.stats[2]?.base_stat}></progress>
                    <progress max="150" value={pokemons.stats[5]?.base_stat}></progress>
                </div>
            </section>

        </main>

    );
};

export default PokemonDetails;
