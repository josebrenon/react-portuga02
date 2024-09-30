/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function ComponenteFilha(props) {
  return (
    <div className="componente">
      <p className="titulo">Título: {props.titulo}</p>
      <button onClick={props.click}>Clicar</button>
    </div>
  );
}
