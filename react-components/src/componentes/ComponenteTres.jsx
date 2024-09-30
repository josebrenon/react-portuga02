/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import React from "react";

// export default (props) => (
//   <div className="componente">
//     <p>Título: {props.titulo}</p>
//   </div>
// );

const ComponenteTres = ({ titulo, subtitulo }) => {
  return (
    <div className="componente">
      <p className="titulo">Título: {titulo}</p>
      <p>Subtítulo: {subtitulo}</p>
    </div>
  );
};
export default ComponenteTres;
