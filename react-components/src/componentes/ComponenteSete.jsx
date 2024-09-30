/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function ComponenteSete(props) {
  return (
    <div className="componente">
      <p className="titulo">Título: {props.titulo}</p>
      {props.valor ? (
        <div>
          <p>Análise do valor</p>
          <p>Verdadeiro</p>
        </div>
      ) : (
        <div>
          <p>Análise do valor</p>
          <p>Falso</p>
        </div>
      )}
    </div>
  );
}
