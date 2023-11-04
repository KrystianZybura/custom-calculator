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

    setValue((value) => value + number);
  };

  return (
    <Calculator onSubmit={onFormSubmit}>
      <Value
        value={value ?? ""}
        onChange={({ target }) => setValue(target.value)}
      />
      <Numbers>
        <Button onClick={() => onNumberClick(1)}>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>0</Button>
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
