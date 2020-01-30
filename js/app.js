/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//create game object
let game = new Game();

//click button to start new game
const startButton = document.querySelector("#btn__reset");
startButton.addEventListener("click", (e) => {
    game = new Game();
    game.resetGame();
    game.startGame();
});

//click buttons to select letters
const keyButtons = document.querySelectorAll(".key");
keyButtons.forEach(key => {
    key.addEventListener("click", (e) => {
        game.handleInteraction(e.target);
    });
});
