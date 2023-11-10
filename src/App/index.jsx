import { Button, Calculator, Numbers, ActionBar, Value } from "./styled";
import { useState } from "react";

function App() {
  const [visibleValue, setVisibleValue] = useState();
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [result, setResult] = useState();

  const onFormSubmit = (event) => event.preventDefault();

  const onNumberClick = (number) => {
    if (!visibleValue) {
      setVisibleValue(number);

      return;
    }

    setVisibleValue((visibleValue) => `${visibleValue}${number}`);
  };

  const onActionClick = (action) => {
    if (visibleValue.includes(action)) {
      return;
    }

    setVisibleValue((visibleValue) => `${visibleValue} ${action} `);
  };

  const calculateResult = () => {
    console.log(visibleValue);
    setVisibleValue((visibleValue) => +visibleValue);
    setVisibleValue(result);
  };

  return (
    <Calculator onSubmit={onFormSubmit}>
      <Value
        autoFocus
        value={visibleValue ?? ""}
        onChange={({ target }) => setVisibleValue(target.value)}
      />
      <Numbers>
        <Button onClick={() => onNumberClick(1)}>1</Button>
        <Button onClick={() => onNumberClick(2)}>2</Button>
        <Button onClick={() => onNumberClick(3)}>3</Button>
        <Button onClick={() => onNumberClick(4)}>4</Button>
        <Button onClick={() => onNumberClick(5)}>5</Button>
        <Button onClick={() => onNumberClick(6)}>6</Button>
        <Button onClick={() => onNumberClick(7)}>7</Button>
        <Button onClick={() => onNumberClick(8)}>8</Button>
        <Button onClick={() => onNumberClick(9)}>9</Button>
        <Button onClick={() => onNumberClick(0)}>0</Button>
      </Numbers>
      <ActionBar>
        <Button onClick={() => onActionClick("+")}>+</Button>
        <Button onClick={() => onActionClick("-")}>-</Button>
        <Button onClick={() => onActionClick("/")}>/</Button>
        <Button onClick={() => onActionClick("*")}>*</Button>
        <Button onClick={calculateResult}>=</Button>
      </ActionBar>
    </Calculator>
  );
}

export default App;
