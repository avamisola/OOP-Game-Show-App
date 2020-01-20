/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Walking on Sunshine'),
            new Phrase('Genie in a Bottle'),
            new Phrase('What a Wonderful World'),
            new Phrase('Singing in the Rain'),
            new Phrase('Chicken Noodle Soup')
        ];
        this.activePhrase = null;
    }
    startGame() {
    
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
