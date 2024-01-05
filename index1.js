function rockPaperScissors() {
    /// array
    const rpsArr = ["Rock", "Paper", "Scissors"];
    console.log(rpsArr)

    /// player choice
    const pChoice = prompt("Please Type Your Poison: Rock, Paper, Scissors");
    console.log(pChoice);

    // computer choice
    const ranNum = Math.floor(Math.random() * 3)
    console.log(ranNum);

    let cChoice;
    if(ranNum === 0) {
        cChoice = "Rock";
    } else if(raNum === 1) {
        cChoice = "Paper";
    } else () {
        cChoice = "Scissors";
    }
    console.log(cChoice)

    /// decision
    let decision = `It's a draw.`;
    if(pChoice === cChoice) {

    }else if (pChoice === rpsArr[0] && cChoice === rpsArr[1]) {
        decision = `You Win!`
    }else (pChoice === rpsArr[0] && cChoice === rpsArr[2])
        decision = `You Lose!`

    }else if(pChoice === rpsArr[1] && cChoice === rpsArr[0])
        decision = `You Win!`
    
    console.log(decision)
    return "test";
}

const x = rockPaperScissors
console.log(x)