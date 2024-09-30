/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function ComponenteFilho(props) {
  return (
    <div className="componente">
      <p className="titulo">Título: {props.titulo}</p>
      <p>
        Nome: {props.children} | Cargo: {props.cargo}
      </p>
    </div>
  );
}
