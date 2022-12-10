import React from "react";
import { Container } from "./styles";

function Filter(props) {
  return (
    <Container>
      <label>Valor Mínimo:</label>
      <input type="number" placeholder="Buscar pelo Valor Máximo" />

      <label>Valor Máximo:</label>
      <input type="text" placeholder="Buscar pelo Valor Máximo" />

      <label>Buscar por Nome:</label>
      <input onChange={props.handleTxt} type="text" placeholder="Buscar pelo Nome" />
    </Container>
  );
}
export default Filter;
