/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 create a new instance of the `Game` class and add event listeners for the startbutton and onscreen keyboard buttons.
 * */


/**
 * Inside the app.js file, declare a new variable called `game that’s not set to anything.

● Then, add a "click" event listener to the HTML `<button>` element with an `id` of `btn__reset`. Inside the callback function for this click event listener, use your `game` variable to instantiate a new Game object. Call the `startGame()` method on this new Game object.
 */

/**const game = new Game(); 
 * const randomPhrase = game.getRandomPhrase(); 
 * const phrase = new Phrase(randomPhrase.phrase); 
 * phrase.addPhraseToDisplay();
 */

let game;
let phrase;
const button = document.getElementById('btn__reset');
button.addEventListener('click', () => {
    game = new Game();
    game.startGame();
    game.checkForWin();
    phrase = new Phrase(game.activePhrase.phrase);
    // phrase.checkLetter('p');
    // phrase.showMatchedLetter('p');
});

/**Let's start with testing the new Phrase class methods. To test the `checkLetter()` method, enter the following line of code directly into the console:
 * game.activePhrase.checkLetter('p')
 * */







