/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 create a Phrase class to handle the creation of phrases.
 * */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        const div = document.createElement('div');
        div.setAttribute('id', 'phrase');
        div.setAttribute('class', 'section');
        const ul = document.createElement('ul');
        let li = document.createElement('li');
        li.setAttribute('class', 'hide letter');

        li.innerHTML = 'ok list';
        ul.appendChild(li);
        div.appendChild(ul);

    }
}
