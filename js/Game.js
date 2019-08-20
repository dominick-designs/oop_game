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
            { phrase: 'fp' },
            { phrase: 'sep' },
            { phrase: 'tp' },
            { phrase: 'fop' },
            { phrase: 'fp' }
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
        let classes = document.querySelectorAll('li.hide');
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
        if (liveHeart == null && this.checkForWin() == false) {
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
        const winOrLose = (winOrLose, gameOverInnerHTML) => {
            document.getElementById('overlay').style.display = 'block'; // show
            document.getElementById('overlay').classList.add(winOrLose);
            document.getElementById("game-over-message").innerHTML = gameOverInnerHTML;
            return true;
        };
        if (gameWon == false) {
            winOrLose('lose', 'You did not win. Better luck next time.');
        }
        if (gameWon == true) {
            winOrLose('win', 'Congratulations! You Won!');
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
            if (this.checkForWin() == true) {
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

    /** end Game Class */
}