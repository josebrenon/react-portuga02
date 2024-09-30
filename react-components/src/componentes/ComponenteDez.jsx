/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function ComponenteDez(props) {
  const estilo = {
    color: props.corTexto,
    padding: "10px",
    backgroundColor: "yellow",
  };

  return (
    <div className="componente">
      <p className="titulo">Título: {props.titulo}</p>
      <p style={estilo}>Texto do parágrafo</p>
    </div>
  );
}
