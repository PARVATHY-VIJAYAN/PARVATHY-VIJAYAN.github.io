document.addEventListener("DOMContentLoaded", function() {
    const wordDisplay = document.getElementById("word-display");
    const keypad = document.getElementById("keypad");
    const guessHistory = document.getElementById("guess-history");

    const word = "HELLO"; // Change this to a randomly generated word later
    let guesses = [];

    // Initialize the word display with underscores
    wordDisplay.textContent = "_".repeat(word.length);

    // Function to handle user guesses
    function handleGuess(letter) {
        if (!guesses.includes(letter)) {
            guesses.push(letter);
            const wordSoFar = word.split("").map(char => guesses.includes(char) ? char : "_").join("");
            wordDisplay.textContent = wordSoFar;

            if (wordSoFar === word) {
                alert("Congratulations! You guessed the word.");
                resetGame();
            } else if (guesses.length === 6) {
                alert("Sorry, you've run out of guesses.");
                resetGame();
            }
        }
    }

    // Function to reset the game
    function resetGame() {
        guesses = [];
        wordDisplay.textContent = "_".repeat(word.length);
    }

    // Event listener for keypad buttons
    keypad.addEventListener("click", function(event) {
        if (event.target.classList.contains("key")) {
            const letter = event.target.textContent;
            handleGuess(letter);
        }
    });
});

