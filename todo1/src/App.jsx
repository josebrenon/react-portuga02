/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react"; //* Importando os Hooks
import Icone from "./assets/icon.png"; //* Importando a imagem

export default function App() {
  const [tarefa, setTarefa] = useState(""); //* Criando o um state do tipo string para as tarefas
  const [listaTarefas, setListaTarefas] = useState([]); //* Criando o um state do tipo array para as tarefas

  const idTarefa = useRef(0); //* Criando um state do tipo number usando o useRef para o id da tarefa
  const inputTarefa = useRef(); //* Criando um state do tipo useRef para o input da tarefa

  useEffect(() => {
    inputTarefa.current.focus();
  }); //* UseEffect para focar no input quando a página for carregada

  //* Função para adicionar uma tarefa na lista de tarefas
  function addTarefa() {
    inputTarefa.current.focus();
    if (tarefa.trim() === "") {
      return alert("Por favor preencha com uma tarefa!");
    }
    setListaTarefas((old) => {
      return [
        ...old,
        { id: idTarefa.current, texto: tarefa, isCompleted: false },
      ];
    });
    idTarefa.current++;
    setTarefa("");
    inputTarefa.current.focus();
  }
  //* Função para deletar uma tarefa da lista de tarefas
  function deletarTarefa(id) {
    const tmp = listaTarefas.filter((tarefa) => tarefa.id !== id);
    setListaTarefas(tmp);
    inputTarefa.current.focus();
  }
  //* Função para marcar uma tarefa como concluída ou não concluída
  function clicou(index) {
    const listaAux = [...listaTarefas];
    listaAux[index].isCompleted = !listaAux[index].isCompleted;
    setListaTarefas(listaAux);
  }

  //* Retornando o componente JSX com a lista de tarefas
  return (
    <>
      <h1>Lista de tarefas 01</h1>
      <div className="container">
        <input //* Input para adicionar uma tarefa na lista de tarefas
          ref={inputTarefa} //* Ref para o input da tarefa
          type="text"
          placeholder="Adicione uma tarefa"
          value={tarefa} //* Referenciando o state da tarefa para o input
          onChange={(e) => {
            setTarefa(e.target.value);
          }} //* Atualizando o state da tarefa quando o input for alterado
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTarefa();
            }
          }} //* Quando o usuário apertar a tecla Enter, a função addTarefa será chamada
        />{" "}
        <button className="add" onClick={addTarefa}>
          {" "}
          {/* //* Botão para adicionar a tarefa * */}
          Adicionar tarefa
        </button>{" "}
      </div>
      <div className="tarefas">
        {/* //* Aqui tem uma renderização condicional que caso não haja nada na lista ele mostra uma imagem e se tiver algo nela renderiza a lista */}
        {listaTarefas.length < 1 ? (
          <img className="icone-central" src={Icone} />
        ) : (
          //* Aqui tem uma renderização de cada item da lista de tarefas através do .map() */
          listaTarefas.map((t, index) => {
            return (
              <div
                key={t.id}
                className={t.isCompleted ? "item completo" : "item"} //* Se a tarefa estiver concluída, ela recebe a classe "item" e se não recebe a classe "item completo" */}
              >
                {/*//* Quando clicar no span executara a função clicou passando o index da tarefa clicada */}
                <span
                  onClick={() => {
                    clicou(index);
                  }}
                >
                  {t.texto} {/*//* Aqui mostra o texto da tarefa * */}
                </span>{" "}
                <button /*//* Botão para deletar a tarefa * */
                  className="dell"
                  onClick={() => {
                    deletarTarefa(t.id);
                  }}
                >
                  Deletar
                </button>
              </div>
            );
          })
        )}
        {/* //* Aqui tem uma renderização condicional que só mostrara o botão de deletar todas as tarefas caso a lista não esteja vazia*/}
        <div className="container-dellAll">
          {listaTarefas.length > 0 && (
            <button
              className="dellAll"
              onClick={() => {
                setListaTarefas([]);
                idTarefa.current = 0;
                inputTarefa.current.focus();
              }}
            >
              Deletar todas
            </button>
          )}
        </div>
      </div>
    </>
  );
}
