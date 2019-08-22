/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
  */
/*create a new instance of the`Game` class and add event listeners for the startbutton and onscreen keyboard buttons.*/
let game;
let phrase;
/** click start button to start game */
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
    game.checkForWin();
    phrase = new Phrase(game.activePhrase.phrase);
});
/** when clicking on QWERTY keyboard on screen button */
const keyButtons = document.getElementsByClassName('key');
let arrayOfKeyButtons = [...keyButtons];
let buffer = [];

const clickKeyButtons = arrayOfKeyButtons.forEach(button => {
    button.addEventListener('click', () => {
        game.handleInteraction(button);
    });
});