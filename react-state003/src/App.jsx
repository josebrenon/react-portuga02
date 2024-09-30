/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function App() {
  // const [nome, setNome] = useState(() => {
  //   return "Brenon";
  // });
  // const alterar = () => {
  //   setNome((a) => {
  //     return "Joaquin";
  //   });
  // };

  const [player, setPlayer] = useState({
    name: "Brenon",
    score: 0,
  });

  function alterar() {
    setPlayer((pa) => {
      return {
        ...pa,
        score: pa.score + 1,
      };
    });
  }

  return (
    <>
      <h1>React Hooks!</h1>
      <hr />
      <h3>Nome: {player.name}</h3>
      <h3>Pontos: {player.score}</h3>
      {/* <h3>Nome: {nome}</h3>*/}
      <button onClick={alterar}>Alterar a pontuação</button>
    </>
  );
}
