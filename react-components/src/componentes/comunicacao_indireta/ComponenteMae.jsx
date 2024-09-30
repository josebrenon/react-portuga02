/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import ComponenteFilha from "./ComponenteFilha";
export default function ComponenteMae(props) {
  function clicou() {
    console.log("Botão da filha foi clicado");
  }

  return (
    <div className="componente">
      <p className="titulo">Título: {props.titulo}</p>
      <ComponenteFilha
        titulo="Componente filha"
        click={clicou}
      ></ComponenteFilha>
    </div>
  );
}
