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
        let div = document.getElementById('phrase');
        let ul = div.firstElementChild;

        let random = game.getRandomPhrase().phrase
        let splitLetters = [...random];

        splitLetters.forEach(letters => {
            let li = document.createElement('li');
            let listText = (li.innerHTML = letters);

            if (listText !== " ") {
                li.setAttribute(`class`, `hide letter ${listText} `);
            } else {
                li.setAttribute('class', 'hide space');
            }

            ul.appendChild(li);
            div.appendChild(ul);
            console.log(listText);
        });
    };
}

