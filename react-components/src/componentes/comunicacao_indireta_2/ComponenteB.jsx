/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function ComponenteB(props) {
  let valor1 = 0;
  function executar() {
    valor1 = Math.random();
    props.funcao("Valor: " + valor1, "Brenon");
  }
  return (
    <div className="componente">
      <p className="titulo">Título: {props.titulo}</p>
      <button onClick={executar}>Executar</button>
      <p>{valor1}</p>
    </div>
  );
}
