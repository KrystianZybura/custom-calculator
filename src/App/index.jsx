import {
  Button,
  Calculator,
  CurrentOperand,
  Output,
  PreviousOperand,
} from "./styled";

function App() {
  return (
    <Calculator>
      <Output>
        <PreviousOperand>1234,234 *</PreviousOperand>
        <CurrentOperand>123,34536</CurrentOperand>
      </Output>
      <Button $spanTwo>AC</Button>
      <Button>DEL</Button>
      <Button>÷</Button>
      <Button>1</Button>
      <Button>3</Button>
      <Button>2</Button>
      <Button>*</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>+</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>-</Button>
      <Button>0</Button>
      <Button>.</Button>
      <Button $spanTwo>=</Button>
    </Calculator>
  );
}

export default App;
