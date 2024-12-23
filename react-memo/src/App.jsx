import { useState, useEffect, useMemo } from "react";
export default function App() {
  const [valor, setValor] = useState(0);
  const [numero, setNumero] = useState(1000);

  //   const valorCalculado = funcaoDemorada(valor);
  const valorCalculado = useMemo(() => {
    return funcaoDemorada(valor);
  }, [valor]);

  useEffect(() => {
    console.log("render");
  });

  function incrementar() {
    setValor((oldValor) => oldValor + 1);
  }
  function incrementar2() {
    setNumero((oldNumero) => oldNumero + 100);
  }

  function funcaoDemorada(num) {
    for (let i = 0; i < 1000000000; i++);

    return num * 2;
  }

  return (
    <>
      <h1>React Hooks - useMemo</h1>
      <hr />
      <p>Valor: {valor}</p>
      <p>Numero: {numero}</p>
      <p>Valor calculado: {valorCalculado}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={incrementar2}>Incrementar 2</button>
    </>
  );
}
