// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import ComponenteUm from "./componentes/ComponenteUm";
import ComponenteDois from "./componentes/ComponenteDois";
import ComponenteTres from "./componentes/ComponenteTres";
import ComponenteQuatro from "./componentes/ComponenteQuatro";
import ComponenteSeis from "./componentes/ComponenteSeis";
import ComponenteSete from "./componentes/ComponenteSete";
import ComponenteOito from "./componentes/ComponenteOito";
import ComponenteNove from "./componentes/ComponenteNove";
import ComponenteDez from "./componentes/ComponenteDez";
import ComponentePai from "./componentes/comunicacao_direta/ComponentePai";
import ComponenteMae from "./componentes/comunicacao_indireta/ComponenteMae";
import ComponenteA from "./componentes/comunicacao_indireta_2/ComponenteA";
import ComponenteAvoA from "./componentes/comunicacao_direta_2/ComponenteAvoA";

export default function App() {
  return (
    <>
      <ComponenteAvoA titulo="Componente Avo" />

      <ComponenteA titulo="Comunicação indireta 2" />

      <ComponenteMae titulo="Comunicação indireta" />

      <ComponentePai titulo="Cominicação direta" />

      <ComponenteDez titulo="Componente Dez" corTexto="#780000" />

      <ComponenteNove titulo="Componente Nove" valor="Brenon" />

      <ComponenteOito titulo="Componente Oito" valor={1} />

      <ComponenteSete titulo="Componente Sete" valor={1} />

      <ComponenteSeis titulo="Componente Seis" />

      <ComponenteQuatro titulo="Componente Quatro" />

      <ComponenteTres
        titulo="Componente Três"
        subtitulo={"Texto do componente três"}
      />

      <ComponenteDois />

      <ComponenteUm />
    </>
  );
}
