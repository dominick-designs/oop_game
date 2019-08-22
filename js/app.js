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



/** NOT SHIPPING WITH THIS BECAUSE OF KNOWN ISSUES */

/** to allow key strokes to reveal letters
 * press key to get same action as clicking onscreen letter button
     * adapted from https://medium.com/javascript-in-plain-english/how-to-detect-a-sequence-of-keystrokes-in-javascript-83ec6ffd8e93
         * issues:
         * when 'z' (or any wrong key) is pressed more than once lives continue to be removed (wrong keys are not disabled); although chosen keys are disabled
         * start button does not seam to completely refresh when clicking after game is over
         * */

/* NOT SHIPPING WITH THIS BECAUSE OF KNOWN ISSUES

function keyStrokeHandler() {

    document.addEventListener('DOMContentLoaded', () => {
        'use strict';

        let buffer = [];

        const keyButtons = document.getElementsByClassName('key');
        let arrayOfKeyButtons = [...keyButtons];
        document.addEventListener('keydown', event => {
            const charList = 'abcdefghijklmnopqrstuvwxyz';
            const key = event.key.toLowerCase();

            if (charList.indexOf(key) === -1) return;
            buffer.push(key);
            buffer.forEach(key => {
                if (game.activePhrase.phrase.includes(key)) {
                    // this works - displays letter on screen
                    arrayOfKeyButtons.forEach(button => {
                        if (button.innerHTML == key && game.activePhrase.phrase.includes(button.innerHTML)) {
                            phrase.showMatchedLetter(key);
                            button.disabled = true;
                            button.classList.add('chosen');
                            if (game.checkForWin() === true) {
                                game.gameOver(true);
                            }
                        }
                    });
                }
                if (!game.activePhrase.phrase.includes(key)) {
                    arrayOfKeyButtons.forEach(button => {
                        if (button.innerHTML == key && !game.activePhrase.phrase.includes(button.innerHTML)) {
                            button.disabled = true;
                            button.classList.add('wrong');
                            game.removeLife();
                            if (game.missed === 5) {
                                game.gameOver(false);
                            }
                        }
                    });
                }
            });
        });
    });
}
keyStrokeHandler();
*/
