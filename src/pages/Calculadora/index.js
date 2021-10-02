import { useState, useEffect } from "react";

import Input from "../../components/Input";
import "./styles.css";

const Calculadora = () => {
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);

  const [totalValue, setTotalValue] = useState();

  const handleSumibt = (event) => {
    event.preventDefault();

    setTotalValue(parseFloat(firstValue) + parseFloat(secondValue));
  };

  return (
    <form onSubmit={handleSumibt}>
      <h1 className="title">Calculadora</h1>

      <div className="inputGroup">
        <Input
          name="firstValue"
          value={firstValue}
          onChange={(event) => setFirstValue(event.target.value)}
          required
        />

        <Input
          name="secondValue"
          value={secondValue}
          onChange={(event) => setSecondValue(event.target.value)}
          required
        />

        <button type="submit">Calcular</button>
      </div>

      <div className="result">
        <h2>Resultado: {totalValue}</h2>
      </div>
    </form>
  );
};

export default Calculadora;
