import { ACTIONS } from "../actions";
import { Button } from "../styled";

const OperationButton = ({ operation, dispatch }) => (
  <Button
    onClick={() =>
      dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
    }
  >
    {operation}
  </Button>
);

export default OperationButton;
