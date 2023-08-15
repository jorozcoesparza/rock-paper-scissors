const buttons = document.querySelectorAll('button');

const div = document.createElement('div');
div.setAttribute("id", "scoreContainer");

const parentDiv = document.createElement('div');
parentDiv.setAttribute("id", "flexParent");

parentDiv.appendChild(div);

const heading = document.querySelector('.heading');
heading.insertAdjacentElement('afterend', parentDiv);






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

         if (playerScore == 5 || computerScore == 5) {
            if (playerScore > computerScore) {
               scoreStatement = "You win the game!";
              } else if (playerScore < computerScore) {
               scoreStatement = "You loose the game!";
              } else {
               scoreStatement = "You tied the game!";
              }
      
              console.log(scoreStatement)
              playerScore = 0;
              computerScore = 0;
         };


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