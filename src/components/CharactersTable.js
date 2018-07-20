import React, { Component } from "react";
import Paper from "../components/Paper";
import Caracter from "./Caracter";

class CaractersTable extends Component {
  render() {
    return (
      <Paper title="Table de caractères" spacing={20}>
        <Caracter />
      </Paper>
    );
  }
}

export default CaractersTable;
