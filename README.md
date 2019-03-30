# Word-Guess-Game

### This is a game similar to Hangman where the player tries to guess the concealed word before the number of guesses runs out. 

#### This was made using vanilla Javascript with the help of event listeners. The `words.js' file contains over 850 random words for the game.

#### The game begins after a key press, after which the concealed word is displayed follwed by various metrics such as the number of guesses left, the letters already guessed for that particular word, and the number of times the user guessed the word correctly. Pressing a letter that the user already pressed will not decrement the number of guesses nor will it add a duplicate to the list of already guessed letters.