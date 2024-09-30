/* eslint-disable no-unused-vars */
import React from "react";
import ComponentePaiA from "./ComponentePaiA";

export default function ComponenteAvoA(props) {
  return (
    <div className="componente">
      <p className="titulo">Avô</p>
      <ComponentePaiA nome="José" apelido="Brenon" />
    </div>
  );
}
