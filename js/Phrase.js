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
                li.innerText = letter;
                ul.appendChild(li);
            } else if (regexSpace.test(letter)) {
                li.className = "space";
                li.innerText = letter;
                ul.appendChild(li);
            }
        }
    }
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }
    showMatchedLetter(letter) {
        const letters = document.querySelectorAll(".letter");
        for (let i = 0; i < letters.length; i++) {
            if (letter === letters[i].innerText) {
                letters[i].classList.add("show");
                letters[i].classList.remove("hide");
            }
        }
        return letters;
    }
}
