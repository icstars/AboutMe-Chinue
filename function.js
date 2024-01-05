function vendingMachine(money, item) {
    let snacks = ["Pepsi", "Hersheys", "Snickers", "Reeses", "Cheetos", "Coke", "Water"]

    if (money === "$2.00") {
        for (snack of snacks) {
            if (item === snack) {
            return snack
         }
        }
        return "Doesn't exist"
    }
}

console.log(vendingMachine("$2.00", "Reeses"))