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

        let random = game.activePhrase.phrase;

        /**could get random phrase this way */
        // let random = new Game();
        // random = random.activePhrase.phrase;
        // console.log(random);
        /**or could get random phrase this way */
        // let random = game.getRandomPhrase().phrase; originally used to get random phrase but called new Game() above instead

        let splitLetters = [...random];
        const listAll = () => splitLetters.forEach(letters => {
            let li = document.createElement('li');
            let listText = (li.innerHTML = letters);

            if (listText !== " ") {
                li.setAttribute(`class`, `hide letter ${listText} `);
            } else {
                li.setAttribute('class', 'hide space');
            }

            ul.appendChild(li);
            div.appendChild(ul);
            // console.log(listText);
            return listText;

        });
        return listAll();
    }


    /** * Checks if passed letter is in phrase 
     *  @param (string) letter - Letter to check 
     * */

    checkLetter(letter) {
        let currentPhrase = game.activePhrase.phrase;
        if (currentPhrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    /** * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display 
     * */

    showMatchedLetter(letter) {
        if (this.checkLetter(letter) === true) {
            let classes = document.querySelectorAll('li.letter');
            classes = [...classes];
            const checkAllLetters = classes.forEach(letters => {
                if (letters.classList.contains(letter)) {
                    letters.classList.add('show');
                    letters.classList.remove('hide');
                }
            });
        }

    }

    /** end Phrase class */
}

