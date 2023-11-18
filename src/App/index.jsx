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

const evaluate = (currentOperand, previousOperand, operation) => {
  const firstNumber = parseFloat(currentOperand);
  const secondNumber = parseFloat(previousOperand);
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return "";
  }

  let computation = "";

  switch (operation) {
    case "+":
      computation = firstNumber + secondNumber;
      break;
    case "-":
      computation = firstNumber - secondNumber;
      break;
    case "*":
      computation = firstNumber * secondNumber;
      break;
    case "÷":
      computation = firstNumber / secondNumber;
      break;

    default:
      computation = "";
  }

  return computation.toString();
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (
        typeof state.currentOperand === "string" &&
        state.currentOperand.includes(".") &&
        payload.digit === "."
      ) {
        return state;
      }

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
      if (!state.currentOperand) {
        return state;
      }

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
      if (!state.operation && !state.currentOperand && state.previousOperand) {
        return {
          ...state,
          previousOperand: state.previousOperand.slice(0, -1),
        };
      }

      if (!state.currentOperand) {
        return {
          ...state,
          operation: null,
        };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    case ACTIONS.CLEAR:
      return (state = {});

    case ACTIONS.EVALUATE:
      if (!state.currentOperand || !state.previousOperand || !state.operation) {
        return state;
      }

      return {
        currentOperand: evaluate(
          state.currentOperand,
          state.previousOperand,
          state.operation
        ),
      };

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
      <Button onClick={() => dispatch({ type: ACTIONS.EVALUATE })} $spanTwo>
        =
      </Button>
    </Calculator>
  );
}

export default App;
