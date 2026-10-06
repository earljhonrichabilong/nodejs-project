const secretNum = 7;

function checkGuess(guess) {
    if (guess === secretNum) {
        return "Correct! You guessed the secret number.";
    } else if (guess < secretNum) {
        return "Too low! Try a higher number.";
    } else {
        return "Too high! Try a lower number.";
    }
}

console.log(checkGuess(5));