/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        const regexLetter = /[\w]/
        const regexSpace = /[\s]/
        const ul = document.querySelector("#phrase ul");
        for (let i = 0; i < this.phrase.length; i++) {
            const li = document.createElement("li");
            const letter = this.phrase[i]
            if (regexLetter.test(letter)) {
                li.className = `hide letter ${letter}`;
                ul.appendChild(li);
            } else if (regexSpace.test(letter)) {
                li.className = `space`;
                ul.appendChild(li);
            }
        };
    }
    checkLetter() {
        
    }
    showMatchedLetter() {
        
    }
}
