import { ACTIONS } from "./actions";
import { evaluate } from "./evaluate";

export const reducer = (state, { type, payload }) => {
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
      if (state.previousOperand) {
        return { ...state, operation: payload.operation };
      }

      if (!state.currentOperand) {
        return state;
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
          state.previousOperand,
          state.currentOperand,
          state.operation
        ),
      };

    default:
      state;
  }
};
