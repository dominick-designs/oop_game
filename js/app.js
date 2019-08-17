/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 create a new instance of the `Game` class and add event listeners for the startbutton and onscreen keyboard buttons.
 * */

const game = new Game();
const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay();

// const game = new Game(); game.getRandomPhrase().addPhraseToDisplay();