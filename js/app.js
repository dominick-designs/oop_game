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

let game = new Game();
let phrase;

/** click start button to start game */
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () => {
    game.startGame();
    game.checkForWin();
    phrase = new Phrase(game.activePhrase.phrase);
});

/** when clicking on QWERTY keyboard on screen button displays itself in console */
const keyButtons = document.getElementsByClassName('key');
let arrayOfKeyButtons = [...keyButtons];
const clickKeyButtons = arrayOfKeyButtons.forEach(button => {
    button.addEventListener('click', () => {
        game.handleInteraction(button);
    });
});









