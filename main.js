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
  solutionDisplay.value = eval(operationDisplay.value);
  showEqualsSign();
};
equalsKey.addEventListener("click", () => evaluate());

// || DELETE FUNCTION
const deleteKey = document.querySelector(".delete-key");
const del = () => {
  if (operationDisplay.value.length !== 0) {
    operationDisplay.value = operationDisplay.value.slice(0, -1);
  }
  hideEqualsSign();
};
deleteKey.addEventListener("click", () => del());
