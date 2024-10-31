import { useState } from "react";
import Nomes from "./Nomes";

export default function App() {
  const [nome, setNome] = useState("");
  const [nomes, setNomes] = useState([]);

  function guardarNome() {
    setNomes((tmp) => [...tmp, nome]);
  }

  return (
    <div>
      <h1>React Unique ID (uuid)</h1>
      <hr />
      <input
        type="text"
        onChange={(e) => {
          setNome(e.target.value);
        }}
        value={nome}
      />
      <button onClick={guardarNome}>Guardar nome</button>
      <hr />
      <Nomes nomes={nomes} />
    </div>
  );
}
