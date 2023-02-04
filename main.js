const operationDisplay = document.querySelector(".operation"),
  solutionDisplay = document.querySelector(".solution");

const operandKeys = [...document.querySelectorAll(".operand-key")],
  operatorKeys = [...document.querySelectorAll(".operator-key")];

const operationKeys = [...operandKeys, ...operatorKeys];

const clearKey = document.querySelector(".reset-key");
const equalsKey = document.querySelector(".equals-key");

// || ADDING EVENT LISTENER FOR ALL OPERATION-KEYS
operationKeys.forEach((key) =>
  key.addEventListener(
    "click",
    (e) => (operationDisplay.value += e.target.value)
  )
);

const equalsSign = document.querySelector(".equals-sign");

// || SHOW EQUALS_SIGN FUNCTION
const showEqualsSign = () => {
  if (equalsSign.style.display != "grid") {
    equalsSign.style.display = "grid";
  }
};

// || HIDE EQUALS_SIGN FUNCTION
const hideEqualsSign = () => {
  if (equalsSign.style.display != "none") {
    equalsSign.style.display = "none";
  }
};

// || CLEAR FUNCTION
const clear = () => {
  (operationDisplay.value = ""), (solutionDisplay.value = "");
  hideEqualsSign();
};
clearKey.addEventListener("click", () => clear());

// || EVALUATION FUNCTION
const evaluate = () => {
  const replacementFunc = (operator) => {
    // if (operator == "&plus;") {
    //   return "PLUS!";
    // } else {
    //   console.log(operator);
    //   return " Negative! ";
    // }
    // if operator  == "−"
    // return "MINUS! "
    // if operator == "÷"
    // return "DIVIDE! "

    // |\+|−|÷
    console.log(operator);
    return operator;
    // console.log("Yes!");
  };

  // let processedAnswer = operationDisplay.value.replace(
  //   /\+.*×.*\+.*−.*×.*\+.*−.*÷.*×.*−.*÷/gi,
  //   replacementFunc()
  // );

  let answer = operationDisplay.value.replace("+", replacementFunc($&));
  console.log(answer);

  showEqualsSign();
  // solutionDisplay.value = eval(operationDisplay.value);
};
equalsKey.addEventListener("click", () => evaluate());

// || DELETE FUNCTION
const deleteKey = document.querySelector(".delete-key");
const del = () => {
  if (operationDisplay.value.length !== 0) {
    hideEqualsSign();
    operationDisplay.value = operationDisplay.value.slice(0, -1);
  }
};
deleteKey.addEventListener("click", () => del());
