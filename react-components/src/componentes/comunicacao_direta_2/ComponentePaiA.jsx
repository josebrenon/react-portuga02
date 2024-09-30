/* eslint-disable no-unused-vars */
import React from "react";
import ComponenteFilhoA from "./ComponenteFilhoA";

export default function ComponentePaiA(props) {
  return (
    <div className="componente">
      <p className="titulo">Pai</p>
      <ComponenteFilhoA {...props} />
    </div>
  );
}
