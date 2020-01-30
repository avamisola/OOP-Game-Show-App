/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    //default and phrase values set
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
    //reset board for new game
    resetGame() {
        const ul = document.querySelector("#phrase ul");
        const keyButtons = document.querySelectorAll(".key");
        const hearts = document.querySelectorAll(".tries img");
        ul.innerHTML = "";
        for (let i = 0; i < keyButtons.length; i++) {
            keyButtons[i].disabled = false;
            keyButtons[i].classList.remove("chosen");
            keyButtons[i].classList.remove("wrong");
        }
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].src = "images/liveHeart.png";
        }
    }
    //display board with new phrase
    startGame() {
        const div = document.querySelector("#overlay");
        div.style.visibility = "hidden";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    //pick a random phrase from list of phrases
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
    //apply game logic after a letter is picked 
    handleInteraction(button) {
        const buttonText = button.innerText;
        button.disabled = true;
        if (this.activePhrase.checkLetter(buttonText)) {
            button.classList.add("chosen");
            this.activePhrase.showMatchedLetter(buttonText);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add("wrong");
            this.removeLife();
        }
    }
    //end game if complete phrase uncovered
    checkForWin() {
        const letterLength = document.querySelectorAll(".letter").length;
        const showLength = document.querySelectorAll(".show").length;
        if  (letterLength === showLength) {
            this.gameOver(true);
        } else {
            return false;
        }
    }
    //remove heart and end game after losing five
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
    //display win or lose screen based on gameWon value
    gameOver(gameWon) {
        const div = document.querySelector("#overlay");
        const h1 = document.querySelector("#overlay h1");
        div.style.visibility = "visible";
        if (gameWon) {
            div.classList.add("win");
            div.classList.remove("lose");
            div.classList.remove("start");
            h1.innerText = "YOU WIN"

        } else {
            div.classList.add("lose");
            div.classList.remove("win");
            div.classList.remove("start");
            h1.innerText = "YOU LOSE"
        }
    } 
}
