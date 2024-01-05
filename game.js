   function playRockPaperScissors() {
    // Get user input
    const userChoice = prompt('Choose rock, paper, or scissors:').toLocaleLowerCase();

    // Validate user input
    const validChoices = ['rock', 'paper', 'scissors'] ;
    if (!validChoices.includes(userChoice)) {
        alert('Invalid choice. Please choose rock, paper, or scissors.');
        return; 
    }

    // Generate bot's choice
    const botChoices = ['rock', 'paper', 'scissors'];
    const botChoice = botChoices[Math.floor(Math.random() * 3)];

    // Display choices
    console.log(`You chose: ${userChoice}`);
    console.log(`Bot chose: ${botChoice}`);

    // Determine the winner
    if (userChoice === botChoice) {
        return 'Tie';
    } else if (
        (userChoice === 'rock' && botChoice === 'scissors') ||
        (userChoice === 'paper' && botChoice === 'rock') ||
        (userChoice === 'scissors' && botChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Bot wins!';
    }
}

// Call the function to play the game
const result = playRockPaperScissors();
alert(result);
