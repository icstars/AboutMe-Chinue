// Make a function that takes in an array and a target number that returns two numbers from the array that equal the target

// else, return "No number equals the target"

// function twoSum(a, b) {                         
// for (let i = 0; i < a.length; i++){             
//     for (let j = i + 1; j < a.length; j++){     
//         if (a[j] + a[i] === b){                
//             return [a[j],a[i]]                  
//         }
//     }
// }
// return "No number equals the target"
// }
// console.log(twoSum([1,2,10, 89, 32],99));

let board = [
    [0, 1 ,0],
    [0, 1 ,0],
    [1, 0 ,1]
];
// function ticTacToe (a, b, c) {
//     if (a ! = 0 && a == c && a == b && b == c)
// }
function ticTacToe(a, b, c){
if(a == b && a == c && b == c) {
    return true;
} else{
    return false;
}
}

// console.log (ticTacToe(board[1][0], board[1][1]))

function checkWinner (board) {

    // RIGHT
    for (let row = 0; row < 3; row++){                        
        for (let column = 0; column < 3; column++){
            if (ticTacToe(board[row][column], board[row][column + 1], board[row][column + 2])) {
                return "Three in a row!"
            }
        }
    }

    // UP AND DOWN

    for (let row = 0; row < 1; row++){                        
        for (let column = 0; column < 3; column++){
            if (ticTacToe(board[row][column], board[row][column + 1], board[row][column + 2])) {
                return "Three in a row!"
            }
        }
 
    }

    // DIAGONAL RIGHT
    for (let row = 0; row < 1; row++){                        
        for (let column = 0; column < 3; column++){
            if (ticTacToe(board[row][column], board[row+1][column + 1], board[row+2][column + 2])) {
                return "Three in a row!"
            }
        }
 
    }

    // DIAGONAL LEFT
    for (let row = 0; row < 1; row++){                        
        for (let column = 0; column < 3; column++){
            if (ticTacToe(board[row][column], board[row+1][column - 1], board[row+2][column - 2])) {
                return "Three in a row!"
            }
        }
 
    }
}
    console.log(checkWinner(board))