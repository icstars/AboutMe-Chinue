let battleShipOne = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

let battleShipTwo = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
]
                                                                    
function battleShips (a, b, c){
    if(a == b && a == c && b == c) {
        return Win;
    } else{
        return Lose;
    }
    }

    console.log (battleShips[0][0], board[0][0])

// function battleShips() {
//     const userChoice = prompt('Choose a row:');
//     const validChoices = [''] ;
//     if (!validChoices.includes(userChoice)) {
//         alert('Wrong.');
//         return; 
//     }
//     const userChoiceTwo = prompt('Choose a column:');
//     const validChoicesTwo = [''] ;
//     if (!validChoicesTwo.includes(userChoiceTwo)) {
//         alert('Wrong.');
//         return; 
//     console.log(`You chose: ${userChoice}`);
//     console.log(`You chose: ${userChoiceTwo}`);
// }

// const result = battleShips();
// alert(result);









