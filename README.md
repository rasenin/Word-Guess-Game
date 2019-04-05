# Word-Guess-Game

#### This is a game similar to Hangman where the player tries to guess the concealed word before the number of guesses runs out. 

This game was made using vanilla Javascript with the help of event listeners. The 'words.js' file contains over 850 random words for the game.

The game begins after a key press, after which the concealed word is displayed follwed by various metrics such as the number of guesses left, the letters already guessed for that particular word, and the number of times the user guessed the word correctly. With each new letter pressed, if it's in the target word then the hidden word will be uncovered for that letter. Pressing a letter that the user already pressed will not decrement the number of guesses nor will it add a duplicate to the list of already guessed letters.

Upon guessing the word correctly, a sound is played from the browser. Once the user guesses the word correctly or runs out of guesses a new word is selected and the all of the metrics apart from the wins counter reset to their initial values.

The game can be played at [this link](https://rasenin.github.io/Word-Guess-Game/).
