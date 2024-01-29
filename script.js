const square = (n) => {
  return n * n
}
let buttons = document.querySelectorAll("button")
let display = document.querySelector("input")
buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.innerText === "CE") {
      display.value = ""
    }
    else {
      if (button.innerText === "=") {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Wrong Semantics!!"
        }
      }
      else if (button.innerText === "sq(x)") {
        let inputValue = parseFloat(display.value);
        if (!isNaN(inputValue)) {
          display.value = inputValue * inputValue;
        }
      }
      else if (button.innerText === "+/-") {
        let inputValue = parseFloat(display.value)
        if (!isNaN(inputValue) && inputValue >= 0) {
          display.value = 0 - inputValue
        }
      }
      else {
        display.value += button.innerText;
      }
    }
  })
})


