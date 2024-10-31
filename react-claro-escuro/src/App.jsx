import { useState } from "react";

export default function App() {
  const [escuro, setEscuro] = useState(false);
  const tema = {
    backgroundColor: escuro ? "black" : "white",
    color: escuro ? "White" : "black",
  };
  function mudarTema() {
    setEscuro(!escuro);
  }

  return (
    <div style={tema}>
      <h1>React - Tema claro / Escuro</h1>
      <hr />
      <button onClick={mudarTema}>Tema claro/escuro</button>
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
      consectetur totam ullam porro quidem eaque minima unde natus tempora quae
      doloremque eligendi eum fugiat eos perferendis ipsam in, fugit alias!
      Quaerat aperiam repellendus tempora architecto saepe optio reiciendis, nam
      quod quam magnam nostrum, quidem ipsa facere at! Quo suscipit rerum esse
      debitis, quaerat odit aspernatur delectus, animi ea aliquam accusamus? Ab
      architecto hic ad libero. Unde quidem nam sequi aliquid? Beatae asperiores
      aliquam illo sequi quo similique voluptates labore, nisi tempora harum.
      Dignissimos saepe dolor, error veritatis corrupti possimus quidem?
      Suscipit inventore earum ipsum mollitia vel laborum, expedita officiis,
      quis doloribus fuga veritatis aperiam ad tempore ducimus asperiores
      quibusdam facilis voluptatum aliquid eveniet molestias assumenda.
      Voluptate voluptatum error necessitatibus nisi? Suscipit cupiditate
      voluptate consequuntur quaerat eaque aut nihil perferendis porro libero
      cumque, facere rem accusamus dignissimos maxime perspiciatis ipsa delectus
      quas vel nesciunt est in, expedita incidunt officia. Ab, animi? At vitae
      aliquid adipisci optio provident porro ex possimus est tempora quasi?
      Odio, ullam tenetur harum enim, quia saepe dolorem adipisci at sit culpa
      facilis maxime iure dicta quam veniam. Rem, nulla dicta hic adipisci optio
      magni cumque provident corporis sapiente illo facilis sed illum veniam
      consequuntur vitae quisquam ipsam, commodi itaque tempora obcaecati rerum.
      Qui, eius quia. Cum, pariatur? Suscipit omnis impedit nesciunt odit
      facere, quos eaque nisi pariatur et? Amet rerum iusto voluptatibus
      assumenda nemo. Temporibus architecto qui totam voluptate corporis aut, ex
      error officiis consectetur? Inventore, sequi! Ipsam consequuntur deleniti
      eos quod sit animi illo assumenda cupiditate officia error tenetur
      similique consectetur, dolores quidem hic nobis laborum adipisci aperiam
      magnam unde facilis. Sed neque perferendis delectus! Est? Aut, nesciunt
      possimus quis temporibus id vero quibusdam iusto sequi excepturi porro
      rem. Dolorem animi in quidem fugiat vero eveniet mollitia, reprehenderit
      explicabo numquam quos, sint veritatis nam pariatur! Obcaecati!
    </div>
  );
}
