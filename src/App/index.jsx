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

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (
        +state.currentOperand === 0 &&
        payload.digit !== "." &&
        state.currentOperand !== "0."
      ) {
        return { ...state, currentOperand: payload.digit };
      }

      if (
        (+state.currentOperand === 0 && +payload.digit === 0) ||
        (!state.currentOperand && payload.digit === ".")
      ) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (state.operation && payload.operation) {
        return { ...state, operation: payload.operation };
      }

      return {
        ...state,
        operation: payload.operation,
        previousOperand: state.currentOperand,
        currentOperand: null,
      };

    case ACTIONS.DELETE_DIGIT:
      if (!state.currentOperand) {
        return state;
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    case ACTIONS.CLEAR:
      return (state = {});

    default:
      state;
  }
};

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
      <Button $spanTwo>=</Button>
    </Calculator>
  );
}

export default App;
