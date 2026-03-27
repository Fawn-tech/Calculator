let history =[];

// Function to add a new entry to the history
function addToHistory(num1, num2, operator, result) {
     history.push({
    num1: num1,
    operator: operator,
    num2: num2,
    result: result
  });
}


    // Addition
    function add(num1, num2) {
        let result = num1 + num2;
        addToHistory(num1, num2, '+', result);
        return result;
    }

    // Subtraction
    function subtract(num1, num2) {
        let result = num1 - num2;
        addToHistory(num1, num2, '-', result);
        return result;
    }       

    // Multiplication
    function multiply(num1, num2) {
        let result = num1 * num2;
        addToHistory(num1, num2, '*', result);
        return result;
    }

    // Division
    function divide(num1, num2) {
        if (num2 === 0) {
            return "Error: Division by zero";
        }

    
        let result = num1 / num2;
        addToHistory(num1, num2, '/', result);
        return result;
    }

    // Display history

    function displayHistory() {
     if (history.length === 0) {
    console.log("No calculations stored yet.");
    return;
  }

  console.log("Calculation History:");
  for (let i = 0; i < history.length; i++) {
    console.log(
      `${history[i].num1} ${history[i].operator} ${history[i].num2} = ${history[i].result}`
    );
  }
}

    //Test the calculator
    console.log(add(2000,500 )); // 2500
    console.log(subtract(4090, 30)); // 4060
    console.log(multiply(15, 3)); // 45
    console.log(divide(15, 3)); // 5

    displayHistory();


