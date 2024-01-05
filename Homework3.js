// Homework Assignment: Guess The Number
//                                      //let playAgain = 'yes'
                                        // let maxGuesses = 10;  //let guessCount = 0; guessCount < maxGuess; guessCount++
function guessNumberGame() {                                     // something like that
    let number = Math.floor(Math.random() * 101);
    console.log(number);        
    while (true) {              
        let guess = prompt('Please guess a number (1-100).');

        if (guess == number) {
            alert("Correct");
            break;
        } else {
            alert("Wrong, try again");

            if (number < guess) {
                alert("Guess too high");
            }

            if (number > guess) {
                alert("Guess too low");
            }

            //playAgain = prompt ('Play again')
            // if (playAgain) == 'no'
            // alert ('K')
            // return;
        }
    }
}

guessNumberGame();



// function guessNumber() {
//     let play = prompt('Play "Guess the Number Game?"');

//     if (play.toLowerCase() === 'yes') {
//         let number = Math.floor(Math.random() * 101);
//         console.log(number);
//         let maxGuess = 7;

//         for (let guessCount = 1; guessCount < maxGuess; guessCount++) {
//             let userGuess = prompt('Guess a number 1-100!');

//             if (userGuess < number) {
//                 alert('Go higher!');
//             } else if (userGuess > number) {
//                 alert('Go lower!');
//             } else {
//                 alert('Correct!');
//                 return;
//             }
//         }

//         alert('Out of tries. The correct number was ' + number);
//     }
// }
//     guessNumber();

// let points = 0;

// function updatePoints() {
//   console.log(`Current Points: ${points}`);
// }
