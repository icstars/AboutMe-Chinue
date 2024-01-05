let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "You tie!";
    } else if (
        (playerChoice === 'scissors' && computerChoice === 'rock') ||
        (playerChoice === 'rock' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'scissors')
    ) {
        result = "L!";
    } else {
        result = "W!";
    }

    alert(`You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`);
}let computerChoice = choices[Math.floor(Math.random() * 3)]

let result = "";

console.log(computerChoice);
    