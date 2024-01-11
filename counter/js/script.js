const numberHolder = document.getElementById("number");
const resetButton = document.getElementById("reset");
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");

let counter = 0;

/**
 * Function to reset the counter.
 * Here resetCounter is called when the reset button is clicked.
 * Notice that resetCounter is without ().
 * By doing so the function is called only when needed.
 * If you would add the brackets the function will be called when the event listener is attached (so immediately).
 */
resetButton.addEventListener("click", resetCounter);

function resetCounter() {
    counter = 0;
    showNumber();
}

/**
 * Function to increase the counter.
 * Here we use an anonymous function.
 */
increaseButton.addEventListener("click", function() {
    counter++;
    showNumber();
});

/**
 * Function to decrease the counter.
 * Here we use ES6 arrow functions.
 */
decreaseButton.addEventListener("click", () => {
    counter--;
    showNumber();
});


/**
 * Displays the current counter value on the page.
 */
function showNumber() {
    numberHolder.textContent = counter;
}
