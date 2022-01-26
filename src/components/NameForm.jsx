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
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button className="text-2xl"><i className="fab fa-react"></i></button>
      </form>
    </section>
  );
};

export default NameForm;