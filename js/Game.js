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
        const div = document.getElementById('overlay').remove();
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
        /** if checkForWin() === false replace heart with gray heart */
        if (this.checkForWin() === false) {
            /** find the heart.png and replace */
        }
    }

    handleInteraction() {

    }

    /** end Game Class */
}