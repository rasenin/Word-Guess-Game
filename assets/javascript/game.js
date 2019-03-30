var guessedWordDiv = document.getElementById("guessed-word");
var winsDiv = document.getElementById("wins");
var numGuessesDiv = document.getElementById("num-guesses");
var GuessedDiv = document.getElementById("guessed");
var ResultDiv = document.getElementById("result");

var randIndex = Math.floor(Math.random() * words.length);
var word = words[randIndex];

var gameInfo = {
  wins: 0,
  numGuesses: 10,
  targetWord: word,
  currentWord: HideWord(word),
  alreadyGuessed: [],
  Display: function() {
    guessedWordDiv.textContent = DisplayWord(this.currentWord);
    numGuessesDiv.textContent = "Guesses left: " + this.numGuesses;
    GuessedDiv.textContent = "Already guessed: " + this.alreadyGuessed;
    winsDiv.textContent = "Wins: " + this.wins;
    ResultDiv.textContent = GetResult();
  },
  GetNewWord: function() {
    this.numGuesses = 10; // reset number of allowed guesses

    // copy the last word to the spot where the current target word was located and pop the last word from the array
    // this ensures we always get a new word
    words[randIndex] = words[words.length - 1];
    words.pop();

    randIndex = Math.floor(Math.random() * words.length);
    this.targetWord = words[randIndex];
    this.currentWord = HideWord(this.targetWord);
    this.alreadyGuessed = [];
  }
};

function HideWord(word) {
  var hiddenWord = "";
  for (var i = 0; i < word.length; i++) {
    hiddenWord += "_";
  }
  return hiddenWord;
}

function DisplayWord(word) {
  console.log(gameInfo.targetWord);
  var displayedWord = "";
  for (var i = 0; i < word.length; i++) {
    displayedWord += word[i];
    displayedWord += " ";
  }
  return displayedWord;
}

function onKeyDown(event) {
  event.preventDefault();
}

function GetResult() {
  if (gameInfo.currentWord === gameInfo.targetWord) {
    gameInfo.wins++;
    gameInfo.GetNewWord();
    return "Congratulations! You guessed the word correctly! Press any key to go again.";
  }
  if (gameInfo.numGuesses === 0) {
    var oldWord = gameInfo.targetWord;
    gameInfo.GetNewWord();
    return (
      "You didn't guess the word \"" +
      oldWord +
      '". Press any key to go again.'
    );
  }
  return "";
}

// starts the game
document.onkeypress = function(event) {
  gameInfo.Display();

  document.onkeypress = function(event) {
    // if didn't run out of guesses
    if (gameInfo.numGuesses > 0) {
      var guessIndex = gameInfo.targetWord.indexOf(event.key);
      for (var i = 0; i < gameInfo.targetWord.length; i++) {
        if (gameInfo.targetWord[i] === gameInfo.targetWord[guessIndex]) {
          var tempString = "";
          for (var j = 0; j < i; j++) {
            tempString += gameInfo.currentWord[j];
          }
          tempString += gameInfo.targetWord[i];
          for (var j = i + 1; j < gameInfo.currentWord.length; j++) {
            tempString += gameInfo.currentWord[j];
          }
          gameInfo.currentWord = tempString;
        }
      }

      if (gameInfo.alreadyGuessed.indexOf(event.key) === -1) {
        gameInfo.alreadyGuessed.push(event.key);
        gameInfo.numGuesses--;
      }

      gameInfo.Display();
    } else {
      onKeyDown(event);
    }
  };
};
