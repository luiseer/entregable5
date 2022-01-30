import axios from 'axios'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonInfo from './PokemonInfo';


const Pokedex = () => {
    const name = useSelector(state => state.name)
    const [pokemon, setPokemon] = useState([]);
    const [types, setTypes] = useState([]);
    const [pokemonSearch, setpokemonSearch] = useState("")
    //paginacion
    const [page, setPage] = useState(1)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1117')
            .then(res => setPokemon(res.data.results))
    }, []);


    //  useEffect(() => {
    //      axios.get('https://pokeapi.co/api/v2/pokemon/')
    //          .then(res => setPokemon(res.data.results))
    //  }, []);


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypes(res.data.results))
    }, []);



    const filterPokemones = url => {
        axios.get(url)
            .then(res => setPokemon(res.data.pokemon))
        setPage(1)
    }

    //funcion buscar
    const search = () => navigate(`/poke/${pokemonSearch}`)

    //paginacion
    const PerPage = 8
    const lastIndex = page * PerPage//pagina 1 indice 4
    const firstIndex = lastIndex - PerPage//pagina 1 indice 0 
    const paginated = pokemon.slice(firstIndex, lastIndex) //metodo slice para paginar
    const totalPages = Math.ceil(pokemon.length / PerPage)

    let pagesNumbers = []

    for (let i = 1; i <= totalPages; i++) {

        pagesNumbers.push(i)

    }

    console.log(pagesNumbers);
    console.log(totalPages);
    console.log(paginated);
    console.log(pokemon);

    return (




        <section className='md:container md:mx-auto sm:mx-auto'>




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

            <input
                placeholder='pokemon name or number'
                type="text"
                value={pokemonSearch}
                onChange={e => setpokemonSearch(e.target.value)}
            />
            <button onClick={search} className='btn-primary'>Submit</button>

            <main className='display: grid grid-cols-1 md:grid-cols-4'>
                {
                    paginated.map(poke => (
                        <p key={poke.name ? poke.name : poke.pokemon.name}>
                            <PokemonInfo url={poke.url ? poke.url : poke.pokemon.url} />
                        </p>
                    ))
                }
            </main>

            <div className='flex justify-around'>
                {
                    page !== 1 && (
                        <button className='btn-primary' onClick={() => setPage(page - 1)}>Previus</button>
                    )
                }

                {/*Para mostrar numero de paginas */}
                {/* {
                    pagesNumbers.map(number => <button key={number} onClick={() => setPage(number)}>{number}</button>)
                } */}

                <div>
                    {page} / {totalPages}
                </div>

                {
                    page !== totalPages && (
                        <button className='btn-primary' onClick={() => setPage(page + 1)}>Next</button>
                    )
                }
            </div>







        </section>
    );
};

export default Pokedex;
