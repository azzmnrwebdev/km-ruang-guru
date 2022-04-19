// handle when the number is pressed. It renders the number into #input element
function number(number) {
  // TODO: answer here
  let input = document.getElementById("input");
  if (input.value == "0") {
    input.value = number;
  } else {
    input.value += number;
  }
}

// handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
  let input = document.getElementById("input");
  if (operator == "Del") {
    // TODO: answer here
    input.value = input.value.slice(0, -1);
  } else if (operator == "AC") {
    // TODO: answer here
    input.value = "";
  } else if (operator === "+") {
    input.value += "+";
  } else if (operator === "-") {
    input.value += "-";
  } else if (operator === "*") {
    input.value += "*";
  } else if (operator === "/") {
    input.value += "/";
  } else if (operator === ".") {
    input.value += ".";
  }
}

// handle when = button is pressed. It renders the result into #input element
function calculate() {
  // TODO: answer here
  let input = document.getElementById("input");
  try {
    input.value = eval(input.value);
  } catch (e) {
    (input.value = "0"), (input.value = "0");
    input.value = eval(input.value);
  }
}
