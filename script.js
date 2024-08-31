var timer = 0;
var character = document.getElementById("character");
var block = document.getElementById("block");
var game = document.getElementById("title");

var timerInterval; // Variable to store the timer interval ID
var gameOver = false; // Flag to check if the game is over

// TIMER FUNCTION
function runTimer() {
    timer = 0;
    timerInterval = setInterval(function () {
        if (!gameOver) {
            timer++;
            document.querySelector("#scoremain").textContent = timer;
        }
    }, 1000);
}

runTimer();

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 40 && blockLeft > 0 && characterTop >= 230) {
        if (!gameOver) {
            gameOver = true; // Set the gameOver flag to true
            clearInterval(timerInterval); // Stop the timer interval
            block.style.animation = "none";
            block.style.display = "none";
            character.style.display = "none";

            document.querySelector("#gameover").innerHTML = `<h1>Game Over</h1>`;
            //window.onclick = function(){location.reload();}; //use this function if u want to reload the game by clicking anywhere on the screen after game over
        }
    }
}, 10);
