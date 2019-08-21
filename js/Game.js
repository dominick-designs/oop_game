/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 
 * create a Game class methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.
 * */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game 
    */
    createPhrases() {
        let phraseObjects = [
            { phrase: 'Once in a while' },
            { phrase: 'You see the light' },
            { phrase: 'In the strangest of places' },
            { phrase: 'If you look at it right' },
            { phrase: 'Might as well try' }
        ];
        return phraseObjects;
    }

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        let randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];

    }

    /** * Begins game by selecting a random phrase and displaying it to user */
    startGame() {
        this.resetGame();
        const div = document.getElementById('overlay').style.display = 'none'; // Hide
        let active = new Phrase(this.getRandomPhrase().phrase);
        this.activePhrase = active;
        this.activePhrase.addPhraseToDisplay();
        console.log(this.activePhrase.phrase);
        this.checkForWin();
    }


    /** * Checks for winning move 
     * @return {boolean} True if game has been won, false if game wasn't won 
     * */
    checkForWin() {
        let classes = document.getElementsByClassName('hide letter');
        if (classes.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    /** * Increases the value of the missed property 
     *  Removes a life from the scoreboard 
     * Checks if player has remaining lives and ends game if player is out */

    removeLife() {
        if (game.checkForWin() === false) {
            game.missed++;
        }
        // let liveHeart = document.getElementsByClassName('tries');
        let liveHeart = document.getElementById('scoreboard').querySelector('li.tries');
        if (liveHeart === null && this.checkForWin() === false) {
            this.gameOver(false);
        } else {
            liveHeart.classList.remove('tries');
            liveHeart.innerHTML = `<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">`;
            liveHeart.classList.add('lost');
        }
    }


    /** * Displays game over message 
     * @param {boolean} gameWon - Whether or not the user won the game */

    gameOver(gameWon) {
        const winOrLose = (winOrLose, remove, removeStart, gameOverInnerHTML) => {
            document.getElementById('overlay').style.display = 'block'; // show
            document.getElementById('overlay').classList.add(winOrLose);
            document.getElementById('overlay').classList.remove(remove);
            document.getElementById('overlay').classList.remove(removeStart);
            document.getElementById("game-over-message").innerHTML = gameOverInnerHTML;
            return true;
        };
        if (gameWon == false) {
            winOrLose('lose', 'win', 'start', 'You did not win. Better luck next time.');
        }
        if (gameWon == true) {
            winOrLose('win', 'lose', 'start', 'Congratulations! You Won!');
        }
    }

    /** * Handles onscreen keyboard button clicks 
     *  @param (HTMLButtonElement) button - The clicked button element */

    handleInteraction(button) {
        button.disabled = true;
        const buttonHTML = button.innerHTML;

        if (game.activePhrase.phrase.includes(buttonHTML)) {
            button.classList.add('chosen');
            phrase.showMatchedLetter(buttonHTML);
            if (this.checkForWin() === true) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
            if (this.missed === 5) {
                this.gameOver(false);

            }
        }
    }

    /**reset game so clicking start game button again (after win or lose) will start fresh game */

    resetGame() {
        /** remove all li elements from phrase div */
        let removeLis = document.getElementById('phrase').firstElementChild;
        removeLis.innerHTML = '';
        /** remove 'wrong' and 'chosen' class from all key buttons */
        const keyButtons = document.getElementsByClassName('key');
        let arrayOfKeyButtons = [...keyButtons];
        const clickKeyButtons = arrayOfKeyButtons.forEach(button => {
            button.classList.remove('wrong', 'chosen');
            button.disabled = false;
        });
        /**Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the `liveHeart.png` image. */
        let lostHeart = document.querySelectorAll('li.lost');
        let arrayOfLostHearts = [...lostHeart];
        arrayOfLostHearts.forEach(lost => {
            lost.classList.remove('lost');
            lost.innerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">`;
            lost.classList.add('tries');
        });
    }


    /** to allow key strokes to reveal letters
     * issues:
     * when 'z' (or any wrong key) is pressed more than once lives continue to be removed (wrong keys are not disabled); although chosen keys are disabled
     * start button does not seam to completely refresh when clicking after game is over
     *     */
    keyStrokeHandler() {
        /** press key to get same action as clicking onscreen letter button 
         * adapted from https://medium.com/javascript-in-plain-english/how-to-detect-a-sequence-of-keystrokes-in-javascript-83ec6ffd8e93
        */
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
                        /**this works - displays letter on screen */
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


    /** end Game Class */
}