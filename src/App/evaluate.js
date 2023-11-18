export const evaluate = (firstNumber, secondNumber, operation) => {
  if (isNaN(+firstNumber) || isNaN(+secondNumber)) {
    return "";
  }

  let computation = "";

  switch (operation) {
    case "+":
      computation = +firstNumber + +secondNumber;
      break;
    case "-":
      computation = +firstNumber - +secondNumber;
      break;
    case "*":
      computation = +firstNumber * +secondNumber;
      break;
    case "÷":
      computation = +firstNumber / +secondNumber;
      break;

    default:
      computation = "";
  }

  return computation.toString();
};
