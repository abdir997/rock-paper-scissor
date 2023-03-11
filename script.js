function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
    
    // Assign the computer's choice based on the random number
    switch (randomNumber) {
      case 0:
        return 'Rock';
      case 1:
        return 'Paper';
      case 2:
        return 'Scissors';
    }
  }

  function playRound(playerSelection, computerSelection) {
    // Make the playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();
    
    // Determine the winner based on the playerSelection and computerSelection
    if (playerSelection === 'rock') {
      if (computerSelection === 'Paper') {
        return 'You Lose! Paper beats Rock';
      } else if (computerSelection === 'Scissors') {
        return 'You Win! Rock beats Scissors';
      } else {
        return "It's a Tie!";
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'Scissors') {
        return 'You Lose! Scissors beats Paper';
      } else if (computerSelection === 'Rock') {
        return 'You Win! Paper beats Rock';
      } else {
        return "It's a Tie!";
      }
    } else if (playerSelection === 'scissors') {
      if (computerSelection === 'Rock') {
        return 'You Lose! Rock beats Scissors';
      } else if (computerSelection === 'Paper') {
        return 'You Win! Scissors beats Paper';
      } else {
        return "It's a Tie!";
      }
    } else {
      return 'Invalid input. Please enter Rock, Paper, or Scissors.';
    }
  }

  function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt('Enter Rock, Paper, or Scissors:');
      
      // Check if the input is valid
      while (!['Rock', 'Paper', 'Scissors'].includes(playerSelection)) {
        playerSelection = prompt('Invalid input! Enter Rock, Paper, or Scissors:');
      }
      
      const computerSelection = getComputerChoice();
      
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
      
      if (result.startsWith('You Win')) {
        playerScore++;
      } else if (result.startsWith('You Lose')) {
        computerScore++;
      }
    }
    
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    
    if (playerScore > computerScore) {
      console.log('Congratulations! You Won!');
    } else if (playerScore < computerScore) {
      console.log('Sorry, You Lost!');
    } else {
      console.log("It's a Tie!");
    }
  }
  
  // Test the game function
  game();
  
  
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