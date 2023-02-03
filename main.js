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

// || CLEAR FUNCTION
const clear = () => {
  (operationDisplay.value = ""), (solutionDisplay.value = "");
};
clearKey.addEventListener("click", () => clear());

// || EVALUATION FUNCTION
const evaluate = () => {
  solutionDisplay.value = eval(operationDisplay.value);
};
equalsKey.addEventListener("click", () => evaluate());

// || DELETE FUNCTION
const deleteKey = document.querySelector(".delete-key");
const del = () => {
  let lastValue = operationDisplay.value[operationDisplay.value.length - 1];
  if (operationDisplay.value.length !== 0) {
    operationDisplay.value = operationDisplay.value.slice(
      0,
      operationDisplay.value.length - 1
    );
  }
};
deleteKey.addEventListener("click", () => del());
