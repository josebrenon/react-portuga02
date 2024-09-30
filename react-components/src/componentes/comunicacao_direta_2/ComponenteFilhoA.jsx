/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function ComponenteFilhoA(props) {
  return (
    <div className="componente">
      <p className="titulo">
        Filho: {props.nome} {props.apelido}
      </p>
    </div>
  );
}
