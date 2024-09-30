/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import ComponenteCinco from "./ComponenteCinco";

const ComponenteQuatro = (props) => {
  return (
    <div className="componente">
      <p className="titulo">Título: {props.titulo}</p>
      <ComponenteCinco texto="propriedade do componente" />
      <ComponenteCinco texto="propriedade do componente" />
      <ComponenteCinco texto="propriedade do componente" />
    </div>
  );
};
export default ComponenteQuatro;
