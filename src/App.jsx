import { useState, useEffect } from 'react'
import './styles.css'
import axios from 'axios'
import { HashRouter, Routes, Route } from 'react-router-dom'
import NameForm from './components/NameForm'
import Pokedex from './components/Pokedex'
import ProtectedRoutes from './components/ProtectedRoutes'
import PokemonDetails from './components/PokemonDetails'


function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NameForm/>}/>

        <Route element={<ProtectedRoutes/>}>
          <Route path="/poke" element={<Pokedex/>}/>
          <Route path="/poke/:id" element={<PokemonDetails/>}/>
        </Route>
        
      </Routes>
    </HashRouter>
  )
}

export default App
