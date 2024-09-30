/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Comment.css";

export default function Comment(props) {
  function Maiusculas(texto) {
    return texto.toUpperCase();
  }
  return (
    <>
      <section className="comment">
        <p className="title">{Maiusculas(props.title)}</p>
        <p className="text">Texto do comentário</p>
        <p className="author">Autor: {props.author}</p>
      </section>
    </>
  );
}
