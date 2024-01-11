/**
 * Generate a random number between 1 and 100.
 * Record the turn number the player is on. Start it on 1.
 * Provide the player with a way to guess what the number is.
 * Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
 * Next, check whether it is the correct number.
 * If it is correct:
 * 		Display congratulations message.
 * 		Stop the player from being able to enter more guesses (this would mess the game up).
 * 		Display control allowing the player to restart the game.
 * If it is wrong and the player has turns left:
 * 		Tell the player they are wrong and whether their guess was too high or too low.
 * 		Allow them to enter another guess.
 * 		Increment the turn number by 1.
 * If it is wrong and the player has no turns left:
 * 		Tell the player it is game over.
 * 		Stop the player from being able to enter more guesses (this would mess the game up).
 * 		Display control allowing the player to restart the game.
 * Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.
 */

// kb 2 órába telt ezt megcsinálni ~~~~~~~~~~~~~~~~~~~~~~~~

// returns a random whole number between 0 and a specified number
function random(number) {
	return Math.floor(Math.random() * number);
}

// variables
const guess = document.getElementById("guess");
const submitButton = document.querySelector("#submit-button");
const restartButton = document.querySelector("#restart-button");
const boxContainer = document.getElementById("box-container");
let randomNumber = random(100);
let tries = 10;
let message = document.querySelector(".message");
let hint = document.querySelector(".hint");
// event listeners
submitButton.addEventListener("click", checkGuess); // param nélküli függvényhíváshoz nem kell () ebben az esetben (ha kirakod a fuggvény végrehajtódik autómatikusan)
guess.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		checkGuess();
	}
});
restartButton.addEventListener("click", (e) => {
	randomNumber = random(100);
	tries = 10;
	setupWindow();
});
window.addEventListener("load" , setupWindow);


function checkGuess() {

	// error handling
	if (guess.value === '') {
		hint.textContent = "Nem írtál be semmit!⚠️";

	} else {
		if (randomNumber == guess.value) {
			hint.textContent = "Eltaláltad!✨";
		} else if (randomNumber > guess.value) {
			hint.textContent = "A szám amire gondoltam nagyobb⬆️";
		} else if (randomNumber < guess.value) {
			hint.textContent = "A szám amire gondoltam kisebb⬇️";
		}

	}

	tries--;
	setupWindow();
}

function setupWindow() {

	if (tries > 0) {
		message.textContent = `You have ${tries} tries left`;
		restartButton.setAttribute("class", "hidden");
	} else {
		hint.textContent = "";
		message.textContent = `You have no more tries left`;
		restartButton.removeAttribute("class", "hidden");
	}

	guess.value = "";
	guess.focus();
}