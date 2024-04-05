// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the player's guess
function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const messageElement = document.getElementById('message');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageElement.textContent = 'Please enter a valid number between 1 and 100.';
    } else if (guess === randomNumber) {
        messageElement.textContent = `Congratulations! You guessed the correct number ${randomNumber}.`;
    } else if (guess < randomNumber) {
        messageElement.textContent = 'Too low! Try a higher number.';
    } else {
        messageElement.textContent = 'Too high! Try a lower number.';
    }
}


