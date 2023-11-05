document.addEventListener("DOMContentLoaded", function() {
    let display = document.getElementById("result");
    let currentInput = "";

    // Function to update display
    function updateDisplay() {
        display.value = currentInput;
    }

    // Function for interactivity
    function handleButtonClick(value) {
        if (value === "=") {
            // Evaluate the result
            try {
                currentInput = eval(currentInput);
                updateDisplay();

                // Check if result is prime
                if (isPrime(currentInput)) {
                    display.value += " (Prime)";
                }
            } catch (error) {
                currentInput = "Error";
                updateDisplay();
            }
        } else if (value === "C") {
            // Clear the display
            currentInput = "";
            updateDisplay();
        } else if (value === "+/-") {
            // Toggle between positive and negative numbers
            currentInput = -currentInput;
            updateDisplay();
        } else {
            // Append the value to the current input
            currentInput += value;
            updateDisplay();
        }
    }

    // Function to check for a prime number
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }  

    // Attach click event listeners to the buttons
    let buttons = document.querySelectorAll(".buttons button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            handleButtonClick(button.innerText);
        });
    });
});


