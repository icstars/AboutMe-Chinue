const grabGuessNameLabel = document.getElementById("guessNameLabel")
console.log(grabGuessNameLabel);
const grabGuessButton = document.getElementById("guessButton")
console.log(grabGuessButton)

console.log(grabGuessNameLabel.value)

grabGuessButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(grabGuessNameLabel.value);

    const paragraphElement = document.querySelector (".paragraph");
    console.log(paragraphElement);

    if (grabGuessNameLabel.value == 'tennis'){
       paragraphElement.textContent = 'You guessed it right. It was tennis.'

    } else {
        paragraphElement.textContent = 'You guessed it wrong. It was tennis.'
    }
})