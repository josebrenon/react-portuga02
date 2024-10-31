import { useState } from "react";

export default function App() {
  const [num, setNum] = useState(1);

  const multiplicar = () => {
    if (isNaN(num)) return [];
    let produtos = [];
    for (let m = 1; m <= 10; m++) {
      produtos.push(`${num} x ${m} = ${num * m}`);
    }
    return produtos;
  };

  return (
    <>
      <h1>React Tabuada</h1>
      <hr />
      <input
        type="number"
        placeholder="Digite um número"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      {multiplicar().map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </>
  );
}
