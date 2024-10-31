import { useReducer } from "react";

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    valor: 1000,
    mostrar: true,
  });

  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENTAR":
        return {
          valor: state.valor + 1,
          mostrar: state.mostrar,
        };
      case "VISIBILIDADE":
        return {
          valor: state.valor,
          mostrar: !state.mostrar,
        };
      default:
        return state;
    }
  }

  return (
    <>
      <h1>React Hooks - useReducer</h1>
      <hr />
      <p>Valor: {state.valor}</p>
      {state.mostrar && <p>Visível</p>}
      <button onClick={() => dispatch({ type: "INCREMENTAR" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "VISIBILIDADE" })}>
        Mostrar/Esconder
      </button>
    </>
  );
}
