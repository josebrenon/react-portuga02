/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import clientes from "../dados_clientes/dados_clientes";

export default function ComponenteSeis(props) {
  function cliente() {
    return clientes.map((cliente) => {
      return (
        <li key={cliente.id_cliente}>
          Nome: {cliente.nome} | Email: {cliente.email}
        </li>
      );
    });
  }
  return (
    <div className="componente">
      <p className="titulo">Título: {props.titulo}</p>
      {cliente()}
      <ul></ul>
    </div>
  );
}
