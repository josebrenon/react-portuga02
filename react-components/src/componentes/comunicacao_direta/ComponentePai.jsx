/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ComponenteFilho from "./ComponenteFilho";

export default function ComponentePai(props) {
  return (
    <div className="componente">
      <p className="titulo">Título: {props.titulo}</p>
      <p>Pai</p>
      <ComponenteFilho titulo="Componente filho" cargo="Administrador">
        José Brenon
      </ComponenteFilho>
      <ComponenteFilho titulo="Componente filho" cargo="Gerente">
        Lúcia Helena
      </ComponenteFilho>
    </div>
  );
}
