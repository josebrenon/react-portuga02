import { useState } from "react";

export default function App() {
  const [valor, setValor] = useState(1);

  const multiplicar = () => {
    if (isNaN(valor)) return [];

    let produtos = [];
    for (let n = 1; n <= 10; n++) {
      produtos.push(`${valor} x ${n} = ${valor * n}`);
    }
    return produtos;
  };

  return (
    <>
      <h1>React Tabuada</h1>
      <hr />

      <input
        type="number"
        onChange={(e) => {
          setValor(parseInt(e.target.value));
        }}
        value={valor}
        placeholder="Digite um número"
      />
      {multiplicar().map((item) => (
        <p key={item}>{item}</p>
      ))}
    </>
  );
}
