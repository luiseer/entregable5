import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { trainer_3d } from "../img";

const NameForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_NAME", payload: name });
    navigate("/poke");
  };

  return (
    <header className="flex h-screen justify-center items-center mb-20">
      <div className="">
        <div>
        <img className='w-90 h-60' src="../src/img/Pokemon-Logo.png" alt="poke-logo"/>
        </div>
        <div>
          <img src={trainer_3d} alt="trainer-3d" className="h-50 w-56 ml-12" />
        </div>
        <form onSubmit={submit}>
          <label>
            <div className="text-4xl ">Put your name Trainer</div>
            <input
              className="border border-black"
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <button><img src="./src/img/pokeball.png" alt="poke-ball" className="animate-spin w-8 h-8" /></button>
        </form>
      </div>
    </header>
  );
};

export default NameForm;