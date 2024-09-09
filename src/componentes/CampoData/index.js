import "./CampoData.css";
import React, { useState } from "react";

function CampoData({ initialDate }) {
  const [data, setData] = useState(initialDate || "");

  const identificador = (evento) => {
    setData(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label htmlFor="date">Data de entrada: </label>
      <input
        type="date"
        id="date"
        name="date"
        value={data}
        onChange={identificador}
      />
      <p>Data selecionada: {data}</p>
    </div>
  );
}

export default CampoData;
