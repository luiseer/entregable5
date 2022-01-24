import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    <section>
      <h1>Pokemon</h1>
      <form onSubmit={submit}>
        <label>
          <div>Coloca tu nombre</div>
          <input
          className="border border-black"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button><i className=" text-red-500 text-2xl fas fa-arrow-right"></i></button>
      </form>
    </section>
  );
};

export default NameForm;