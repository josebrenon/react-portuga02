/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function App() {
  const [valor, setValor] = useState(() => {
    return 10;
  });

  function decremento() {
    setValor((valor_antigo) => valor_antigo - 1);
  }

  function incremento() {
    setValor((valor_antigo) => valor_antigo + 1);
  }

  return (
    <>
      <h1>React Hooks!</h1>
      <hr />
      <button onClick={decremento}>Decremento</button>
      <span>{valor}</span>
      <button
        onClick={() => {
          setValor((valor_atual) => valor_atual + 1);
        }}
      >
        Incremento
      </button>
    </>
  );
}
