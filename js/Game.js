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
            { phrase: 'first phrase' },
            { phrase: 'second phrase' },
            { phrase: 'third phrase' },
            { phrase: 'fourth phrase' },
            { phrase: 'fifth phrase' }
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
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase);
        const phrase = new Phrase(this.getRandomPhrase().phrase);
        phrase.addPhraseToDisplay();
    }

    /** end Game Class */
}