const screen = document.getElementById("Screen");
const buttons = document.querySelectorAll("#Buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        screen.value = eval(
          screen.value.replace("÷", "/").replace("x", "*")
        );
      } catch (e) {
        screen.value = "Error";
      }
    } else {
      screen.value += value;
    }
  });
});