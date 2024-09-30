/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CondicaoIf from "./CondicaoIf";

export default function ComponenteNove(props) {
  return (
    <div className="componente">
      <p className="titulo">Título: {props.titulo}</p>
      <p>Nome: {props.valor}</p>
      <CondicaoIf condicao={props.valor == "Brenon"}>
        <p>Verdadeiro, é o meu nome!</p>
      </CondicaoIf>

      <CondicaoIf condicao={props.valor == "Lucia"}>
        <p>É a minha mãe!</p>
      </CondicaoIf>
      <CondicaoIf
        condicao={props.valor !== "Lucia" && props.valor !== "Brenon"}
      >
        <p>Não conheço essa pessoa!</p>
      </CondicaoIf>
    </div>
  );
}
