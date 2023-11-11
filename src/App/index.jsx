import { Button, Calculator, Numbers, ActionBar, Value } from "./styled";
import { useState } from "react";

function App() {
  const [visibleValue, setVisibleValue] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [action, setAction] = useState();

  const onFormSubmit = (event) => event.preventDefault();

  const onNumberClick = (number) => {
    if (!visibleValue) {
      setVisibleValue(number.toString());
      setFirstNumber((firstNumber) => `${firstNumber}${number}`);
      return;
    }

    if (visibleValue.includes("+", "-", "*", "/")) {
      setSecondNumber((secondNumber) => `${secondNumber}${number}`);
    } else {
      setFirstNumber((firstNumber) => `${firstNumber}${number}`);
    }

    setVisibleValue((visibleValue) => `${visibleValue}${number}`);
  };

  const onActionClick = (action) => {
    setAction((action) => action);
    setVisibleValue((visibleValue) => `${visibleValue} ${action} `);
  };

  const calculateResult = (action) => {
    setAction(undefined);

    switch (action) {
      default:
        setVisibleValue(Number(firstNumber) + Number(secondNumber));
        break;
      case "-":
        setVisibleValue(Number(firstNumber) - Number(secondNumber));
        break;
      case "*":
        setVisibleValue(Number(firstNumber) * Number(secondNumber));
        break;
      case "/":
        setVisibleValue(Number(firstNumber) / Number(secondNumber));
        break;
    }
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
        <Button onClick={() => calculateResult(action)}>=</Button>
      </ActionBar>
    </Calculator>
  );
}

export default App;
