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
        div.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    }
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
    handleInteraction() {
    
    }
    checkForWin() {
    
    }
    removeLife() {
    
    }
    gameOver() {
    
    } 
}
