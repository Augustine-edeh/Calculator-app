const operationDisplay = document.querySelector(".operation"),
  solutionDisplay = document.querySelector(".solution"),
  inputs = [operationDisplay, solutionDisplay];

const operandKeys = [...document.querySelectorAll(".operand-key")],
  operatorKeys = [...document.querySelectorAll(".operator-key")];

const operationKeys = [...operandKeys, ...operatorKeys];

const clearKey = document.querySelector(".reset-key");
const equalsKey = document.querySelector(".equals-key");

const themeToggler = document.querySelector("#theme-toggler");

// || CHANGE THEME (Dark-Light Mode) FUNCTION
const changeTheme = () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeToggler.src = "./Images/sun.png";
    operandKeys.forEach((key) => (key.style.color = "#fff"));
    inputs.forEach((input) => (input.style.color = "#fff"));
  } else {
    themeToggler.src = "./Images/moon-solid.svg";
    operandKeys.forEach((key) => (key.style.color = "#000"));
    inputs.forEach((input) => (input.style.color = "#000"));
  }
};
themeToggler.addEventListener("click", changeTheme);

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
  let answer = operationDisplay.value.replace(
    /(\+)|(−)|(×)|(÷)|(%)|(²)/gi,
    ($$) => {
      if ($$ == "+") {
        return $$;
      }
      if ($$ == "−") {
        return "-";
      }
      if ($$ == "×") {
        return "*";
      }
      if ($$ == "÷") {
        return "/";
      }
      // || BROKEN LOGIC (LOGIC NOT WORKING)
      if ($$ == "%") {
        return "*(0.01)";
      }
      if ($$ == "²") {
        return "**2";
      }
    }
  );
  showEqualsSign();
  restoreOpacity();

  const errorChecker = (ans) => {
    try {
      if (!ans) {
        // || REDUCING FONT SIZE OF SOLUTION-DISPLAY TO ACCOMMODATE ERROR MESSAGE
        solutionDisplay.style.fontSize = "2rem";
        // || VIBRATE MOBILE DEVICES
        window.navigator.vibrate(200);
        return "Empty operation";
        // throw error("Enter a operation");
      }
      // || RESTORING FONT SIZE OF SOLUTION-DISPLAY TO NORMAL
      solutionDisplay.style.fontSize = "3.5rem";
      return eval(ans);
    } catch (error) {
      window.navigator.vibrate(200);
      return "Error";
    }
  };

  solutionDisplay.value = errorChecker(answer);
};
equalsKey.addEventListener("click", () => evaluate());

// || REDUCE OPACITY FUNCTION
const reduceOpacity = () => {
  solutionDisplay.style.opacity = "0.5";
};

const restoreOpacity = () => {
  solutionDisplay.style.opacity = "1";
};

// || DELETE FUNCTION
const deleteKey = document.querySelector(".delete-key");
const del = () => {
  if (operationDisplay.value.length !== 0) {
    hideEqualsSign();
    operationDisplay.value = operationDisplay.value.slice(0, -1);
  }
  reduceOpacity();
};
deleteKey.addEventListener("click", () => del());
