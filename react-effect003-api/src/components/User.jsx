/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function User({ usuario }) {
  return (
    <>
      <div className="user-container">
        Nome:{" "}
        <strong>
          {usuario.firstName} {usuario.lastName}
        </strong>{" "}
        Idade: <strong>{usuario.age}</strong>
        <br />
        Email: <strong>{usuario.email}</strong>
        <br />
        Logo:
        <br />
        <img src={usuario.image} alt="foto do usuário" />
      </div>
    </>
  );
}
