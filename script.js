document.addEventListener('DOMContentLoaded', () => {
    // Get the buttons and the result display element
    const rockButton = document.querySelector('#rock');
    const paperButton = document.querySelector('#paper');
    const scissorsButton = document.querySelector('#scissors');
    const resultDisplay = document.querySelector('#results');
  
    // Get the score elements
    const playerScoreDisplay = document.querySelector('#player-score');
    const computerScoreDisplay = document.querySelector('#computer-score');
  
    // Initialize the score variables
    let playerScore = 0;
    let computerScore = 0;
  
    // Add event listeners to the buttons
    rockButton.addEventListener('click', () => playRound('rock'));
    paperButton.addEventListener('click', () => playRound('paper'));
    scissorsButton.addEventListener('click', () => playRound('scissors'));
  
    function playRound(playerSelection) {
      // Get the computer's selection
      const computerSelection = getComputerChoice();
  
      // Determine the winner
      let result;
      if (playerSelection === 'rock') {
        if (computerSelection === 'Paper') {
          result = 'You Lose! Paper beats Rock';
          computerScore++;
        } else if (computerSelection === 'Scissors') {
          result = 'You Win! Rock beats Scissors';
          playerScore++;
        } else {
          result = "It's a Tie!";
        }
      } else if (playerSelection === 'paper') {
        if (computerSelection === 'Scissors') {
          result = 'You Lose! Scissors beats Paper';
          computerScore++;
        } else if (computerSelection === 'Rock') {
          result = 'You Win! Paper beats Rock';
          playerScore++;
        } else {
          result = "It's a Tie!";
        }
      } else if (playerSelection === 'scissors') {
        if (computerSelection === 'Rock') {
          result = 'You Lose! Rock beats Scissors';
          computerScore++;
        } else if (computerSelection === 'Paper') {
          result = 'You Win! Scissors beats Paper';
          playerScore++;
        } else {
          result = "It's a Tie!";
        }
      }
  
      // Update the display
      resultDisplay.textContent = result;
      playerScoreDisplay.textContent = playerScore;
      computerScoreDisplay.textContent = computerScore;
  
      // Check if either player has reached 5 points
      if (playerScore === 5) {
        resultDisplay.textContent = 'Congratulations! You Won!';
        disableButtons();
      } else if (computerScore === 5) {
        resultDisplay.textContent = 'Sorry, You Lost!';
        disableButtons();
      }
    }
  
    function disableButtons() {
      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorsButton.disabled = true;
    }
  
    function getComputerChoice() {
      // Generate a random number between 0 and 2
      const randomNum = Math.floor(Math.random() * 3);
  
      // Map the number to a choice (0 = rock, 1 = paper, 2 = scissors)
      if (randomNum === 0) {
        return 'Rock';
      } else if (randomNum === 1) {
        return 'Paper';
      } else {
        return 'Scissors';
      }
    }
  });
  

  
  // Test the game function
  //game();

  
  
  /* Test the playRound function
  const playerSelection = 'Rock';
  const computerSelection = getComputerChoice();
  console.log(`Player chose: ${playerSelection}`);
  console.log(`Computer chose: ${computerSelection}`);
  console.log(playRound(playerSelection, computerSelection));
  */


  
  /* Test the getComputerChoice function
  console.log(getComputerChoice(1));
  console.log(getComputerChoice(0));
  console.log(getComputerChoice(2));
  */