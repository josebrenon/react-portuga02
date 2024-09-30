// eslint-disable-next-line no-unused-vars
import React from "react";
import Comment from "./components/Comment";

export default function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Comentários</h1>
      <Comment title="Comentário Um" author="Brenon" />
      <Comment title="Comentário Dois" author="Lúcia" />
      <Comment title="Comentário Três" author="Alline" />
    </>
  );
}
