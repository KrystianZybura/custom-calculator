import { ACTIONS } from "../actions";
import { Button } from "../styled";

const DigitButton = ({ digit, dispatch }) => (
  <Button
    onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
  >
    {digit}
  </Button>
);

export default DigitButton;
