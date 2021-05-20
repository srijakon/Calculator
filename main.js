let firstValue = "";
let secondValue = "";
let calculate = "";
let isSecondValue = false;

const numberButtons = document.querySelectorAll(".number-btn");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");

numberButtons.forEach((number) => {
  number.addEventListener("click", () => {
    let value = number.innerHTML;

    if (isSecondValue === true) {
      secondValue = secondValue + value;
      display.value = secondValue;
      return;
    }

    firstValue = firstValue + value;
    display.value = firstValue;
  });
});

//button presses
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    let value = operator.innerHTML;

    //First check -- check if the button is C. If it is, clear the screen.
    if (value === "C") {
      firstValue = "";
      secondValue = "";
      display.value = firstValue;
      isSecondValue = false;
      return;
    }

    //Second check -- check if firstValue & the secondValue is empty. i.e, when
    //the user presses +, -, *, /, = and the firstValue and secondValue is empty
    //exit the loop.
    if (firstValue == "" && secondValue == "") {
      return; //return keyword is used to exit the loop (operators.forEach loop on line: 26)
    }

    if (value === "=") {
      isSecondValue = false; //When the user presses = that means we already got firstValue and secondValue so mark the isSecondValue as false.
      let result; //declare empty variable to store the result of any operation.

      //Addition
      if (calculate === "+") {
        result = parseInt(firstValue) + parseInt(secondValue); //calculate and store in result.
        display.value = result;
      }

      //Substraction
      if (calculate === "-") {
        result = parseInt(firstValue) - parseInt(secondValue);
        display.value = result;
      }

      //Multiplication
      if (calculate === "*") {
        result = parseInt(firstValue) * parseInt(secondValue);
        display.value = result;
      }

      //Division
      if (calculate === "/") {
        result = parseInt(firstValue) / parseInt(secondValue);
        display.value = result;
      }

      firstValue = "";
      secondValue = "";
      return;
    }

    calculate = value;
    isSecondValue = true;
    display.value = value;
  });
});
//   let value = operator.innerHTML;

//   if (value === "=") {
//     let result = eval(firstValue);
//     firstValue = "";
//     display.value = result;
//     return;
//   }
//   if (value === "C") {
//     firstValue = "";
//     display.value = firstValue;
//     return;
//   }
//   firstValue += value;
//   display.value = firstValue;
// });
// });

// keys.forEach((key) => {
//   key.addEventListener("click", () => {
//     let value = key.innerHTML;

//     firstValue = firstValue + value;

//     display.value = firstValue;
//   });
// });

// for(int i = 0; i < keys.)

// equals.addEventListener("click", () => console.log(eval(display.value)));

// numberButtons.addEventListener("click", (numbers) => {
//   display.innerHTML =
// });
