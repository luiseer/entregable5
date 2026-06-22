import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PokemonLogo, trainer_3d } from "../img";
import pokeball from "../img/pokeball.png";

const NameForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError(true);
      return;
    }
    setError(false);
    dispatch({ type: "SET_NAME", payload: name });
    navigate("/poke");
  };

  return (
    <div className="flex h-screen justify-center items-center relative">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center max-w-xs w-full px-4">
        <img className="w-full max-w-xs mb-4" src={PokemonLogo} alt="poke-logo" />
        <img src={trainer_3d} alt="trainer-3d" className="h-56 mb-6" />
        <form onSubmit={submit} className="w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
          <label className="text-white text-xl font-bold mb-3 block text-center">
            ¿Cuál es tu nombre, Entrenador?
          </label>
          <input
            className="w-full rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-yellow-400 focus:outline-none p-3 mb-3"
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && (
            <p className="text-red-400 text-sm mb-3 text-center">Ingresa tu nombre para continuar</p>
          )}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-xl py-3 flex items-center justify-center gap-2 transition"
          >
            <img src={pokeball} alt="pokeball" className="animate-spin w-6 h-6" />
            ¡Empezar!
          </button>
        </form>
      </div>
    </div>
  );
};

export default NameForm;
