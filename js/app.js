/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//click button to start new game
const game = new Game();
const startButton = document.querySelector("#btn__reset");
startButton.addEventListener("click", (e) => {
    game.startGame();
});

//click buttons to select letters
const keyButtons = document.querySelectorAll(".key");
keyButtons.forEach(key => {
    key.addEventListener("click", (e) => {
        console.log("ok")
    });
});