let x = 5

let arr = [[1,2,3],
['Chinue', 'Chang'],
[true, false]]

for(y of arr){
    for(z of y){
        console.log(z)
            z++
    }
}

// for (let i = 0; i<arr.length; i++) { // for each array in the main array
//     for (j = 0; j < arr[i].length; j++){         // for each element in the array in the main array
//         if (typeof arr[i][j] == "string" && j == 0){    // if that element is a string And is at the first position
//             for (char of arr[i][j])           // log each character in that element to the console
//                 console.log(char);
//         }
//     }
// }

