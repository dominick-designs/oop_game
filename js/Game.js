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
            { phrase: 'first phrase space1' },
            { phrase: 'second phrase space2' },
            { phrase: 'third phrase space3' },
            { phrase: 'fourth phrase space4' },
            { phrase: 'fifth phrase space5' }
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
};