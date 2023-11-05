import { Button, Calculator, Numbers, ActionBar, Value } from "./styled";
import { useState } from "react";

function App() {
  const [value, setValue] = useState();

  const onFormSubmit = (event) => event.preventDefault();

  const onNumberClick = (number) => {
    if (!value) {
      setValue(number);

      return;
    }

    setValue((value) => `${value}${number}`);
  };

  return (
    <Calculator onSubmit={onFormSubmit}>
      <Value
        value={value ?? ""}
        onChange={({ target }) => setValue(target.value)}
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
        <Button>+</Button>
        <Button>-</Button>
        <Button>/</Button>
        <Button>*</Button>
        <Button>=</Button>
      </ActionBar>
    </Calculator>
  );
}

export default App;
