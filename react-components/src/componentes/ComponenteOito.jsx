/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function ComponenteOito(props) {
  function condicao() {
    if (props.valor >= 10) {
      return <p>O valor é igual ou superior a 10</p>;
    } else {
      return <p>O valor é inferior a 10</p>;
    }
  }

  return (
    <div className="componente">
      <p className="titulo">Título: {props.titulo}</p>
      {condicao()}
    </div>
  );
}
