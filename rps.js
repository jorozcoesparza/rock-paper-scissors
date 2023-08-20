const buttons = document.querySelectorAll('button');

const parentDiv = document.createElement('div');
parentDiv.setAttribute("id", "flexParent");

const roundResult = document.createElement('div');
roundResult.setAttribute("id", "scoreContainer");
parentDiv.appendChild(roundResult);

const playerContainer = document.createElement('div');
playerContainer.setAttribute("id", "scoreContainer");
parentDiv.appendChild(playerContainer);

const computerContainer = document.createElement('div');
computerContainer.setAttribute("id", "scoreContainer");
parentDiv.appendChild(computerContainer);

const winnerContainer = document.createElement('div');
winnerContainer.setAttribute("id", "scoreContainer");
parentDiv.appendChild(winnerContainer);

const buttonContainer = document.querySelector('.buttoncontainer');
buttonContainer.insertAdjacentElement('afterend', parentDiv);

buttons.forEach((button) => {

  button.addEventListener('click', () => {
   playRound(button.value, getComputerChoice());
  });
});


let computerSelection = "";
let playerSelection = "";
let result = ""; 



       function getComputerChoice() {
            const randNumber = Math.random();

            if (randNumber < .34 ) {
                 computerSelection = "Rock";
            } else if (randNumber < .67) {
                 computerSelection = "Paper";
            } else {
                 computerSelection = "Scissors";
            }
          return computerSelection;
        }




         let playerScore = 0;
         let computerScore = 0;
         scoreStatement = 0;

        function playRound(playerSelection, computerSelection) {
            winnerContainer.textContent = "";

         if (playerSelection === computerSelection) {
            result = "You tied this round! You chose the same as the computer!";
         } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            result = "You Win the round! Rock beats Scissors!";
            playerScore = playerScore + 1;
         } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            result = "You Loose the round! Paper beats Rock!";
            computerScore = computerScore + 1;
         } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            result = "You Loose the round! Scissors beats Paper!";
            computerScore = computerScore + 1;
         } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            result = "You Win the round! Paper beats Rock!";
            playerScore = playerScore + 1;
         } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            result = "You Loose the round! Rock beats Scissors!";
            computerScore = computerScore + 1;
         } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            result = "You Win the round! Scissors beats Paper!";
            playerScore = playerScore + 1;
         } 

         if (playerScore == 5 || computerScore == 5) {
            if (playerScore > computerScore) {
               scoreStatement = "You win the game!";
              } else if (playerScore < computerScore) {
               scoreStatement = "You loose the game!";
              } else {
               scoreStatement = "You tied the game!";
              }
              
              const scoreStatementText = document.createTextNode(scoreStatement);
              winnerContainer.textContent = "";
              winnerContainer.appendChild(scoreStatementText);

              console.log(scoreStatement);
              playerScore = 0;
              computerScore = 0;
         };


         const roundResultText = document.createTextNode(result);
         roundResult.textContent = "";
         roundResult.appendChild(roundResultText);

         const playerRoundScoreText = `Player Score: ${playerScore}`;
         playerContainer.textContent = playerRoundScoreText;

         const computerRoundScoreText = `Computer Score: ${computerScore}`;
         computerContainer.textContent = computerRoundScoreText;


         console.log(result);
         console.log(playerScore);
         console.log(computerScore);
         return result;
      
     }








/*

let computerSelection = "";
let playerSelection = "";
let result = ""; 
      

       function getComputerChoice() {
            const randNumber = Math.random();

            if (randNumber < .34 ) {
                 computerSelection = "Rock";
            } else if (randNumber < .67) {
                 computerSelection = "Paper";
            } else {
                 computerSelection = "Scissors";
            }
          return computerSelection;
        }

        function getPlayerChoice() {
          const playerGuess = prompt("What is your choice?");
            const firstLetter = playerGuess.charAt(0);
            const firstLetterCap = firstLetter.toUpperCase();
            const remainingLetters = playerGuess.slice(1);
            const remainingLettersLower = remainingLetters.toLocaleLowerCase();
            playerSelection = firstLetterCap + remainingLettersLower;
            return playerSelection;
        }

function game() {

   let playerScore = 0;
   let computerScore = 0;
   scoreStatement = 0;

playerSelection = getPlayerChoice();
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


   function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
               result = "Tie!";
            } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
               result = "You Win! Rock beats Scissors!";
               playerScore = playerScore + 1;
            } else if (playerSelection === "Rock" && computerSelection === "Paper") {
               result = "You Loose! Paper beats Rock!";
               computerScore = computerScore + 1;
            } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
               result = "You Loose! Scissors beats Paper!";
               computerScore = computerScore + 1;
            } else if (playerSelection === "Paper" && computerSelection === "Rock") {
               result = "You Win! Paper beats Rock!";
               playerScore = playerScore + 1;
            } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
               result = "You Loose! Rock beats Scissors!";
               computerScore = computerScore + 1;
            } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
               result = "You Win! Scissors beats Paper!";
               playerScore = playerScore + 1;
            } 
            return result;
            alert(result);
        }

        for (let loopCounter = 0; loopCounter < 4; loopCounter++) {
               playerSelection = getPlayerChoice();
               computerSelection = getComputerChoice();
               console.log(playRound(playerSelection, computerSelection));
        }


        if (playerScore > computerScore) {
         scoreStatement = "You win the game!";
        } else if (playerScore < computerScore) {
         scoreStatement = "You loose the game!";
        } else {
         scoreStatement = "You tied!";
        }

        console.log(scoreStatement)


}

*/