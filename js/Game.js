/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Hello world'),
            new Phrase('How are you'),
            new Phrase('Thank you'),
            new Phrase('No problem'),
            new Phrase('Good luck')
        ];
        this.activePhrase = null;
    }
    startGame() {
        const div = document.querySelector("#overlay");
        div.style.visibility = "hidden";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
    handleInteraction() {
    
    }
    checkForWin() {
        const letterLength = document.querySelectorAll(".letter").length;
        const showLength = document.querySelectorAll(".show").length;
        if  (letterLength === showLength) {
            this.gameOver(true);
        } else {
            return false;
        }
    }
    removeLife() {
        this.missed += 1;
        const hearts = document.querySelectorAll(".tries img");
        for (let i = 0; i < this.missed ; i++) {
            hearts[i].src = "images/lostHeart.png"
        }
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }
    gameOver(gameWon) {
        const div = document.querySelector("#overlay");
        const h1 = document.querySelector("#overlay h1");
        div.style.visibility = "visible";
        if (gameWon) {
            div.classList.add("win");
            div.classList.remove("start");
            h1.innerText = "YOU WIN"

        } else {
            div.classList.add("lose");
            div.classList.remove("start");
            h1.innerText = "YOU LOSE"
        }
    } 
}
