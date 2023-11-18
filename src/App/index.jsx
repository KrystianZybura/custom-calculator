import { useReducer } from "react";
import {
  Button,
  Calculator,
  CurrentOperand,
  Output,
  PreviousOperand,
} from "./styled";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import { ACTIONS } from "./actions";
import { reducer } from "./reducer";

function App() {
  const [{ previousOperand, currentOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <Calculator>
      <Output>
        <PreviousOperand>
          {previousOperand} {operation}
        </PreviousOperand>
        <CurrentOperand>{currentOperand}</CurrentOperand>
      </Output>
      <Button onClick={() => dispatch({ type: ACTIONS.CLEAR })} $spanTwo>
        AC
      </Button>
      <Button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
        DEL
      </Button>
      <OperationButton operation={"÷"} dispatch={dispatch} />
      <DigitButton dispatch={dispatch} digit={"1"} />
      <DigitButton dispatch={dispatch} digit={"2"} />
      <DigitButton dispatch={dispatch} digit={"3"} />
      <OperationButton operation={"*"} dispatch={dispatch} />
      <DigitButton dispatch={dispatch} digit={"4"} />
      <DigitButton dispatch={dispatch} digit={"5"} />
      <DigitButton dispatch={dispatch} digit={"6"} />
      <OperationButton operation={"+"} dispatch={dispatch} />
      <DigitButton dispatch={dispatch} digit={"7"} />
      <DigitButton dispatch={dispatch} digit={"8"} />
      <DigitButton dispatch={dispatch} digit={"9"} />
      <OperationButton operation={"-"} dispatch={dispatch} />
      <DigitButton dispatch={dispatch} digit={"."} />
      <DigitButton dispatch={dispatch} digit={"0"} />
      <Button onClick={() => dispatch({ type: ACTIONS.EVALUATE })} $spanTwo>
        =
      </Button>
    </Calculator>
  );
}

export default App;
