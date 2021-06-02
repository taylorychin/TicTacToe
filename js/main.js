//----------Constants-----------//
const MAX_MOVES = 9;

//-------state variables--------//
let gameOver;


//---------cached element references ------//
//const guessEl = document.getElementById('guess');
//const buttonEl = document.getElementById('replay');
const moveBtns = document.querySelectorAll("div div");

//create representation of board as an array.
let boardState = new Array(9).fill(0);


//--------game state----------//
let playerTurn = 1;
let moveNum = 1;
let gameStatus = null; //null, 1, -1, tie 

//----event listeners------//
document.querySelector(".game-board").addEventListener("click", handleGridClick);
document.querySelector("button").addEventListener('click', init);


//-----functions ----//
function handleGridClick(evt) {
    console.log(moveBtns);
    num = parseInt(evt.target.id);
    if (num >= 0 && num <= 8) {
        if (playerTurn === 1) {
            moveBtns[num].textContent = "X";


        } else if (playerTurn === -1) {
            moveBtns[num].textContent = "O";
        } else {
            return;
        }
        evt.target.id = -1;
        boardState[num] = playerTurn;
        console.log(moveNum++);
        console.log(moveNum);
        playerTurn *= -1;
    }

}



function endGame() {
    if (moveNum === 9) {

    }
}

function checkCol() {
    let scores = [];
    score[0] = boardState[0] + boardState[3] + boardState[6];
    score[1] = boardState[1] + boardState[4] + boardState[7];
    score[2] = boardState[2] + boardState[5] + boardState[8];
    score[3] = boardState[0] + boardState[1] + boardState[2];
    score[4] = boardState[3] + boardState[4] + boardState[5];
    score[5] = boardState[6] + boardState[7] + boardState[8];
    score[6] = boardState[0] + boardState[4] + boardState[8];
    score[7] = boardState[2] + boardState[4] + boardState[6];

    scores.forEach(function (score, i) {
        if (Math.abs(score[i]) === 3) {
            return;
        }
    })
}


function init() {
    boardState = Array(9).fill(0);
    playerTurn = 1;
    gameStatus = null;

    moveBtns.forEach(function (spot, i) {
        moveBtns[i].id = i;
        moveBtns[i].textContent = "";
    })

}



function render() {
    boardState.forEach(function (spot, i) {
        boardSpot = document.getelementById(i);
        boardSpot
    })

}
/*
function renderGrid() {

}

function renderMessage() {
    //display whos turn it is unless the game is over.
}

function getGameStatus() {
    if (totalMoves === MAX_MOVES) return (check_win())
}

*/