/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import ComponenteB from "./ComponenteB";

export default function ComponenteA(props) {
  function executar(valor1, valor2) {
    console.log(valor1);
    console.log(valor2);
  }
  return (
    <div className="componente">
      <p className="titulo">Título: {props.titulo}</p>
      <ComponenteB titulo="Filho B" funcao={executar} />
    </div>
  );
}
