// let board = [
//     [1, 0, 0],
//     [0, 0, 0],
//     [0, 1, 0]
// ];

// let board2 = [
//     [1, 0, 0],
//     [0, 0, 1],
//     [0, 0, 0]
// ]

// function battleShips() {
//     playerOnePoints = 0
//     playerTwoPoints = 0
//     while (playerOnePoints !== 2 || playerTwoPoints !== 2){
//     playerOneChoiceRow = prompt('Player 1: Choose a row (0-2)')
//     playerOneChoiceColumn = prompt('Player 1: Choose a column (0-2)')
//     playerTwoChoiceRow = prompt('Player 2: Choose a row (0-2)')
//     playerTwoChoiceColumn = prompt('Player 2: Choose a column (0-2)')
    
//         if (playerOneChoiceRow == 0 && playerOneChoiceColumn == 0){
//             console.log('Player 1: Hit!')
//             playerOnePoints =+1
        
//         } else if (playerOneChoiceRow == 2 && playerOneChoiceColumn == 1){
//             console.log('Player 1: Hit!')
//             playerOnePoints =+1
//         } else{
//             console.log('Player 1: Missed!')

//         } if (playerTwoChoiceRow == 0 && playerTwoChoiceColumn == 0){
//             console.log('Player 2: Hit!')
//             playerTwoPoints =+ 1 
//         } else if (playerTwoChoiceRow == 1 && playerTwoChoiceColumn == 2){
//                 console.log('Player 2: Hit!')
//                 playerTwoPoints =+1
//         } else{
//             console.log('Player 2: Missed!') 
//         }
//         }

//         if (playerOnePoints = 2){
//             console.log('Player 1: Wins!')
//             }else{
//                 console.log('Player 2: Wins!')
//             }
//         }
//    battleShips()























// function checkWinner(board) {
//     
//     for (let row = 0; row < 3; row++) {
//         for (let column = 0; column < 1; column++) {
//             if (battleShips(board[row][column], board[row][column + 1], board[row][column + 2])) {
//                 return "";
//             }
//         }
//     }

//    
//     for (let row = 0; row < 1; row++) {
//         for (let column = 0; column < 3; column++) {
//             if (battleShips(board[row][column], board[row + 1][column], board[row + 2][column])) {
//                 return "";
//             }
//         }
//     }

//     
//     for (let row = 0; row < 1; row++) {
//         for (let column = 0; column < 1; column++) {
//             if (battleShips(board[row][column], board[row + 1][column + 1], board[row + 2][column + 2])) {
//                 return "!";
//             }
//         }
//     }

//    
//     for (let row = 0; row < 1; row++) {
//         for (let column = 2; column < 3; column++) {
//             if (battleShips(board[row][column], board[row + 1][column - 1], board[row + 2][column - 2])) {
//                 return "!";
//             }
//         }
//     }

//     return "No winner yet";
// }

// console.log(checkWinner(board));
// console.log(checkWinner(board2));

// let row1 = prompt('Choose a row for board 1 (0-2):');
// let col1 = prompt('Choose a column for board 1 (0-2):');

// let board = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ];

// board[row1][col1] = 1;

// let row2 = prompt('Choose a row for board 2 (0-2):');
// let col2 = prompt('Choose a column for board 2 (0-2):');

// let board2 = [
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1]
// ];

// board2[row2][col2] = 1;

// function battleShips(a, b, c) {
//     if (a == b && a == c && b == c) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function checkWinner(board) {
//   
//     for (let row = 0; row < 3; row++) {
//         for (let column = 0; column < 1; column++) {
//             if (battleShips(board[row][column], board[row][column + 1], board[row][column + 2])) {
//                 return "!";
//             }
//         }
//     }

//    
//     for (let row = 0; row < 1; row++) {
//         for (let column = 0; column < 3; column++) {
//             if (battleShips(board[row][column], board[row + 1][column], board[row + 2][column])) {
//                 return "!";
//             }
//         }
//     }

//    
//     for (let row = 0; row < 1; row++) {
//         for (let column = 0; column < 1; column++) {
//             if (battleShips(board[row][column], board[row + 1][column + 1], board[row + 2][column + 2])) {
//                 return "!";
//             }
//         }
//     }

//    
//     for (let row = 0; row < 1; row++) {
//         for (let column = 2; column < 3; column++) {
//             if (battleShips(board[row][column], board[row + 1][column - 1], board[row + 2][column - 2])) {
//                 return "!";
//             }
//         }
//     }

//     return "No winner yet";
// }

// console.log(checkWinner(board));
// console.log(checkWinner(board2));

// function battleShips() {
//     // Get user input
//     const userChoice = prompt('Choose a row:');

//     // Validate user input
//     const validChoices = ['0', '1', '2'] ;
//     if (!validChoices.includes(userChoice)) {
//         alert('Invalid choice. Please choose 0, 1, or 2.');
//         return; 
//     }

//     const userChoice2 = prompt('Choose a row:');
//     // Generate user input2
//     const validChoices2 = ['0', '1', '2'] ;
//     if (!validChoices2.includes(userChoice2)) {
//         alert('Invalid choice. Please choose 0, 1, or 2.');
//         return; 

//     // Display choices
//     console.log(`User 1 chose: ${userChoice}`);
//     console.log(`User 2 chose: ${userChoice2}`);

// if (userChoice === userChoice2) {
//     return 'Tie';
// } else if (
//     (userChoice === '0' && userChoice2 === '1') ||
//     (userChoice === '2' && userChoice2 === '0') ||
//     (userChoice === '1' && userChoice2 === '2')
// ) {
//     return 'User 1 win!';
// } else {
//     return 'User 2 wins!';
// }
// }
// }

const b1 = [
[0,0,0,0,0,0],
[0,0,1,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0]
];

const b2 = [
[0,1,0,0,0,0],
[0,0,0,0,0,0],
[0,0,1,0,0,0],
[0,0,0,0,0,0]
];

let u1Row;
let u1Column;
let u1Score = 0;

while(u1Score < 2){
u1Row = prompt ("Please select your row");
u1Column = prompt('PLease select your column')


    if(b2[u1Row][u1Column] == 1){
        alert ("hit");
        b2[u1Row][u1Column] = 0;
        u1Score++;
    } else {
        alert ("miss");
    }
    alert(`current score: user1: ${u1Score}`);

    if(u1Score >= 2){
        alert('user 1 wins');
        break;
    }


}