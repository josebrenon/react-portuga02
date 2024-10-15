/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [tarefa, setTarefa] = useState("");
  const [listaTarefas, setListaTarefas] = useState([]);

  const idTarefa = useRef(0);
  const inputTarefa = useRef();

  useEffect(() => {
    inputTarefa.current.focus();
  });

  function addTarefa() {
    inputTarefa.current.focus();
    if (tarefa.trim() === "") {
      return alert("Por favor preencha com uma tarefa!");
    }
    setListaTarefas((old) => {
      return [...old, { id: idTarefa.current, texto: tarefa }];
    });
    idTarefa.current++;
    setTarefa("");
    inputTarefa.current.focus();
  }
  function deletarTarefa(id) {
    const tmp = listaTarefas.filter((tarefa) => tarefa.id !== id);
    setListaTarefas(tmp);
    inputTarefa.current.focus();
  }

  return (
    <>
      <h1>Lista de tarefas 01</h1>
      <hr />
      <input
        ref={inputTarefa}
        type="text"
        placeholder="Adicione uma tarefa"
        value={tarefa}
        onChange={(e) => {
          setTarefa(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTarefa();
          }
        }}
      />{" "}
      <button onClick={addTarefa}>Adicionar tarefa</button>{" "}
      <button
        onClick={() => {
          setListaTarefas([]);
          idTarefa.current = 0;
          inputTarefa.current.focus();
        }}
      >
        Deletar todas
      </button>
      <div>
        {listaTarefas.map((t) => {
          return (
            <p key={t.id}>
              {t.texto} -{" "}
              <strong
                onClick={() => {
                  deletarTarefa(t.id);
                }}
              >
                [Deletar]
              </strong>
            </p>
          );
        })}
      </div>
    </>
  );
}
