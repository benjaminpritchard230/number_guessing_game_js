const answer = 95;
let guesses = 0;
let guessesRemaining = 10 - guesses;
let guessedNumbers = [];

function submitGuess() {
  let userGuess = document.getElementById("guess").value;
  document.getElementById("guess").value = "";
  console.log(userGuess);
  if (guessedNumbers.includes(userGuess) === false) {
    if (userGuess > 0 && userGuess < 101) {
      if (guesses < 10) {
        if (userGuess > answer) {
          console.log("Too high!");
          document.getElementById("hint").innerHTML = "Too high!";
          guesses += 1;
          guessedNumbers.push(userGuess);
        } else if (userGuess < answer) {
          console.log("Too low!");
          document.getElementById("hint").innerHTML = "Too low!";
          guesses += 1;
          guessedNumbers.push(userGuess);
        } else {
          console.log("Correct guess!");
          document.getElementById("hint").innerHTML =
            "Correct guess! You win the game.";
        }
        console.log(`You have made ${guesses} guesses.`);
        document.getElementById(
          "guesses"
        ).innerHTML = `You have made ${guesses} guesses.`;
      } else {
        document.getElementById("hint").innerHTML =
          "You have run out of guesses! Game over!";
      }
      document.getElementById("guessed").innerHTML = guessedNumbers;
    } else {
      console.log("Wrong value");
      document.getElementById("hint").innerHTML =
        "Please guess a number from 1 to 100.";
    }
  } else {
    console.log("Alrady guessed!")
    document.getElementById("hint").innerHTML = "You have already guessed that number."

  }
}

function restart() {
  document.getElementById("guess").value = "";
  document.getElementById("hint").innerHTML = "";
  document.getElementById("guesses").innerHTML = "";
  guessedNumbers = [];
  document.getElementById("guessed").innerHTML = guessedNumbers;

  guesses = 0;
}
