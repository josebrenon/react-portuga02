/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { v4 as uuid } from "uuid";
export default function Nomes({ nomes }) {
  return (
    <>
      {nomes.map((nome) => {
        return <p key={uuid()}>{nome}</p>;
      })}
    </>
  );
}
