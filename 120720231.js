let arr = [0, 4, 5, 6, 3, 2, 1]

for (let i = 0; i < arr.length; i++){   //iterating through the array
    for (let j = 0; j < arr.length; j++){   // iterating through the array each time i increases by one (iterates 100 times)
        if (arr[j] > arr[j + 1]){        // if the element at position j is more than the element directly ahead of it
            let temp = arr[j];          // temp equals arr[j]
            arr[j] = arr [j+1];     // arr[j] now equals the next element of
            arr[j+1] = temp;        // and the next element ahead equals (which was the first arr[j] before it was changed)
        }
    }
}

console.log(arr)