/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [texto, setTexto] = useState("");
  const inputRef = useRef();
  const input2Ref = useRef();

  function focus1() {
    inputRef.current.focus();
  }
  function focus2() {
    input2Ref.current.focus();
  }

  return (
    <>
      <h1>React Hooks - useRef</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        value={texto}
        onChange={(evento) => {
          setTexto(evento.target.value);
        }}
      />
      <input ref={input2Ref} type="text" />
      <hr />
      <button onClick={focus1}>Clicar focus 1</button>
      <button onClick={focus2}>Clicar focus 2</button>
    </>
  );
}
