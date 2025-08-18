const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "0";

function updateDisplay() {
  display.textContent = currentInput;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (value) {
      if (currentInput === "0" && value !== ".") {
        currentInput = value;
      } else {
        currentInput += value;
      }
    } else if (action === "clear") {
      currentInput = "0";
    } else if (action === "delete") {
      currentInput = currentInput.slice(0, -1) || "0";
    } else if (action === "equals") {
      try {
        currentInput = eval(currentInput.replace("÷", "/").replace("×", "*")).toString();
      } catch {
        currentInput = "Error";
      }
    }
    updateDisplay();
  });
});

updateDisplay();
