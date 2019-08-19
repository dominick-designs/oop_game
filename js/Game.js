/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 
 * create a Game class methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.
 * */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = new Phrase(this.getRandomPhrase().phrase);
    }
    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game 
    */
    createPhrases() {
        let phraseObjects = [
            { phrase: 'first phrase p' },
            { phrase: 'second phrase p' },
            { phrase: 'third phrase p' },
            { phrase: 'fourth phrase p' },
            { phrase: 'fifth phrase p' }
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
        this.activePhrase.addPhraseToDisplay();
        console.log(this.activePhrase);
        this.checkForWin();
    }


    /** * Checks for winning move 
     * @return {boolean} True if game has been won, false if game wasn't won 
     * */
    checkForWin() {
        let phrase = this.activePhrase;
        // let listOf = phrase.querySelectorAll('li');
        console.log(phrase);
    }

    handleInteraction() {

    }

    /** end Game Class */
}